# MonoTours - Deployment Instructions

## Prerequisites

Before deploying the website, ensure you have:

1. Node.js (v18 or higher) installed
2. Access to your hosting server
3. Domain name configured
4. Basic knowledge of command line operations

## Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd monotours
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## Production Build

1. Create production build:
```bash
npm run build
```

This will create a `dist` folder containing optimized files.

## Deployment Options

### 1. Traditional Hosting (cPanel, etc.)

1. Build the project:
```bash
npm run build
```

2. Upload contents:
   - Upload all files from the `dist` folder to your hosting
   - Place files in `public_html` or `www` directory
   - Use FTP client or hosting file manager

3. Configure server:

For Apache (.htaccess):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

For Nginx (nginx.conf):
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }

    # Enable GZIP compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### 2. Netlify Deployment

1. Create netlify.toml:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Deploy via Netlify:
   - Connect your repository to Netlify
   - Configure build settings
   - Deploy

### 3. Vercel Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

## Post-Deployment Checklist

1. **SSL Certificate**
   - Install SSL certificate
   - Force HTTPS redirect
   - Update internal links to HTTPS

2. **Performance Verification**
   - Test page load speed
   - Verify all routes work
   - Check images and assets
   - Test responsive design

3. **SEO & Meta Tags**
   ```html
   <!-- Add to index.html -->
   <meta name="description" content="MonoTours - Your trusted travel companion">
   <meta name="keywords" content="travel, tours, vacation, booking">
   <meta property="og:title" content="MonoTours">
   <meta property="og:description" content="Discover your next adventure">
   <meta property="og:image" content="https://your-domain.com/og-image.jpg">
   ```

4. **Analytics & Monitoring**
   - Set up Google Analytics
   - Configure error tracking
   - Set up uptime monitoring

## Environment Variables

Create `.env` file for production:
```env
VITE_API_URL=https://api.your-domain.com
VITE_GOOGLE_MAPS_KEY=your_google_maps_key
```

## Backup Procedures

1. Database Backup (if applicable):
```bash
# Example backup command
mysqldump -u username -p database_name > backup.sql
```

2. Files Backup:
```bash
# Compress dist folder
tar -czf monotours-backup.tar.gz dist/
```

## Security Measures

1. **Headers Configuration**
```nginx
# Add to nginx config
add_header X-Frame-Options "SAMEORIGIN";
add_header X-XSS-Protection "1; mode=block";
add_header X-Content-Type-Options "nosniff";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
```

2. **Content Security Policy**
```html
<!-- Add to index.html -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https: data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval';">
```

## Troubleshooting

1. **404 Errors**
   - Verify .htaccess/nginx configuration
   - Check file permissions
   - Ensure all routes are properly configured

2. **White Screen**
   - Check browser console for errors
   - Verify all dependencies are installed
   - Check server error logs

3. **Performance Issues**
   - Enable caching
   - Optimize images
   - Implement CDN if needed

## Maintenance

1. Regular Updates:
```bash
# Update dependencies
npm update

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

2. Monitoring:
   - Set up uptime monitoring
   - Configure error tracking
   - Monitor server resources

3. Backup Schedule:
   - Daily database backups
   - Weekly file backups
   - Monthly full system backup

## Support

For additional support:
- Email: support@monotours.com
- Documentation: /docs
- Issue Tracker: GitHub Issues

Remember to keep all credentials and sensitive information secure and never commit them to version control.