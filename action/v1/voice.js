const {initClient} = require('../../util')

module.exports = {
    description: 'Make a text-to-speech call via seven',
    execute(input, output) {
        const {from, text, to} = input
        const params = {
            json: true,
            from,
            text,
            to,
        }

        initClient(input).voice(params)
            .then(json => output(null, json))
            .catch(e => output(e, null))
    },
    input: {
        properties: {
            from: {
                description: 'Caller ID',
                displayTitle: 'From',
                title: 'From',
                type: 'string',
                maxLength: 16,
            },
            text: {
                description: 'SMS text',
                displayTitle: 'Text',
                title: 'Text',
                type: 'string',
                maxLength: 10000,
                minLength: 1,
            },
            to: {
                description: 'Recipient phone number',
                displayTitle: 'To',
                title: 'To',
                type: 'string',
                maxLength: 16,
                minLength: 1,
            },
        },
        title: 'Voice',
        type: 'object',
    },
    mock_input: {
        text: 'HI2U',
        to: '491799999999',
    },
    output: {
        properties: {},
        title: 'output',
        type: 'object',
    },
    name: 'voice',
    title: 'Voice',
    version: 'v1',
}
