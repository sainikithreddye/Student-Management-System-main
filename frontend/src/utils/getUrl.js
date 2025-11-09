/**
 * Get API URL based on environment
 * Uses VITE_API_URL in production, falls back to localhost in development
 */
const getUrl = () => {
  // In production, use the environment variable set by Render
  // In development, use localhost
  return import.meta.env.VITE_API_URL || 'http://localhost:5000';
};

export default getUrl;

