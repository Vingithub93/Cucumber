$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GmailLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "Description:  Here Im testing the login feature of gmail application\r\nwith valid and invalid credentials",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@GmailLogin_Feature"
    }
  ]
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Browser is lanuched",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "gmail url is entered",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be on the gmail login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.browser_is_lanuched()"
});
formatter.result({
  "duration": 106151041,
  "status": "passed"
});
formatter.match({
  "location": "Login.gmail_url_is_entered()"
});
formatter.result({
  "duration": 60144,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_on_the_gmail_login_page()"
});
formatter.result({
  "duration": 56546,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Gmail Login Test With Valid Credentials",
  "description": "",
  "id": "login-test;gmail-login-test-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I enter the valid username \"loing@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter the valid password \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on signing button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should be seeing the inbox page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "loing@gmail.com",
      "offset": 28
    }
  ],
  "location": "Login.i_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 2857124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 28
    }
  ],
  "location": "Login.i_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 128000,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_signing_button()"
});
formatter.result({
  "duration": 59117,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_seeing_the_inbox_page()"
});
formatter.result({
  "duration": 68883,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Gmail login test with invalid credentials",
  "description": "",
  "id": "login-test;gmail-login-test-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I enter the valid username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I enter the valid password \"\u003cpwd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on signing button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should be seeing the inbox page",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-test;gmail-login-test-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "pwd"
      ],
      "line": 24,
      "id": "login-test;gmail-login-test-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "viajahsree",
        "sonu123"
      ],
      "line": 25,
      "id": "login-test;gmail-login-test-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "archana",
        "archana234"
      ],
      "line": 26,
      "id": "login-test;gmail-login-test-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "soumya",
        "sian"
      ],
      "line": 27,
      "id": "login-test;gmail-login-test-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Browser is lanuched",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "gmail url is entered",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be on the gmail login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.browser_is_lanuched()"
});
formatter.result({
  "duration": 66313,
  "status": "passed"
});
formatter.match({
  "location": "Login.gmail_url_is_entered()"
});
formatter.result({
  "duration": 49349,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_on_the_gmail_login_page()"
});
formatter.result({
  "duration": 66827,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Gmail login test with invalid credentials",
  "description": "",
  "id": "login-test;gmail-login-test-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GmailLogin_Feature"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I enter the valid username \"viajahsree\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I enter the valid password \"sonu123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on signing button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should be seeing the inbox page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "viajahsree",
      "offset": 28
    }
  ],
  "location": "Login.i_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 115148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sonu123",
      "offset": 28
    }
  ],
  "location": "Login.i_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 110522,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_signing_button()"
});
formatter.result({
  "duration": 169638,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_seeing_the_inbox_page()"
});
formatter.result({
  "duration": 78137,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Browser is lanuched",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "gmail url is entered",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be on the gmail login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.browser_is_lanuched()"
});
formatter.result({
  "duration": 75052,
  "status": "passed"
});
formatter.match({
  "location": "Login.gmail_url_is_entered()"
});
formatter.result({
  "duration": 49863,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_on_the_gmail_login_page()"
});
formatter.result({
  "duration": 798844,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Gmail login test with invalid credentials",
  "description": "",
  "id": "login-test;gmail-login-test-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GmailLogin_Feature"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I enter the valid username \"archana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I enter the valid password \"archana234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on signing button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should be seeing the inbox page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "archana",
      "offset": 28
    }
  ],
  "location": "Login.i_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 94072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "archana234",
      "offset": 28
    }
  ],
  "location": "Login.i_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 119775,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_signing_button()"
});
formatter.result({
  "duration": 60659,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_seeing_the_inbox_page()"
});
formatter.result({
  "duration": 63229,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Browser is lanuched",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "gmail url is entered",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be on the gmail login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.browser_is_lanuched()"
});
formatter.result({
  "duration": 104353,
  "status": "passed"
});
formatter.match({
  "location": "Login.gmail_url_is_entered()"
});
formatter.result({
  "duration": 58088,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_on_the_gmail_login_page()"
});
formatter.result({
  "duration": 60659,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Gmail login test with invalid credentials",
  "description": "",
  "id": "login-test;gmail-login-test-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GmailLogin_Feature"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I enter the valid username \"soumya\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I enter the valid password \"sian\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on signing button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should be seeing the inbox page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "soumya",
      "offset": 28
    }
  ],
  "location": "Login.i_enter_the_valid_username(String)"
});
formatter.result({
  "duration": 318201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sian",
      "offset": 28
    }
  ],
  "location": "Login.i_enter_the_valid_password(String)"
});
formatter.result({
  "duration": 1020915,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_click_on_signing_button()"
});
formatter.result({
  "duration": 401478,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_seeing_the_inbox_page()"
});
formatter.result({
  "duration": 1087743,
  "status": "passed"
});
});