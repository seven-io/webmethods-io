const {initClient} = require('../../util')
const {LookupType} = require('sms77-client/dist/constants/byEndpoint/lookup/LookupType')

module.exports = {
    description: 'Make a mobile number portability lookup via seven',
    execute(input, output) {
        const {number} = input
        const params = {
            json: true,
            number,
            type: LookupType.MobileNumberPortability,
        }

        initClient(input).lookup(params)
            .then(json => output(null, json))
            .catch(e => output(e, null))
    },
    input: {
        properties: {
            number: {
                description: 'The phone number for looking up',
                displayTitle: 'Phone number',
                title: 'Phone number',
                type: 'string',
                maxLength: 16,
                minLength: 1,
            },
        },
        title: 'Lookup MNP',
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
    name: 'lookup_mnp',
    title: 'Lookup MNP',
    version: 'v1',
}
