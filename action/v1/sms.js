const {initClient} = require('../../util')

module.exports = {
    description: 'Send SMS via seven',
    execute(input, output) {
        const {debug, delay, flash, foreign_id, from, label, performance_tracking, text, to} = input
        const params = {
            debug,
            delay,
            flash,
            foreign_id,
            from,
            json: true,
            label,
            performance_tracking,
            text,
            to,
        }

        initClient(input).sms(params)
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
            delay: {
                description: 'Delayed dispatch',
                displayTitle: 'Delay',
                title: 'Delay',
                type: 'string',
            },
            flash: {
                description: 'Enable flash SMS',
                displayTitle: 'Flash',
                enum: [
                    '0',
                    '1',
                ],
                title: 'Flash',
                type: 'string',
            },
            foreign_id: {
                description: 'Set a foreign ID',
                displayTitle: 'Foreign ID',
                title: 'Foreign ID',
                type: 'string',
                maxLength: 64,
            },
            from: {
                description: 'Sender identifier',
                displayTitle: 'From',
                title: 'From',
                type: 'string',
                maxLength: 16,
            },
            label: {
                description: 'Set a label',
                displayTitle: 'Label',
                title: 'Label',
                type: 'string',
                maxLength: 100,
            },
            performance_tracking: {
                description: 'Enable performance tracking',
                displayTitle: 'Performance Tracking',
                enum: [
                    '0',
                    '1',
                ],
                title: 'Performance Tracking',
                type: 'string',
            },
            text: {
                description: 'SMS text',
                displayTitle: 'Text',
                title: 'Text',
                type: 'string',
                maxLength: 1520,
                minLength: 1,
            },
            to: {
                description: 'SMS recipient(s) - separate by comma',
                displayTitle: 'To',
                title: 'To',
                type: 'string',
                minLength: 1,
            },
        },
        title: 'Sms',
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
    name: 'sms',
    title: 'Sms',
    version: 'v1',
}
