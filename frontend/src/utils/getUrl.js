/**
 * Get API URL based on environment
 * Uses VITE_API_URL in production, falls back to localhost in development
 */
const getUrl = () => {
  // In production, use the environment variable set by Render
  // In development, use localhost
  // You can also hardcode your backend URL here if needed:
  // return 'https://student-management-system-main-backend.onrender.com';
  return 'https://student-management-system-main-backend.onrender.com/' || 'http://localhost:5000';
};

export default getUrl;

