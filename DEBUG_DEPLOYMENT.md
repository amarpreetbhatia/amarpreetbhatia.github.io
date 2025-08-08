# 🔍 GitHub Pages Deployment Debugging Guide

This guide will help you verify if your deployment is working correctly and troubleshoot any issues.

## 🚨 Common Issues & Solutions

### 1. **Blank White Screen**
**Cause**: Usually asset path issues or JavaScript errors
**Solution**: 
- Check browser console for errors (F12 → Console)
- Verify all image paths use relative paths (`./image.png` not `/image.png`)
- Ensure base path is correctly set in `vite.config.ts`

### 2. **404 Errors**
**Cause**: Incorrect base path or missing files
**Solution**:
- Check that `vite.config.ts` has `base: '/amarpreetbhatia.github.io/'`
- Verify all assets are in the `dist/` folder after build
- Check GitHub Actions logs for build errors

### 3. **Images Not Loading**
**Cause**: Absolute paths in image sources
**Solution**:
- Use relative paths: `src="./image.png"` instead of `src="/image.png"`
- Ensure images are in the `public/` folder

## 🔧 Verification Steps

### Step 1: Check Local Build
```bash
npm run build
npm run preview
```
Visit `http://localhost:4173` - should work perfectly

### Step 2: Check GitHub Actions
1. Go to **Actions** tab in your repository
2. Click on the latest workflow run
3. Verify all steps completed successfully:
   - ✅ Checkout
   - ✅ Setup Node.js
   - ✅ Install dependencies
   - ✅ Build
   - ✅ Setup Pages
   - ✅ Upload artifact
   - ✅ Deploy to GitHub Pages

### Step 3: Check GitHub Pages Settings
1. Go to **Settings** → **Pages**
2. Verify:
   - Source: "GitHub Actions"
   - Status: "Your site is live at https://amarpreetbhatia.github.io"

### Step 4: Browser Debugging
1. Open your site: `https://amarpreetbhatia.github.io`
2. Press **F12** to open Developer Tools
3. Check:
   - **Console** tab for JavaScript errors
   - **Network** tab for failed requests
   - **Elements** tab for HTML structure

## 🐛 Debugging Commands

### Check Build Output
```bash
# Build the project
npm run build

# Check if dist folder has all files
ls dist/

# Check if images are copied
ls dist/
```

### Check File Structure
```bash
# Should see these files in dist/
index.html
assets/
favicon.ico
favicon-16x16.png
favicon-32x32.png
profile_pic.png
amarpreet_pic.png
banner-image-2.png
```

## 📋 Deployment Checklist

- [ ] Repository is public
- [ ] Repository name is exactly `amarpreetbhatia.github.io`
- [ ] GitHub Actions workflow exists (`.github/workflows/deploy.yml`)
- [ ] Pages source is set to "GitHub Actions"
- [ ] Latest workflow run completed successfully
- [ ] No JavaScript errors in browser console
- [ ] All images load correctly
- [ ] Navigation works properly
- [ ] All sections display correctly

## 🔗 Useful URLs

- **Your Site**: https://amarpreetbhatia.github.io
- **Repository**: https://github.com/amarpreetbhatia/amarpreetbhatia.github.io
- **Actions**: https://github.com/amarpreetbhatia/amarpreetbhatia.github.io/actions
- **Settings**: https://github.com/amarpreetbhatia/amarpreetbhatia.github.io/settings/pages

## 🆘 If Still Not Working

1. **Check GitHub Actions Logs**: Look for specific error messages
2. **Verify File Permissions**: Ensure repository is public
3. **Wait for DNS**: Changes can take 5-10 minutes to propagate
4. **Clear Browser Cache**: Hard refresh (Ctrl+F5)
5. **Try Incognito Mode**: To rule out browser cache issues

## 📞 Next Steps

If you're still seeing issues:
1. Share the specific error messages from browser console
2. Share the GitHub Actions workflow logs
3. Check if the site works in incognito mode
4. Verify all checklist items above
