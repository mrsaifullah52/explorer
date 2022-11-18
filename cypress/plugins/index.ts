const extensionLoader = require("cypress-browser-extension-plugin/loader");
module.exports = (on) => {
  on(
    "before:browser:launch",
    extensionLoader.load(
      "https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa?hl=en"
    )
  );
};

export {};
