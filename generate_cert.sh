# generate_cert.sh
#!/bin/bash

set -e

certbot certonly --webroot \
    -w /usr/share/nginx/html \
    -d vivaarium.ee \
    --agree-tos \
    --non-interactive \
    --config-dir /etc/letsencrypt \
    --logs-dir /var/log/letsencrypt \
    --work-dir /var/lib/letsencrypt
