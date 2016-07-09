# Making calls from the browser
This example allows me to make calls from the browser using one of my Twilio numbers. It uses Amazon S3, Lambda, and API Gateway.

This example is based on this tutorial: https://www.twilio.com/docs/quickstart/php/client/outgoing-calls

## Installation
1. Create a TwiML app in https://www.twilio.com/console/voice/dev-tools/twiml-apps
2. Update `lambda/index.js` with your Twilio credentials and the App SID.
3. Create two lambda functions using the `lambda` directory. Use the handlers: `getResponse` and `getToken`
4. Create an API using API Gateway with two endpoints `getResponse` and `getToken`
5. Add CORS to the `getToken` endpoint
6. Configure your `getResponse` method to return XML. See https://forums.aws.amazon.com/thread.jspa?messageID=649836
7. Update your TwiML app with your `getResponse`endpoint adding `callFrom` to the query string
8. Update `index.html` with your `getToken` endpoint
9. Upload `index.html` to S3

And that's it. Remember that anyone with access to your HTML file or your dynamically generated token will be able to place Twilio calls in your account.

## ToDo
* Ability to select the origination number from a drop-down
* Add keypad
* Improve installation instructions