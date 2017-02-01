export default [{
    module: {
        rules: [{
            test: /\.yml/,
            use: ['json-loader', 'another-loader', 'yml-loader']
        }]
    }
}, {
    module: {
        rules: [{
            test: /\.yml/,
            use: ['json-loader', 'yml-loader']
        }]
    }
}, {
    module: {
        rules: [
            {
                test: /\.json/,
                use: 'json-loader'
            }
        ]
    }
}, {
    module: {
        rules: [{
            test: /\.yml/,
            use: ['json-loader', 'another-loader', 'yml-loader']
        }, {
            test: /\.yml/,
            use: ['json-loader', 'yml-loader']
        }, {
            test: /\.json/,
            use: 'json-loader'
        }]
    }
}];
