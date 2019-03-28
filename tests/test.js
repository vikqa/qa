module.exports = {
    'Pawlytics_pets_world' : function (browser) {

  //create an object for login
  var login = browser.page.login();
  var addpets=browser.page.addpets();
  //execute the login method from //tests/pages/login.js file
  login.navigate().login();
  addpets.navigate().Addpets();
  //You can continue with your tests below:
  // Also, you can use similar Page objects to increase reusability
      browser
      .pause(3000)
        .end();
    }
  };
 