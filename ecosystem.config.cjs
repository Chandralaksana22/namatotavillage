module.exports = {
    apps: [
        {
            name: 'Namatota',
            port: '4001',
            autorestart: true,
            cwd: ' /home/tisielmy/domains/namatota.my.id/public_html',
            watch: false,
            max_memory_restart: '200M',
        }
    ]
}
