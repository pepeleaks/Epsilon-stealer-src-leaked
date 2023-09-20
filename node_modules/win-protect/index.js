const protect = require("./build/Release/winprotect");

module.exports = {
    encrypt: protect.encrypt,
    decrypt: protect.decrypt
}
