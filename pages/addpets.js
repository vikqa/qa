var addpetscommands = {

    Addpets: function() {
      return this.waitForElementVisible('body', 2000)
        .maximizeWindow()
        .pause(2000)
        .verify.visible('@headersPetsmenu')
        .click('@headersPetsmenu')
        .waitForElementVisible('body', 1000)
        .pause(2000)
        .verify.visible('@Addpet')
        .click('@Addpet')
        .waitForElementVisible('body', 3000)
        .pause(1000)
        .verify.visible('@Addpetname')
        .setValue('@Addpetname', 'aidy')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .verify.visible('@CreatePetbutton')
        .click('@CreatePetbutton')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .verify.visible('@headersPetsmenu')
        .click('@headersPetsmenu')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .verify.visible('@Addpet')
        .click('@Addpet')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .verify.visible('@Addpetname')
        .setValue('@Addpetname', 'Teison')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .verify.visible('@Petinternalid')
        .setValue('@Petinternalid', 'shaffi@test.com')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .verify.visible('@CreatePetbutton')
        .click('@CreatePetbutton')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .verify.visible('@headersPetsmenu')
        .click('@headersPetsmenu')
        .waitForElementVisible('body', 1000)
        .pause(2000)
        .verify.visible('@Addpet')
        .click('@Addpet')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .verify.visible('@Addopationfee')
        .clearValue('@Addopationfee')
       .setValue('@Addopationfee', '500')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .verify.visible('@CreatePetbutton')
        .click('@CreatePetbutton')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .verify.visible('@headersPetsmenu')
        .click('@headersPetsmenu')
        .waitForElementVisible('body', 1000)
        .pause(2000)
        .verify.visible('@Addpet')
        .click('@Addpet')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .verify.visible('@Addpetweight')
        .setValue('@Addpetweight', '100')
        .waitForElementVisible('body', 1000)
        .pause(1000)
        .verify.visible('@CreatePetbutton')
        .click('@CreatePetbutton')  
        .waitForElementVisible('body', 1000)
      .pause(1000)
      .verify.visible('@headersPetsmenu')
      .click('@headersPetsmenu')
      .pause(2000)
      .verify.visible('@Addpet')
      .click('@Addpet')
      .waitForElementVisible('body', 1000)
      .pause(1000)
      //.verify.visible('@Dogspecies')
     // .click('@Dogspecies')
      //.waitForElementVisible('body', 1000)
      //.pause(1000);
      browser
          .setValue('@Dogspecies',['dog',browser.Keys.ENTER]);
         
   browser
   .pause(1000)
     .waitForElementVisible('body', 1000)
     

     
         }
  };
  
   module.exports = {
    commands: [addpetscommands],
    url: function() {
      return 'https://app.pawlytics.com/';

    },
              
        elements: {
          headersPetsmenu: {
            
            selector: '//*[@id="__next"]//div[1]//div//div[2]//menu//div[1]/a',      
            locateStrategy: 'xpath'
          },
          Addpet: {
            selector: '//*[@id="__next"]//div[2]//div//div//div//button',      
            locateStrategy: 'xpath'
          }, 
          Addpetname:{
            selector: '//*[@id="__next"]//div[4]//div//div[1]//div[1]//div[1]//div[1]//div[1]//div//input',    
            locateStrategy: 'xpath'
          },
           Petinternalid: {
              selector: '//*[@id="__next"]//div[4]//div//div[1]//div[1]//div[1]//div[1]//div[2]//div/input',      
              locateStrategy: 'xpath'
            },
            Addopationfee: { 
              selector: 'amount',    
              locateStrategy: 'name'
            },
            Addpetweight:{ 
              selector: 'weight_lbs',    
              locateStrategy: 'name'
            },
            CreatePetbutton:{   
              selector: '//*[@id="__next"]/div[4]/div/div[5]/div/div[3]/button',    
              locateStrategy: 'xpath'
            },
           // Dogspecies:{ 
              //selector: '', 
              //locateStrategy: ''

              //           },
                           
                                             
          
            },
          }

         

               
          