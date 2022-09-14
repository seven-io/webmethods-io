module.exports = {
    input: {
        properties: {
            api_key: {
                description: 'seven API key',
                minLength: 1,
                title: 'API key',
                type: 'string',
            },
        },
        type: 'object',
    },
    label: 'Connect to seven',
    mock_input: {
        api_key: 'my api key',
    },
    async validate(input, output) {
        return output(null, true)
    },
}