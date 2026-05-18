@echo off
setlocal

REM =========================================================
REM CONFIG
REM =========================================================
set APP_NAME=nextjs-app
set REPO_DIR=C:\repos\Athoor-frontend
set DEPLOY_DIR=C:\inetpub\athoor-frontend

REM IMPORTANT:
REM Force a consistent PM2 home directory
REM Avoids admin/non-admin socket mismatch
set PM2_HOME=C:\pm2

echo =========================================================
echo DEPLOYMENT STARTED
echo =========================================================

REM =========================================================
REM UPDATE SOURCE
REM =========================================================
cd /d %REPO_DIR%

echo Pulling latest changes...
git pull origin main

if %errorlevel% neq 0 (
    echo Git pull failed
    exit /b 1
)

REM =========================================================
REM INSTALL DEPENDENCIES
REM =========================================================
echo Installing dependencies...

call npm install --no-audit --no-fund

if %errorlevel% neq 0 (
    echo npm install failed
    exit /b 1
)

REM =========================================================
REM ENVIRONMENT
REM =========================================================

set NEXT_PUBLIC_USE_MOCKS=true

REM =========================================================
REM BUILD
REM =========================================================
echo Building Next.js application...

call npm run build

if %errorlevel% neq 0 (
    echo Build failed
    exit /b 1
)

REM =========================================================
REM COPY FILES
REM =========================================================
echo Copying files to deployment directory...

robocopy .next %DEPLOY_DIR%\.next /E
robocopy public %DEPLOY_DIR%\public /E

copy /Y package.json %DEPLOY_DIR%\
copy /Y next.config.ts %DEPLOY_DIR%\
copy /Y web.config %DEPLOY_DIR%\
copy /Y server.js %DEPLOY_DIR%\

REM Robocopy returns weird exit codes
REM 0-7 are usually success
if %errorlevel% geq 8 (
    echo Robocopy failed
    exit /b 1
)

REM =========================================================
REM ENSURE PM2 EXISTS
REM =========================================================
where pm2 >nul 2>nul

if %errorlevel% neq 0 (
    echo Installing PM2 globally...
    call npm install -g pm2
)

REM =========================================================
REM START OR RELOAD PM2 PROCESS
REM =========================================================
cd /d %DEPLOY_DIR%

echo Checking PM2 daemon...

call pm2 ping >nul 2>nul

if %errorlevel% neq 0 (
    echo PM2 daemon not running. Starting daemon...
    call pm2 resurrect >nul 2>nul
)

echo Checking application status...

call pm2 describe %APP_NAME% >nul 2>nul

if %errorlevel% neq 0 (
    echo App does not exist. Starting new PM2 process...
    call pm2 start server.js --name %APP_NAME%
) else (
    echo Reloading existing PM2 application...
    call pm2 reload %APP_NAME%
)

REM =========================================================
REM SAVE PM2 PROCESS LIST
REM =========================================================
call pm2 save

echo =========================================================
echo DEPLOYMENT COMPLETE
echo =========================================================

endlocal
