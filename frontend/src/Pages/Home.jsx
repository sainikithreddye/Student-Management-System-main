import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUserGraduate, 
  FaUserPlus, 
  FaListAlt, 
  FaEdit,
  FaUniversity,
  FaChalkboardTeacher,
  FaArrowRight
} from 'react-icons/fa';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Home = () => {
  const features = [
    {
      icon: FaUserPlus,
      title: 'Student Registration',
      description: 'Effortlessly add new student records with all required academic details and personal information.',
      color: 'primary'
    },
    {
      icon: FaListAlt,
      title: 'Student Directory',
      description: 'View and search complete student records with advanced filtering and search capabilities.',
      color: 'success'
    },
    {
      icon: FaEdit,
      title: 'Record Management',
      description: 'Update and maintain accurate student information throughout their academic journey.',
      color: 'warning'
    },
  ];

  const stats = [
    { value: '500+', label: 'Students Registered' },
    { value: '10+', label: 'Academic Departments' },
    { value: '24/7', label: 'System Availability' },
    { value: '100%', label: 'Data Accuracy' },
  ];

  const getIconColor = (color) => {
    const colors = {
      primary: 'var(--color-primary)',
      success: 'var(--color-success)',
      warning: 'var(--color-warning)',
    };
    return colors[color] || colors.primary;
  };

  const getIconBg = (color) => {
    const colors = {
      primary: 'var(--color-primary-light)',
      success: 'var(--color-success-light)',
      warning: 'var(--color-warning-light)',
    };
    return colors[color] || colors.primary;
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-16) var(--space-8)',
        marginBottom: 'var(--space-12)',
        textAlign: 'center',
        color: 'var(--text-inverse)',
        boxShadow: 'var(--shadow-xl)'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80px',
          height: '80px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 'var(--radius-xl)',
          marginBottom: 'var(--space-6)',
          fontSize: 'var(--font-size-4xl)'
        }}>
          <FaUniversity />
        </div>
        <h1 style={{
          fontSize: 'var(--font-size-5xl)',
          fontWeight: 'var(--font-weight-bold)',
          margin: '0 0 var(--space-4) 0',
          lineHeight: 'var(--line-height-tight)'
        }}>
          CBIT Student Management System
        </h1>
        <p style={{
          fontSize: 'var(--font-size-xl)',
          margin: '0 auto',
          maxWidth: '600px',
          opacity: 0.95,
          lineHeight: 'var(--line-height-relaxed)'
        }}>
          Comprehensive platform for managing student records with efficiency and precision
        </p>
      </div>

      {/* Quick Actions */}
      <Card style={{ marginBottom: 'var(--space-12)' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'var(--font-weight-semibold)',
            margin: '0 0 var(--space-2) 0',
            color: 'var(--text-primary)'
          }}>
            <FaChalkboardTeacher style={{ marginRight: 'var(--space-2)', verticalAlign: 'middle' }} />
            Get Started
          </h2>
          <p style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--text-secondary)',
            margin: '0 0 var(--space-6) 0'
          }}>
            Choose an action to begin managing student records
          </p>
          <div style={{
            display: 'flex',
            gap: 'var(--space-4)',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/students">
              <Button variant="primary" size="lg" icon={<FaListAlt />} iconPosition="right">
                View Students
              </Button>
            </Link>
            <Link to="/add">
              <Button variant="outline" size="lg" icon={<FaUserPlus />} iconPosition="right">
                Add New Student
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Features Section */}
      <div style={{ marginBottom: 'var(--space-12)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 'var(--font-weight-bold)',
            margin: '0 0 var(--space-2) 0',
            color: 'var(--text-primary)'
          }}>
            <FaUserGraduate style={{ marginRight: 'var(--space-3)', verticalAlign: 'middle' }} />
            System Features
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--text-secondary)',
            margin: 0
          }}>
            Everything you need to manage student records efficiently
          </p>
        </div>

        <div className="grid grid--cols-3" style={{ gap: 'var(--space-6)' }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} hover>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '64px',
                    height: '64px',
                    backgroundColor: getIconBg(feature.color),
                    color: getIconColor(feature.color),
                    borderRadius: 'var(--radius-xl)',
                    marginBottom: 'var(--space-4)',
                    fontSize: 'var(--font-size-2xl)'
                  }}>
                    <Icon />
                  </div>
                  <h3 style={{
                    fontSize: 'var(--font-size-xl)',
                    fontWeight: 'var(--font-weight-semibold)',
                    margin: '0 0 var(--space-2) 0',
                    color: 'var(--text-primary)'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: 'var(--font-size-base)',
                    color: 'var(--text-secondary)',
                    margin: 0,
                    lineHeight: 'var(--line-height-relaxed)'
                  }}>
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Stats Section */}
      <Card>
        <div className="grid grid--cols-4" style={{ gap: 'var(--space-6)' }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: 'var(--font-size-4xl)',
                fontWeight: 'var(--font-weight-bold)',
                margin: '0 0 var(--space-2) 0',
                color: 'var(--color-primary)',
                lineHeight: 'var(--line-height-tight)'
              }}>
                {stat.value}
              </h3>
              <p style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Home;
