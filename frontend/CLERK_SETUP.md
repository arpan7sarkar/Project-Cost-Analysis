# Clerk Authentication Setup Guide

## 🔐 Setup Instructions

### 1. Get Your Clerk API Keys

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Sign up or log in
3. Create a new application
4. Copy your **Publishable Key** from the API Keys section

### 2. Configure Environment Variables

1. Create a `.env.local` file in the `frontend` directory:
   ```bash
   touch .env.local
   ```

2. Add your Clerk publishable key:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
   ```

### 3. Configure Clerk Application Settings

In your Clerk Dashboard:

1. **Application Settings**:
   - Go to "Paths" section
   - Set Sign-in URL: `/sign-in`
   - Set Sign-up URL: `/sign-up`
   - Set After sign-in URL: `/`
   - Set After sign-up URL: `/`

2. **Authentication Options** (Optional):
   - Enable/disable social login providers (Google, GitHub, etc.)
   - Configure email/password authentication
   - Set up multi-factor authentication

### 4. Run the Application

```bash
npm run dev
```

## 🎯 Features Implemented

- ✅ Protected routes (requires authentication)
- ✅ Sign-in page at `/sign-in`
- ✅ Sign-up page at `/sign-up`
- ✅ User profile button in navbar
- ✅ Welcome message with user's name
- ✅ Sign-out functionality
- ✅ Automatic redirect to sign-in for unauthenticated users

## 📝 How It Works

1. **Unauthenticated users** are automatically redirected to `/sign-in`
2. **After signing in**, users are redirected to the dashboard
3. **User profile button** in the navbar shows:
   - User avatar
   - Account management options
   - Sign-out button
4. **All routes** (Dashboard, Projects, Predict, Reports) are protected

## 🔧 Customization

### Change Sign-in/Sign-up Appearance

You can customize the Clerk components in the Clerk Dashboard under "Customization" or by passing appearance props:

```tsx
<SignIn 
  appearance={{
    elements: {
      formButtonPrimary: 'bg-green-600 hover:bg-green-700'
    }
  }}
/>
```

### Add More User Information

Access user data anywhere in your app:

```tsx
import { useUser } from '@clerk/clerk-react';

const { user } = useUser();
console.log(user?.emailAddress);
console.log(user?.firstName);
```

## 🚀 Next Steps

- Configure social login providers in Clerk Dashboard
- Add user roles and permissions
- Implement organization features
- Add email verification
- Set up webhooks for user events
