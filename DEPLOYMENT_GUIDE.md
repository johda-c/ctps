# CTPS Website Deployment Guide

## Prerequisites

1. A GitHub account
2. A Vercel account (can sign up with GitHub)
3. Node.js installed locally (for testing)

## Local Development

1. Clone the repository:
   ```
   git clone <repository-url>
   cd ctps-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open http://localhost:3000 to see the website

## Deployment to Vercel

1. Push your code to GitHub:
   ```
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. Go to [Vercel](https://vercel.com) and sign in with GitHub

3. Click "New Project" and import your GitHub repository

4. Keep the default settings and click "Deploy"

5. Wait for the deployment to complete

6. Your site will be live at a URL like: https://your-project-name.vercel.app

## Setting Up EmailJS

1. Create an account at [EmailJS](https://www.emailjs.com/)

2. Create a new service connected to your email provider

3. Create an email template

4. Get your Service ID, Template ID, and User ID

5. Update the Contact.js component with your EmailJS credentials:
   ```javascript
   await send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     formData,
     'YOUR_USER_ID'
   )
   ```

6. Redeploy your website

## Custom Domain (Optional)

1. In your Vercel dashboard, go to your project settings

2. Click on "Domains"

3. Add your custom domain and follow the instructions to set up DNS records

## Maintenance

- All changes pushed to the main branch will automatically trigger a new deployment
- You can manage deployments from the Vercel dashboard
