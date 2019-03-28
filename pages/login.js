var loginCommands = {

    login: function() {
      return this.waitForElementVisible('body', 1000)
         .maximizeWindow()
        .verify.visible('@userName')
        .verify.visible('@password')
        .verify.visible('@submit')
        .setValue('@userName', 'qa@pawlytics.com')
        .setValue('@password', 'test@123')
        .pause(1000)
        .click('@submit')
        .pause(1000);
        browser
             .setCookie({name:'mycokkies',value:'qa@pawlytics.com'})
        .getCookie('mycokkies',function callback(result)  {
        console.log(result);
        })
        browser
        .setCookie({name:'mycokkiesjwt',value:'jwt'})
        .getCookie('mycokkies',function callback(result)  {
        console.log(result);
        })   
         }
  };
  
   module.exports = {
        commands: [loginCommands],
          url: function() {
               return 'https://app.pawlytics.com/login'
            
          },
        elements: {
          userName: {
            selector: '//*[@id="__next"]//div[1]//div[2]//div[1]//div[2]//form//div[1]//div//input',      
            locateStrategy: 'xpath'
          },
          password: {
            selector: '//*[@id="__next"]//div[1]//div[2]//div[1]//div[2]//form//div[2]//div//input',    
            locateStrategy: 'xpath'
          },
          submit: {
            selector: '//*[@id="__next"]//div[1]//div[2]//div[1]//div[2]//form//button',     
            locateStrategy: 'xpath'
          }
        }
      };  