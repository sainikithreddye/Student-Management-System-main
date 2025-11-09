# Deployment Guide for Render

This guide will help you deploy the Student Management System to Render.

## Prerequisites

1. A GitHub account with this repository
2. A MongoDB Atlas account (free tier works)
3. A Render account (free tier works)

## Step 1: Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user (remember username and password)
4. Whitelist IP addresses (use `0.0.0.0/0` for Render)
5. Get your connection string:
   - Click "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Example: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/student-management?retryWrites=true&w=majority`

## Step 2: Deploy Backend to Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the backend service:
   - **Name**: `student-management-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

5. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `PORT` = `10000` (Render sets this automatically, but good to have)
   - `MONGO_URI` = Your MongoDB Atlas connection string
   - `FRONTEND_URL` = (Leave empty for now, we'll update after frontend deployment)

6. Click "Create Web Service"
7. Wait for deployment to complete
8. Copy the service URL (e.g., `https://student-management-backend.onrender.com`)

## Step 3: Deploy Frontend to Render

1. In Render Dashboard, click "New +" → "Static Site"
2. Connect your GitHub repository
3. Configure the frontend service:
   - **Name**: `student-management-frontend`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Plan**: Free

4. Add Environment Variable:
   - `VITE_API_URL` = Your backend URL from Step 2 (e.g., `https://student-management-backend.onrender.com`)

5. Click "Create Static Site"
6. Wait for deployment to complete
7. Copy the frontend URL (e.g., `https://student-management-frontend.onrender.com`)

## Step 4: Update Backend CORS

1. Go back to your backend service in Render
2. Go to "Environment" tab
3. Update `FRONTEND_URL` to your frontend URL from Step 3
4. Save changes (this will trigger a redeploy)

## Step 5: Verify Deployment

1. Visit your frontend URL
2. Test the application:
   - Add a new student
   - View students list
   - Edit a student
   - Delete a student

## Troubleshooting

### Backend Issues

- **MongoDB Connection Error**: 
  - Verify your MongoDB Atlas connection string
  - Check IP whitelist includes `0.0.0.0/0`
  - Ensure password is URL-encoded if it contains special characters

- **CORS Errors**:
  - Verify `FRONTEND_URL` in backend environment variables matches your frontend URL exactly
  - Check that the URL doesn't have a trailing slash

- **Port Issues**:
  - Render automatically sets PORT, but ensure your code uses `process.env.PORT`

### Frontend Issues

- **API Connection Error**:
  - Verify `VITE_API_URL` is set correctly in frontend environment variables
  - Check that the backend URL is accessible (visit it in browser)
  - Ensure backend health endpoint works: `https://your-backend.onrender.com/health`

- **Build Errors**:
  - Check build logs in Render dashboard
  - Ensure all dependencies are in package.json
  - Verify Node.js version compatibility

### General Issues

- **Slow First Load**: 
  - Render free tier spins down after 15 minutes of inactivity
  - First request may take 30-60 seconds to wake up
  - Consider upgrading to paid tier for always-on service

- **Environment Variables Not Working**:
  - Vite requires `VITE_` prefix for environment variables
  - Restart/redeploy after changing environment variables
  - Check variable names are exactly correct (case-sensitive)

## Alternative: Using render.yaml

If you prefer infrastructure as code:

1. The `render.yaml` file is already in the repository
2. In Render Dashboard, go to "New +" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect and use `render.yaml`
5. You'll still need to set environment variables in the dashboard

## Environment Variables Summary

### Backend (.env)
```
NODE_ENV=production
PORT=10000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
FRONTEND_URL=https://your-frontend.onrender.com
```

### Frontend (Environment Variables in Render)
```
VITE_API_URL=https://your-backend.onrender.com
```

## Notes

- Render free tier has limitations (spins down after inactivity, slower cold starts)
- For production use, consider upgrading to paid tier
- MongoDB Atlas free tier is sufficient for development and small applications
- Always use environment variables for sensitive data (never commit .env files)

## Support

If you encounter issues:
1. Check Render service logs
2. Check MongoDB Atlas connection status
3. Verify all environment variables are set correctly
4. Test API endpoints directly using Postman or curl

