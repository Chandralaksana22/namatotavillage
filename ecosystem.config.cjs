module.exports = {
    apps: [
        {
            name: 'Namatota',
            port: '3002', 
            exec_mode: 'fork', 
            instances: 2, 
            script: 'build/index.js'
        }
    ]
}
