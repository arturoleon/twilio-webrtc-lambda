const accountSid = '{ACCOUNT_SID}';
const authToken = '{AUTH_TOKEN}';

const twilio = require('twilio');
const client = new twilio.RestClient(accountSid, authToken);

exports.getToken = (event, context, callback) => {
	var capability = new twilio.Capability(accountSid, authToken);
	capability.allowClientOutgoing("{APP_SID}");

    callback(null, {token: capability.generate()});
};

exports.getResponse = (event, context, callback) => {
	var xml = `<Response>
	<Dial callerId="${event.callFrom}">
		${event.callTo}
	</Dial>
</Response>`;
    callback(null, {body: xml});
};