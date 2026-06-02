# Deployment Guide for Solvrex

## ✨ FREE DEPLOYMENT OPTIONS

Choose one of these three options to deploy your Solvrex app to solvrex.in for FREE.

---

## **OPTION 1: GitHub Pages + Custom Domain** ✅ RECOMMENDED

**Cost**: FREE  
**Setup Time**: 10 minutes  
**Best For**: Full control, GitHub-native

### What You Already Have

✓ GitHub Actions workflow configured in `.github/workflows/deploy.yml`  
✓ `.nojekyll` file to disable Jekyll processing  
✓ Static build output in `dist/`

### Steps to Set Up

#### **Step 1: Configure GitHub Repository Settings**

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - **Branch**: Leave as is (Actions will handle it)
4. Click **Save**

#### **Step 2: Configure Your Domain DNS**

You need to add DNS records pointing to GitHub Pages. Go to your domain registrar (GoDaddy, Namecheap, etc.):

**Option A: Using A Records (Recommended)**

Add these A records to your DNS:
```
Type: A
Name: @ (or solvrex.in)
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**Option B: Using CNAME Record**

Add this CNAME record:
```
Type: CNAME
Name: www
Value: tulsi-kumari.github.io (replace with YOUR-USERNAME.github.io)
```

#### **Step 3: Add Custom Domain to GitHub**

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter: `solvrex.in`
3. Click **Save**
4. GitHub will create a `CNAME` file automatically
5. Wait 5-10 minutes for DNS propagation

#### **Step 4: Enable HTTPS**

1. Go to **Settings** → **Pages**
2. Check the box: **"Enforce HTTPS"**
3. Wait 1-2 minutes for SSL certificate to be issued

#### **Step 5: Commit and Push**

```bash
cd /Users/tulsikumari/solvrex/Solvrexplatform
git add .
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

GitHub Actions will automatically:
1. ✓ Install dependencies
2. ✓ Build the project
3. ✓ Deploy to GitHub Pages
4. ✓ Make it available at https://solvrex.in

### Status Check

- Go to your repo's **Actions** tab
- You should see a "Deploy to GitHub Pages" workflow running
- Once it's green ✓, your site is live!
- Visit https://solvrex.in

### Update Your Site

Every time you push to `main` branch, the site automatically updates! 🚀

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main
# Site updates automatically in 2-3 minutes
```

---

## **OPTION 2: Vercel** (Even Easier!)

**Cost**: FREE  
**Setup Time**: 5 minutes  
**Best For**: Easiest deployment

### Steps

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **Import Project**
4. Select your Solvrex repository
5. Click **Deploy** (it will auto-detect settings)
6. Once deployed, go to **Settings** → **Domains**
7. Add your custom domain: `solvrex.in`
8. Follow DNS instructions (similar to GitHub Pages)

**Vercel Advantages**:
- No GitHub Actions needed (built-in)
- Faster deployments
- Better serverless features (if you add later)
- Automatic previews for pull requests

---

## **OPTION 3: Netlify** (Also Easy!)

**Cost**: FREE  
**Setup Time**: 5 minutes

### Steps

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click **Add new site** → **Import an existing project**
4. Connect your GitHub account
5. Select Solvrex repository
6. Set build command: `npm run build`
7. Set publish directory: `dist`
8. Click **Deploy**
9. Once deployed, go to **Site settings** → **Domain settings**
10. Add custom domain: `solvrex.in`
11. Follow DNS instructions

**Netlify Advantages**:
- Excellent free tier
- Built-in analytics
- Split testing
- Form handling (if you add contact forms)

---

## **COMPARISON TABLE**

| Feature | GitHub Pages | Vercel | Netlify |
|---------|------------|--------|---------|
| **Cost** | FREE | FREE | FREE |
| **Setup Time** | 10 min | 5 min | 5 min |
| **Custom Domain** | ✓ | ✓ | ✓ |
| **HTTPS** | ✓ | ✓ | ✓ |
| **Auto Deploy** | ✓ | ✓ | ✓ |
| **Performance** | Good | Excellent | Excellent |
| **Preview URLs** | No | ✓ | ✓ |
| **Analytics** | No | ✓ | ✓ |
| **Serverless Functions** | No | ✓ | ✓ |

---

## **MY RECOMMENDATION**

**I recommend Option 2 (Vercel)** because:
- ✓ 30 seconds faster to set up
- ✓ Better performance
- ✓ Excellent free tier
- ✓ Future-proof for upgrades
- ✓ Better analytics and monitoring

**But if you prefer GitHub-native, Option 1 (GitHub Pages)** is also excellent and what your workflow is configured for.

---

## **DNS CONFIGURATION HELP**

### For GoDaddy
1. Log in to GoDaddy
2. Go to **Products** → **Domains**
3. Select your domain
4. Click **DNS**
5. Add the A records or CNAME record above

### For Namecheap
1. Log in to Namecheap
2. Go to **Dashboard** → **Manage**
3. Click **Advanced DNS**
4. Add the records above

### For Route 53 (AWS)
1. Go to Route 53
2. Select your hosted zone
3. Create A records pointing to GitHub Pages IPs

---

## **TROUBLESHOOTING**

### Site shows 404
- Wait 5-10 minutes for DNS to propagate
- Run: `nslookup solvrex.in` to check DNS
- Clear browser cache

### HTTPS not working
- Go to Settings → Pages → Enforce HTTPS
- Wait 2-3 minutes for certificate

### GitHub Actions fails
- Check the **Actions** tab for error messages
- Common issues:
  - `npm install` fails: Check `package.json`
  - Build fails: Run `npm run build` locally to debug
  - Deploy fails: Check GitHub Pages settings

### Domain not pointing to site
- Verify DNS records are correct
- Use: `dig solvrex.in` or `nslookup solvrex.in`
- Wait 24 hours for full DNS propagation

---

## **NEXT STEPS AFTER DEPLOYMENT**

1. ✓ Test your site at https://solvrex.in
2. ✓ Check all links work (especially legal pages)
3. ✓ Test on mobile
4. ✓ Run Lighthouse audit
5. ✓ Monitor via Google Search Console
6. ✓ Set up Google Analytics (optional)

---

## **FUTURE SCALING**

Once you get traffic, you can:
- Add serverless functions (Vercel/Netlify)
- Add contact form backend
- Add database (MongoDB, Firebase)
- All still within FREE tier limits!

---

**Good luck! 🚀 Your site will be live in 10-15 minutes!**
