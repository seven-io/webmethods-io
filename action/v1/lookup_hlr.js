const {initClient} = require('../../util')
const {LookupType} = require('sms77-client/dist/constants/byEndpoint/lookup/LookupType')

module.exports = {
    description: 'Make a home location register lookup via seven',
    execute(input, output) {
        const {number} = input
        const params = {
            number,
            type: LookupType.HomeLocationRegister,
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
        title: 'Lookup HLR',
        type: 'object',
    },
    mock_input: {
        number: '491771783130',
    },
    output: {
        properties: {},
        title: 'output',
        type: 'object',
    },
    name: 'lookup',
    title: 'Lookup HLR',
    version: 'v1',
}
