# Xboss v17 Minimal Development Environment

This is a development environment for Odoo 17

 - HTTPS support with Self-signed SSL certificate
 - Custom addons directory
 - Commands history in Odoo service shell
 - Reverse proxy with Traefik
 - Postgres database with admin interface via pgAdmin
 - MailHog for email testing
 - DO NOT support odoo volume for development out of the box (you can add it manually)
 - DO NOT USE IN PRODUCTION
 - NixOS flake support (WIP)


## Usage

*Note: Requires Docker and Docker Compose to be installed. And setup [self-signed SSL certificate](#self-signed-ssl-certificate) before running the following commands.*



`dkc` is an alias for `docker-compose` or `docker compose` depending on the version of Docker you are using.

```bash
dkc up -d
dkc exec web odoo
```

Open your browser and go to [https://xboss.localhost](https://xboss.localhost) to access Odoo.

## Self-signed SSL certificate

Install `mkcert` and create a self-signed SSL certificate for the domain `xboss.localhost` and its subdomains.

```bash
cd traefik/certs
mkcert xboss.localhost "*.xboss.localhost" && mkcert -install
```
