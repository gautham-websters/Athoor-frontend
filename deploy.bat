@echo off
cd C:\repos\Athoor-frontend

echo Pulling latest changes from Git...
git pull origin main

echo Installing dependencies...
call npm install --omit=dev --verbose --no-audit --no-fund --yes

echo Building the application...
call npm run build

echo Copying build files to inetpub...
robocopy .next C:\inetpub\athoor-frontend\.next /E
robocopy public C:\inetpub\athoor-frontend\public /E
copy /Y package.json C:\inetpub\athoor-frontend\
copy /Y next.config.ts C:\inetpub\athoor-frontend\

echo Restarting the application with PM2...
cd C:\inetpub\athoor-frontend
call pm2 reload nextjs-app

echo Deployment complete!
