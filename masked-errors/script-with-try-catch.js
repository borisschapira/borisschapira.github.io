console.log("Script loaded.");
window.cdscript = {
  init: function () {
    // catching and re-throwing and error 
    // makes it visible to error listeners
    try {
      if (!(cdData && cdData.pageType)) {
        throw "Datalayer info is not defined.";
      }
      console.log("Script initialized on:", cdData.pageType);
    } catch (e) {
      throw e;
    }
  },
};
