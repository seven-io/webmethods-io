const Sms77Client = require('sms77-client')

if (!globalThis.fetch) globalThis.fetch = require('node-fetch')

module.exports = {
    initClient(input) {
        return new Sms77Client(input.auth.api_key, 'webmethods.io')
    },
}
