#!/bin/bash

# 🚀 Deployment Script for Rani's Portfolio Website
# This script helps you deploy your website to GitHub

echo "🎨 Rani's Portfolio Website - Deployment Script"
echo "================================================"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git not initialized. Initializing..."
    git init
    git branch -M main
fi

# Add all files
echo "📁 Adding all files to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "✅ No changes to commit"
else
    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "🔄 Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Check if remote origin exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Remote origin already exists"
else
    echo "🔗 Adding remote origin..."
    git remote add origin https://github.com/Groksite/Website.git
fi

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully deployed to GitHub!"
    echo "🌐 Your website is now available at: https://github.com/Groksite/Website"
    echo ""
    echo "🚀 Next Steps:"
    echo "1. Go to your GitHub repository"
    echo "2. Enable GitHub Pages in Settings > Pages"
    echo "3. Or deploy to Vercel/Netlify for better performance"
else
    echo "❌ Failed to push to GitHub"
    echo "💡 Make sure you have:"
    echo "   1. Created the repository on GitHub"
    echo "   2. Set up your GitHub authentication (SSH key or token)"
    echo "   3. Have write access to the repository"
fi

echo ""
echo "📚 For more help, check the README.md file"