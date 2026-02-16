const CLASH_CONFIG = {
    dns: {
        enable: true,
        ipv6: false,
        servers: [
            'https://dns.google/dns-query',
            'https://cloudflare-dns.com/dns-query',
        ],
    },
    // Other configuration settings...
};

export default CLASH_CONFIG;