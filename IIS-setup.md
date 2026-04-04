Hosting a Next.js app on IIS without an SSL certificate is completely feasible using **IIS as a reverse proxy** with **Cloudflare** handling SSL termination. Here's how to set it up:

## The Architecture
Since Cloudflare sits in front of your server, it handles HTTPS encryption at the edge. Your IIS server only needs to accept HTTP traffic from Cloudflare's IP ranges, not public clients.

## Step-by-Step Implementation

### 1. Install Required IIS Components
First, install these IIS extensions:
- **URL Rewrite Module** - Enables request rewriting/routing
- **Application Request Routing (ARR)** - Enables reverse proxy functionality

After installing ARR, open IIS Manager and **enable proxy** under Server Proxy Settings.

### 2. Build and Deploy Your Next.js App
```bash
# Build the application
npm run build
```

Copy these files to your IIS website directory (e.g., `C:\inetpub\wwwroot\your-app`):
- `.next/` folder
- `public/` folder
- `package.json`
- `next.config.js`

### 3. Install Production Dependencies on Server
```bash
cd C:\inetpub\wwwroot\your-app
npm install --omit=dev
```

### 4. Create a Server Entry Point
Create `server.js` in your app root:

```javascript
const { createServer } = require("http");
const next = require("next");

const app = next({ dev: false, conf: { /* your config */ } });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(5173, (err) => {
    if (err) throw err;
    console.log("Server running on http://localhost:5173");
  });
});
```

### 5. Manage the Process with PM2
```bash
npm install -g pm2
pm2 start server.js --name "nextjs-app"
pm2 save
pm2 startup
```

This keeps your app running and restarts it automatically after server reboots.

### 6. Configure IIS Reverse Proxy
Create a `web.config` file in your website root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="ReverseProxyToNextJS" stopProcessing="true">
          <match url="(.*)" />
          <action type="Rewrite" url="http://localhost:5173/{R:1}" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

Alternatively, configure this through IIS Manager's URL Rewrite interface.

### 7. Configure IIS Website Bindings
In IIS Manager:
1. Select your website
2. Click **Bindings**
3. Add an **HTTP** binding on port 80 (no certificate needed)
4. Ensure the hostname matches your domain

### 8. Configure Cloudflare DNS
In your Cloudflare dashboard:
1. Set DNS record (A record) pointing to your server's public IP
2. Set **Proxy Status** to "Proxied" (orange cloud)
3. Under SSL/TLS settings, choose **Flexible** or **Full** mode
4. Optionally, create a firewall rule to block non-Cloudflare traffic

## Optional: Restrict Traffic to Cloudflare Only
Add this to your IIS `web.config` to ensure only Cloudflare can access your server directly:

```xml
<system.webServer>
  <security>
    <ipSecurity allowUnlisted="false">
      <add ipAddress="173.245.48.0" subnetMask="255.255.240.0" allowed="true" />
      <add ipAddress="103.21.244.0" subnetMask="255.255.252.0" allowed="true" />
      <!-- Add all Cloudflare IP ranges -->
    </ipSecurity>
  </security>
</system.webServer>
```

## Testing Your Setup
1. Verify PM2 is running: `pm2 list`
2. Test locally: `http://localhost:5173`
3. Test through IIS locally: `http://localhost`
4. Test through Cloudflare: `https://yourdomain.com`

## Key Points to Remember
- No certificate needed on IIS since Cloudflare terminates SSL
- ARR must have proxy enabled for reverse proxy to work
- PM2 ensures your Next.js app stays running even after crashes
- The `.next` folder must be rebuilt and redeployed for each update

This setup is production-ready and performs well for most Next.js applications on Windows servers.
