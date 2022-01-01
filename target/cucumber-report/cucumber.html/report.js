$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/onlineshoping.feature");
formatter.feature({
  "line": 1,
  "name": "SignUp Page",
  "description": "",
  "id": "signup-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7335903600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "TC-001 Create New User/SignUp",
  "description": "",
  "id": "signup-page;tc-001-create-new-user/signup",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate to SignUp page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Create an account with random username",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShoppingTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 81378100,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTest.navigateToSignUpPage()"
});
formatter.result({
  "duration": 1817725300,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTest.createAnAccountWithRandomUsername()"
});
formatter.result({
  "duration": 5992409900,
  "status": "passed"
});
formatter.after({
  "duration": 620800100,
  "status": "passed"
});
formatter.before({
  "duration": 7229233500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "TC-002 Sign In with newly created user credentials",
  "description": "",
  "id": "signup-page;tc-002-sign-in-with-newly-created-user-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on the Sign In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Login using newly create credentials",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I shall verify the address information in my address section",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShoppingTest.iAmOnTheSignInPage()"
});
formatter.result({
  "duration": 1844761500,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTest.loginUsingNewlyCreateCredentials()"
});
formatter.result({
  "duration": 2425658700,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTest.iShallVerifyTheAddressInformationInMyAddressSection()"
});
formatter.result({
  "duration": 1391854100,
  "status": "passed"
});
formatter.after({
  "duration": 611322900,
  "status": "passed"
});
formatter.before({
  "duration": 5667971900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "TC-003 Add product to Online Cart and checkout",
  "description": "",
  "id": "signup-page;tc-003-add-product-to-online-cart-and-checkout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on the Sign In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Login using newly create credentials",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I add below product to cart",
  "rows": [
    {
      "cells": [
        "category",
        "subCategory",
        "name",
        "model",
        "quantity"
      ],
      "line": 21
    },
    {
      "cells": [
        "Dresses",
        "CASUAL DRESSES",
        "Printed Dress",
        "demo_3",
        "2"
      ],
      "line": 22
    },
    {
      "cells": [
        "Women",
        "TOPS",
        "Faded Short Sleeve T-shirts",
        "demo_1",
        "3"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I shall validate shopping cart as below",
  "rows": [
    {
      "cells": [
        "name",
        "model",
        "quantity"
      ],
      "line": 25
    },
    {
      "cells": [
        "Printed Dress",
        "SKU : demo_3",
        "2"
      ],
      "line": 26
    },
    {
      "cells": [
        "Faded Short Sleeve T-shirts",
        "SKU : demo_1",
        "3"
      ],
      "line": 27
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I shall be able to Buy the product",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I shall be able to Buy using cheque payment",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShoppingTest.iAmOnTheSignInPage()"
});
formatter.result({
  "duration": 1852390300,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTest.loginUsingNewlyCreateCredentials()"
});
formatter.result({
  "duration": 2031378600,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTest.i_add_below_product_to_cart(DataTable)"
});
formatter.result({
  "duration": 13118947000,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTest.i_shall_validate_shopping_cart_as_below(DataTable)"
});
formatter.result({
  "duration": 212673100,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTest.i_shall_be_able_to_Buy_the_product()"
});
formatter.result({
  "duration": 7068813000,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTest.i_shall_be_able_to_Buy_using_cheque_payment()"
});
formatter.result({
  "duration": 39647900,
  "status": "passed"
});
formatter.after({
  "duration": 631662100,
  "status": "passed"
});
formatter.before({
  "duration": 5281599900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "TC-004 Contact customer service for the previous successful order",
  "description": "",
  "id": "signup-page;tc-004-contact-customer-service-for-the-previous-successful-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I am on the Sign In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Login using newly create credentials",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I am on the contact page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I send refund request to customer care for previous order",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShoppingTest.iAmOnTheSignInPage()"
});
formatter.result({
  "duration": 1829974700,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTest.loginUsingNewlyCreateCredentials()"
});
formatter.result({
  "duration": 1815492300,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTest.iAmOnTheContactPage()"
});
formatter.result({
  "duration": 1245060900,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTest.iSendRefundRequestToCustomerCareForPreviousOrder()"
});
formatter.result({
  "duration": 42000,
  "status": "passed"
});
formatter.after({
  "duration": 636037200,
  "status": "passed"
});
});