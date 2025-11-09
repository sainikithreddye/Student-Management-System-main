import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUserGraduate, 
  FaUserPlus, 
  FaListAlt, 
  FaEdit,
  FaUniversity,
  FaChalkboardTeacher
} from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section with University Theme */}
      <div className="hero-section bg-primary text-white py-5">
        <div className="container text-center py-4">
          <FaUniversity className="display-1 mb-3" />
          <h1 className="display-5 fw-bold">CBIT Student Management System</h1>
          <p className="lead">
            Comprehensive platform for managing student records with efficiency and precision
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <h2 className="text-center mb-5">
          <FaUserGraduate className="me-2" />
          System Features
        </h2>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="icon-wrapper bg-light-primary text-primary rounded-circle mx-auto mb-3">
                  <FaUserPlus size={24} />
                </div>
                <h5 className="card-title">Student Registration</h5>
                <p className="card-text text-muted">
                  Effortlessly add new student records with all required academic details
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="icon-wrapper bg-light-success text-success rounded-circle mx-auto mb-3">
                  <FaListAlt size={24} />
                </div>
                <h5 className="card-title">Student Directory</h5>
                <p className="card-text text-muted">
                  View and search complete student records with filtering capabilities
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="icon-wrapper bg-light-warning text-warning rounded-circle mx-auto mb-3">
                  <FaEdit size={24} />
                </div>
                <h5 className="card-title">Record Management</h5>
                <p className="card-text text-muted">
                  Update and maintain accurate student information throughout their academic journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h3 className="mb-4">
            <FaChalkboardTeacher className="me-2" />
            Get Started
          </h3>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/students" className="btn btn-primary px-4">
              View Students
            </Link>
            <Link to="/add" className="btn btn-outline-primary px-4">
              Add New Student
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container my-5 py-3">
        <div className="row text-center">
          <div className="col-md-3">
            <h3 className="text-primary fw-bold">500+</h3>
            <p className="text-muted">Students Registered</p>
          </div>
          <div className="col-md-3">
            <h3 className="text-primary fw-bold">10+</h3>
            <p className="text-muted">Academic Departments</p>
          </div>
          <div className="col-md-3">
            <h3 className="text-primary fw-bold">24/7</h3>
            <p className="text-muted">System Availability</p>
          </div>
          <div className="col-md-3">
            <h3 className="text-primary fw-bold">100%</h3>
            <p className="text-muted">Data Accuracy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;