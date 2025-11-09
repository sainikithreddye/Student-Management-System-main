/**
 * Get API URL based on environment
 * Uses VITE_API_URL in production, falls back to localhost in development
 */
const getUrl = () => {
  // In production, use the environment variable set by Render
  // In development, use localhost
<<<<<<< HEAD
  // You can also hardcode your backend URL here if needed:
  // return 'https://student-management-system-main-backend.onrender.com';
  return 'https://student-management-system-main-backend.onrender.com/' || 'http://localhost:5000';
=======
  return 'https://student-management-system-main-backend.onrender.com';
>>>>>>> 6e8cec211261597e62822dc16f4e1cc35aa8f049
};

export default getUrl;

