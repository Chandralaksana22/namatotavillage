module.exports = {
    apps: [
        {
            name: 'Namatota',
            port: '3002', 
            exec_mode: 'fork', 
            instances: 'max',
            script: 'build/index.js'
        }
    ]
}
