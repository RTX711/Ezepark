# 🚀 EZE PARK - Quick Reference Card

## Essential Commands

### Development
```bash
npm run dev          # Start local server at localhost:3000
```

### Deployment
```bash
git add .
git commit -m "Your message"
git push             # Vercel auto-deploys in 1-2 minutes
```

---

## Common Edits

### 1. Change Contact Info

**File:** `src/App.jsx`
**Lines:** ~380-420 (Contact section)

```jsx
// Find and update:
href="mailto:YOUR_EMAIL@example.com"
href="tel:+91XXXXXXXXXX"
```

### 2. Update Hero Text

**File:** `src/App.jsx`
**Lines:** ~70-100

```jsx
<h1>Your New Headline</h1>
<p>Your new description</p>
```

### 3. Change Colors

**File:** `src/App.jsx`

Find: `from-cyan-500 to-blue-600`
Replace with your colors: `from-purple-500 to-pink-600`

### 4. Add a New Section

**File:** `src/App.jsx`

Copy any `<section>` block (lines ~142-170 for example)
Paste it where you want
Update content

### 5. Update Team Members

**File:** `src/App.jsx`
**Lines:** ~330-370

```jsx
{ 
  name: 'Your Name', 
  role: 'Your Role', 
  desc: 'Your description' 
}
```

---

## Troubleshooting

### Website not updating?
1. Wait 2-3 minutes after push
2. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
3. Check Vercel dashboard for deployment status

### Local server not starting?
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Git push rejected?
```bash
git pull origin main --rebase
git push
```

---

## File Locations

| What to Edit | File Location |
|--------------|---------------|
| Main content | `src/App.jsx` |
| Colors/fonts | `src/index.css` |
| Meta tags | `index.html` |
| Site icon | `public/favicon.svg` |

---

## Vercel Dashboard

**URL:** https://vercel.com/dashboard

**What you can do:**
- ✅ View deployment status
- ✅ See visitor analytics
- ✅ Manage domains
- ✅ View build logs
- ✅ Roll back to previous versions

---

## GoDaddy DNS Settings

**URL:** https://dcc.godaddy.com/

**Your DNS Records:**
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## Performance Tips

### Before Pushing:
1. ✅ Test locally (`npm run dev`)
2. ✅ Check all links work
3. ✅ Verify text has no typos
4. ✅ Test on mobile (responsive)

### After Deployment:
1. ✅ Test both ezepark.in and www.ezepark.in
2. ✅ Check all pages/sections
3. ✅ Verify forms/links work
4. ✅ Test on different browsers

---

## Support Contacts

**Technical Issues:**
- Vercel Docs: https://vercel.com/docs
- React Docs: https://react.dev/

**Domain Issues:**
- GoDaddy Support: 1-480-505-8877
- GoDaddy Chat: https://www.godaddy.com/contact-us

**EZE PARK Team:**
- Tarun Prasad: tarun.prasad.mbaie27@sibmpune.edu.in
- Phone: +91-96438241589

---

## Backup & Safety

### Create Backup:
```bash
# In VS Code terminal
git add .
git commit -m "Backup before changes"
git push
```

### Restore Previous Version:
1. Go to Vercel dashboard
2. Click "Deployments"
3. Find previous working version
4. Click "..." → "Promote to Production"

---

## Analytics (Optional)

To add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `index.html` in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Pro Tips

✨ **Commit Often:** Save your work frequently with git commits
🔍 **Test First:** Always test locally before pushing
📱 **Mobile First:** Check mobile view - most users are on phones
⚡ **Keep It Fast:** Optimize images, minimize code
🎯 **SEO Matters:** Use descriptive text and proper headings
🔒 **HTTPS Only:** Make sure SSL is working (https://)

---

*Keep this card handy for quick reference!*
*Last Updated: February 2026*
