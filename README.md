# Student Management System (MERN)

![MERN Stack](https://miro.medium.com/v2/resize:fit:1400/1*J3G3akaMpUOLegw0p0qthA.png)

A modern, full-stack CRUD application for managing student records with a beautiful, production-grade UI inspired by modern SaaS dashboards (Stripe, Linear, Notion).

## 🚀 Live Demo  
[![Live Demo](https://img.shields.io/badge/Render-Live_Demo-blue)](https://student-management-system-frontend-6nyh.onrender.com)

## ✨ Features

### Core Functionality
- ✅ **Add/Edit/Delete Students** - Full CRUD operations with form validation
- ✅ **Student Directory** - View all student records in a beautiful card grid layout
- ✅ **Search & Filter** - Real-time search across student records
- ✅ **Responsive Design** - Fully responsive across mobile, tablet, and desktop
- ✅ **Form Validation** - Comprehensive client-side validation with error messages

### Modern UI/UX Features
- 🎨 **Modern Design System** - Custom design tokens with consistent spacing, typography, and colors
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent preference
- 📱 **Mobile-First** - Optimized for all screen sizes with collapsible sidebar
- 🎯 **Professional Sidebar** - Collapsible navigation with active state indicators
- 👤 **User Profile Menu** - Top bar with user menu and theme toggle
- ⚡ **Smooth Animations** - Polished transitions and hover effects
- 🎨 **Reusable Components** - Modular UI component library (Button, Card, Input, Switch, Loader, Alert)
- ♿ **Accessibility** - ARIA labels, keyboard navigation, and focus states
- 📊 **Loading States** - Beautiful loading indicators and empty states
- 🎭 **Error Handling** - User-friendly error messages and alerts

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router v7** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Icons** - Icon library
- **React Toastify** - Toast notifications
- **Custom CSS** - Modern design system with CSS variables

### Backend
- **Node.js** - Runtime environment
- **Express.js 5** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
Student-Management-System-main/
├── backend/
│   ├── models/
│   │   └── Student.js          # Student data model
│   ├── routes/
│   │   └── students.js         # API routes
│   ├── server.js               # Express server
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/             # Reusable UI components
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Switch.jsx
│   │   │   │   ├── Loader.jsx
│   │   │   │   └── Alert.jsx
│   │   │   ├── layout/         # Layout components
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── TopBar.jsx
│   │   │   ├── AddStudent.jsx
│   │   │   ├── EditStudent.jsx
│   │   │   ├── StudentList.jsx
│   │   │   └── Footer.jsx
│   │   ├── Pages/
│   │   │   └── Home.jsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.jsx
│   │   ├── styles/
│   │   │   └── design-tokens.css
│   │   ├── utils/
│   │   │   └── getUrl.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Student-Management-System.git
   cd Student-Management-System-main
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   
   Create a `.env` file in the backend directory (copy from `env.example`):
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   FRONTEND_URL=http://localhost:5173
   NODE_ENV=development
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```
   
   **Note**: Backend URL is hardcoded in `frontend/src/utils/getUrl.js`
   For local development, you may need to update it to `http://localhost:5000`

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev  # Development with nodemon
   # or
   npm start    # Production mode
   ```
   Server will run on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:5173` (or the port Vite assigns)

3. **Build for Production**
   ```bash
   cd frontend
   npm run build
   ```

## 🚀 Deployment to Render

This application is ready to deploy to Render. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deployment Steps:

1. **Set up MongoDB Atlas** (free tier)
2. **Deploy Backend**:
   - Create a new Web Service in Render
   - Connect your GitHub repository
   - Set root directory to `backend`
   - Add environment variables (see `backend/env.example`)
   - Build command: `npm install`
   - Start command: `npm start`

3. **Deploy Frontend**:
   - Create a new Static Site in Render
   - Connect your GitHub repository
   - Set root directory to `frontend`
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`
   - **Note**: Backend URL is hardcoded in `frontend/src/utils/getUrl.js`

4. **Update Backend CORS**:
   - Add `FRONTEND_URL` environment variable in backend with your frontend URL

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🎨 Design System

The application uses a comprehensive design system with:

- **Color Palette**: Primary, secondary, success, warning, danger, and info variants
- **Spacing Scale**: Consistent spacing from 4px to 80px
- **Typography**: System font stack with multiple sizes and weights
- **Shadows**: 6 levels of elevation (xs to 2xl)
- **Border Radius**: Consistent rounded corners
- **Dark Mode**: Full dark theme support with automatic system preference detection

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 API Endpoints

### Students API
- `GET /students` - Get all students
- `GET /students/:id` - Get student by ID
- `POST /students` - Create new student
- `PUT /students/:id` - Update student
- `DELETE /students/:id` - Delete student

## 📝 Student Model

```javascript
{
  studentId: String (required, unique),
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique),
  dob: Date (required),
  department: String (required),
  enrollmentYear: Number (required),
  isActive: Boolean (default: true)
}
```

## 🎯 Key Features Explained

### Modern Sidebar Navigation
- Collapsible sidebar for desktop
- Mobile overlay with backdrop
- Active route highlighting
- Smooth animations

### Theme System
- Light and dark mode support
- Persistent theme preference (localStorage)
- System preference detection
- Smooth theme transitions

### Form Validation
- Real-time validation
- Error messages
- Required field indicators
- Input icons for better UX

### Student Cards
- Beautiful card-based layout
- Hover effects
- Status badges
- Quick action buttons

## 🛡️ Error Handling

- Comprehensive error states
- User-friendly error messages
- Loading indicators
- Empty state designs
- Toast notifications for actions

## ♿ Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Semantic HTML

## 📦 Dependencies

### Frontend Dependencies
- `react` ^19.1.0
- `react-dom` ^19.1.0
- `react-router-dom` ^7.5.0
- `axios` ^1.8.4
- `react-icons` ^5.5.0
- `react-toastify` ^11.0.5

### Backend Dependencies
- `express` ^5.1.0
- `mongoose` ^8.13.2
- `cors` ^2.8.5
- `dotenv` ^16.5.0

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Developed by CSE Department, CBIT

## 🙏 Acknowledgments

- Design inspiration from modern SaaS platforms (Stripe, Linear, Notion)
- Icons provided by React Icons
- Built with React and Express.js

---

**Note**: Make sure to update the MongoDB connection string in the backend `.env` file before running the application.
