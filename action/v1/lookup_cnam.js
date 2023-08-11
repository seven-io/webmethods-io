const {initClient} = require('../../util')
const {LookupType} = require('sms77-client/dist/constants/byEndpoint/lookup/LookupType')

module.exports = {
    description: 'Make a caller name delivery lookup via seven',
    execute(input, output) {
        const {number} = input
        const params = {
            number,
            type: LookupType.CallingNameDelivery,
        }

        initClient(input).lookup(params)
            .then(json => output(null, json))
            .catch(e => output(e, null))
    },
    input: {
        properties: {
            number: {
                description: 'The phone number(s) for looking up - separate by comma',
                displayTitle: 'Phone number',
                title: 'Phone number',
                type: 'string',
                maxLength: 16,
                minLength: 1,
            },
        },
        title: 'Lookup',
        type: 'object',
    },
    mock_input: {
        number: '491799999999',
    },
    output: {
        properties: {},
        title: 'output',
        type: 'object',
    },
    name: 'lookup_cnam',
    title: 'Lookup CNAM',
    version: 'v1',
}
