@echo off
REM 🚀 Deployment Script for Rani's Portfolio Website (Windows)
REM This script helps you deploy your website to GitHub

echo 🎨 Rani's Portfolio Website - Deployment Script
echo ================================================

REM Check if git is initialized
if not exist ".git" (
    echo ❌ Git not initialized. Initializing...
    git init
    git branch -M main
)

REM Add all files
echo 📁 Adding all files to git...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "🔄 Update: %date% %time%"

REM Check if remote origin exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo 🔗 Adding remote origin...
    git remote add origin https://github.com/Groksite/Website.git
) else (
    echo 🔗 Remote origin already exists
)

REM Push to GitHub
echo 🚀 Pushing to GitHub...
git push -u origin main

if errorlevel 0 (
    echo ✅ Successfully deployed to GitHub!
    echo 🌐 Your website is now available at: https://github.com/Groksite/Website
    echo.
    echo 🚀 Next Steps:
    echo 1. Go to your GitHub repository
    echo 2. Enable GitHub Pages in Settings ^> Pages
    echo 3. Or deploy to Vercel/Netlify for better performance
) else (
    echo ❌ Failed to push to GitHub
    echo 💡 Make sure you have:
    echo    1. Created the repository on GitHub
    echo    2. Set up your GitHub authentication (SSH key or token^)
    echo    3. Have write access to the repository
)

echo.
echo 📚 For more help, check the README.md file
pause