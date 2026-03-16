# Docker Setup for IDOR CTF Challenge

## Quick Start

### Using Docker Compose (Recommended)

1. **Build and run the container:**
   ```bash
   docker-compose up -d
   ```

2. **Access the application:**
   - Open your browser and go to `http://localhost`

3. **Stop the container:**
   ```bash
   docker-compose down
   ```

### Using Docker Directly

1. **Build the image:**
   ```bash
   docker build -t idor-challenge .
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 80:80 --name idor-challenge idor-challenge
   ```

3. **Access the application:**
   - Open your browser and go to `http://localhost`

4. **Stop the container:**
   ```bash
   docker stop idor-challenge
   docker rm idor-challenge
   ```

## Security Features

### Source Code Protection
- **Multi-stage build:** Only the compiled/minified code is served
- **No source maps in production:** `.map` files are blocked
- **No hidden files exposed:** `.git`, `.env`, etc. are not served
- **Source inspection prevention:** Minified JavaScript prevents easy source code reading

### Security Headers
The nginx configuration includes security headers:
- `X-Frame-Options: SAMEORIGIN` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
- `X-XSS-Protection: 1; mode=block` - Basic XSS protection
- `Content-Security-Policy` - Controls resource loading

### Network Isolation
- Docker network isolation prevents direct container-to-container access
- Only port 80 is exposed to the host

## Architecture

```
┌─────────────────────────────────────────┐
│         Docker Container                │
├─────────────────────────────────────────┤
│  ┌───────────────────────────────────┐  │
│  │   Nginx (Alpine Linux)            │  │
│  │  - Serves compiled assets only    │  │
│  │  - Blocks source files            │  │
│  │  - Security headers               │  │
│  │  - Port 80                        │  │
│  └───────────────────────────────────┘  │
│           ↑        ↓                     │
│  ┌───────────────────────────────────┐  │
│  │   /usr/share/nginx/html           │  │
│  │   ├── index.html (compiled)       │  │
│  │   └── assets/                     │  │
│  │       ├── js/ (minified)          │  │
│  │       └── css/ (minified)         │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
         ↑                      
    Host Port 80
```

## What's NOT Exposed

- Source code (React/TypeScript files)
- Environment variables
- Build artifacts (source maps)
- Package files
- Configuration files
- Git repository

## What IS Exposed

- Compiled and minified JavaScript/CSS
- Index.html
- Public assets
- The running IDOR challenge application

## Troubleshooting

### Port 80 already in use
```bash
# Use a different port
docker-compose down
# Edit docker-compose.yml: change "80:80" to "8080:80"
docker-compose up -d
# Access at http://localhost:8080
```

### View container logs
```bash
docker-compose logs -f idor-challenge
```

### Rebuild after code changes
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Check container status
```bash
docker-compose ps
```

## Environment

- **Base Image:** node:20-alpine (for building)
- **Runtime Image:** nginx:alpine (for serving)
- **Port:** 80 (HTTP)
- **Health Check:** Enabled, checks every 30 seconds

## Files Included

- `Dockerfile` - Multi-stage build configuration
- `docker-compose.yml` - Container orchestration
- `nginx.conf` - Web server configuration with security settings

---

**Security Note:** This setup is designed for the CTF challenge. For production, consider:
- Using HTTPS (SSL/TLS certificates)
- Running behind a reverse proxy
- Implementing rate limiting
- Adding authentication/authorization for sensitive endpoints
- Using a secrets management system
