module.exports = {
    apps: [
        {
            name: 'Namatota',
            port: '4001',
            exec_mode: 'fork',
            instances: 4,
            script: 'build/index.js',
            max_memory_restart: '4G'
        }
    ]
}
