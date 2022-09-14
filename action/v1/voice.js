const {initClient} = require('../../util')

module.exports = {
    description: 'Make a text-to-speech call via seven',
    execute(input, output) {
        const {debug, from, text, to} = input
        const params = {
            debug,
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
            debug: {
                description: 'Act as sandbox',
                displayTitle: 'Debug',
                enum: [
                    '0',
                    '1',
                ],
                title: 'Debug',
                type: 'string',
            },
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
        to: '491771783130',
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
