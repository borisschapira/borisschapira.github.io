console.log("Script loaded.");
window.cdscript = {
  init: function () {
    if (!(cdData && cdData.pageType)) {
      throw "Datalayer info is not defined.";
    }
    console.log("Script initialized on:", cdData.pageType);
  },
};
