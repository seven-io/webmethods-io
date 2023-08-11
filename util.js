const SevenClient = require('sms77-client')

if (!globalThis.fetch) globalThis.fetch = require('node-fetch')

module.exports = {
    initClient(input) {
        return new SevenClient(input.auth.api_key, 'webmethods.io')
    },
}
