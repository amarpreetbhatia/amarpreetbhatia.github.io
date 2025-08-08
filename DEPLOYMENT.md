# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages using the latest GitHub Actions workflow.

## 📋 Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Repository**: Your code should be in a GitHub repository named `amarpreetbhatia.github.io`
3. **Public Repository**: The repository must be public for GitHub Pages to work

## 🔧 Setup Steps

### Step 1: Repository Configuration

1. Go to your GitHub repository: `https://github.com/amarpreetbhatia/amarpreetbhatia.github.io`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### Step 2: Enable GitHub Actions

1. Go to **Actions** tab in your repository
2. You should see the workflow file `deploy.yml` listed
3. The workflow will automatically run when you push to the `main` branch

### Step 3: First Deployment

1. Push your changes to the `main` branch:
```bash
git add .
git commit -m "Setup GitHub Pages deployment with Actions"
git push origin main
```

2. Go to **Actions** tab to monitor the deployment progress
3. Once completed, your site will be available at: `https://amarpreetbhatia.github.io`

## 🔄 Continuous Deployment

Once set up, your site will automatically deploy whenever you:

1. Push changes to the `main` branch
2. Manually trigger the workflow from the Actions tab

The GitHub Actions workflow will:
- Install dependencies
- Build the project
- Configure GitHub Pages
- Deploy to GitHub Pages

## 📁 Important Files

### Configuration Files
- `vite.config.ts` - Base path configured for GitHub Pages
- `package.json` - Build scripts
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/CNAME` - Custom domain configuration

### Build Output
- `dist/` - Built files (created after `npm run build`)

## 🐛 Troubleshooting

### Common Issues

1. **404 Error on GitHub Pages**
   - Check that the repository is public
   - Verify the repository name is exactly `amarpreetbhatia.github.io`
   - Ensure GitHub Actions is enabled in repository settings
   - Check that Pages source is set to "GitHub Actions"

2. **Build Failures**
   - Check the Actions tab for error logs
   - Verify all dependencies are installed
   - Ensure TypeScript compilation passes

3. **Assets Not Loading**
   - Check that the base path in `vite.config.ts` is correct
   - Verify all image paths are relative to the public folder

4. **Deployment Not Working**
   - Check the Actions tab for workflow runs
   - Ensure the workflow completed successfully
   - Check Pages settings in repository settings

### Debugging Steps

1. **Check GitHub Actions Logs**
   - Go to Actions tab
   - Click on the latest workflow run
   - Review the build and deploy steps
   - Look for any error messages

2. **Test Locally**
   ```bash
   npm run build
   npm run preview
   ```

3. **Verify Build Output**
   - Check the `dist/` folder after building
   - Ensure all assets are present

4. **Check Pages Settings**
   - Go to Settings > Pages
   - Ensure source is set to "GitHub Actions"
   - Check if there are any error messages

## 🔗 Useful Links

- **GitHub Pages**: https://pages.github.com/
- **GitHub Actions**: https://github.com/features/actions
- **Vite Documentation**: https://vitejs.dev/guide/static-deploy.html

## 📞 Support

If you encounter issues:

1. Check the GitHub Actions logs
2. Review the troubleshooting section above
3. Check GitHub Pages documentation
4. Verify your repository settings

## 🎉 Success!

Once deployed, your portfolio will be available at:
**https://amarpreetbhatia.github.io**

The site will automatically update whenever you push changes to the main branch!
