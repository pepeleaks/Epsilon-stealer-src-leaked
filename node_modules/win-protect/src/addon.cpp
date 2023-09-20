#include <node_api.h>
#include <windows.h>
#include <Wincrypt.h>
#include <string>

#define DECLARE_NAPI_METHOD(name, func) { name, 0, func, 0, 0, 0, napi_default, 0 }
#define CHECK(func) { if (func != napi_ok) { napi_throw_error(env, "error", #func); return nullptr; } }

namespace impl
{
    template<class F>
    static napi_value impl(napi_env env, napi_callback_info info, F f, const std::string& name)
    {
        napi_value jsthis;
        size_t argc = 2;
        napi_value args[2];
        CHECK(napi_get_cb_info(env, info, &argc, &args[0], &jsthis, nullptr));

        if (argc != 1 && argc != 2)
        {
            napi_throw_error(env, "args", "Wrong number of arguments");
            return nullptr;
        }

        void* data = nullptr;
        size_t dataLen = 0;
        CHECK(napi_get_buffer_info(env, args[0], &data, &dataLen));

        DATA_BLOB blobIn;
        blobIn.pbData = (BYTE*)data;
        blobIn.cbData = dataLen;

        DATA_BLOB entropy;
        void* ent = nullptr;
        size_t entLen = 0;
        if (argc == 2)
        {
            CHECK(napi_get_buffer_info(env, args[1], &ent, &entLen));
            entropy.pbData = (BYTE*)ent;
            entropy.cbData = entLen;
        }

        DATA_BLOB result;
        result.pbData = nullptr;
        result.cbData = 0;
        auto res = entLen == 0 ? 
            f(&blobIn, nullptr, nullptr, nullptr, nullptr, 0, &result) :
            f(&blobIn, nullptr, &entropy, nullptr, nullptr, 0, &result);
        
        if (!res)
        {
            napi_throw_error(env, "error", ("Cannot " + name + " data").c_str()); 
            return nullptr; 
        }

        napi_value buffer;
        if (napi_create_buffer_copy(env, result.cbData, result.pbData, nullptr, &buffer) != napi_ok)
        {
            LocalFree(result.pbData);
            napi_throw_error(env, "error", "Cannot copy buffer"); 
            return nullptr; 
        }
        
        LocalFree(result.pbData);

        return buffer;
    }
    
    static napi_value encrypt(napi_env env, napi_callback_info info)
    {
        return impl(env, info, CryptProtectData, "encrypt");
    }

    static napi_value decrypt(napi_env env, napi_callback_info info)
    {
        return impl(env, info, CryptUnprotectData, "decrypt");
    }
}

NAPI_MODULE_INIT()
{
    napi_property_descriptor properties[] = {
        DECLARE_NAPI_METHOD("encrypt", impl::encrypt),
        DECLARE_NAPI_METHOD("decrypt", impl::decrypt),
    };

    CHECK(napi_define_properties(env, exports, sizeof(properties) / sizeof(*properties), properties));

    return exports;
}
