module.exports = {
  tags: ['localhost_open'],
  'localhost open' : function (browser) {
      browser
      .url('http://www.localhost/rest_api_shoope') // Go to a url
      .waitForElementVisible('body', 1000) // wait till page loads
      .pause(1000)
  },
  'registration_first' : function(browser){
    browser
    .setValue('input[type=email]', 'aquila_nalia@yahoo.com') // send values
    .setValue('input[type=password]', 'Dika123') // send values
    .setValue('input[type=text]', 'Aqua') // send values
    .click('input[type=submit]') // click on search box
  },
  'login_form' : function(browser){
    browser
    .waitForElementVisible('body', 1000)
    .setValue('input[type=email]', 'dickygeraldi@gmail.com') // send values
    .setValue('input[type=password]', 'Dicky123') // send values
    .click('input[type=submit]') // click on search box
  },
  'date exchange list' : function(browser){
    browser
    .setValue('body > form > input[type="text"]:nth-child(1)', '2018-07-01')
    .click('body > form > input[type="submit"]:nth-child(3))')
    .waitForElementVisible('body', 1000)
    .pause(1000)
  },
  'add currencies exchange' : function(browser){
    browser
    .click('body > div:nth-child(2) > a')
    .waitForElementVisible('body', 1000)
  },
  'insert data': function(browser){
    browser
    .setValue('body > form > input[type="text"]:nth-child(1)', 'GBP')
    .setValue('body > form > input[type="text"]:nth-child(3)', 'USD')
    .setValue('body > form > input[type="text"]:nth-child(5)', '2018-07-08')
    .setValue('body > form > input[type="text"]:nth-child(7)', '0.79432')
    .click('body > form > input[type="submit"]:nth-child(9)')
  }, 
  'add exchange': function(browser){
    browser
    .waitForElementVisible('body', 1000)
    .click('body > div:nth-child(4) > a')
  },
  'add form exchange': function(browser){
    browser
    .waitForElementVisible('body', 1000)
    .setValue('body > form > input[type="text"]:nth-child(1)', 'IDR')
    .setValue('body > form > input[type="text"]:nth-child(3)', 'JPY')
    .click('body > form > input[type="submit"]:nth-child(5)')
  },
  'Trend Data exchange': function(browser){
    browser
    .waitForElementVisible('body', 1000)
    .click('body > div:nth-child(3) > a')
  },
  'get trend': function(browser){
    browser
    .waitForElementVisible('body', 1000)
    .click('body > div:nth-child(6) > a')
  },
  'delete trend exchange': function(browser){
    browser
    .waitForElementVisible('body', 1000)
    .click('body > table > tbody > tr:nth-child(3) > td:nth-child(3) > a')
  },
  after : function(browser){
    browser.pause(5000);
    browser.end();
  }
};
