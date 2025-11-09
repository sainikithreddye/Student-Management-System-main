import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { 
  FaUserEdit, 
  FaIdCard, 
  FaUser, 
  FaEnvelope, 
  FaCalendarAlt, 
  FaGraduationCap,
  FaCalendarCheck,
  FaSave,
  FaArrowLeft,
  FaSpinner
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import getUrl from '../utils/getUrl';
import Card from './ui/Card';
import Input from './ui/Input';
import Button from './ui/Button';
import Switch from './ui/Switch';
import Loader from './ui/Loader';

function EditStudent() {
  const [student, setStudent] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: 'Computer Science',
    enrollmentYear: new Date().getFullYear(),
    isActive: true
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = getUrl();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${apiUrl}/students/${id}`);
        setStudent({
          ...response.data,
          dob: response.data.dob.split('T')[0] // Format date for input
        });
      } catch (error) {
        toast.error('Failed to fetch student data');
        navigate('/students');
      } finally {
        setLoading(false);
      }
    };
    fetchStudent();
  }, [id, navigate, apiUrl]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setStudent({ 
      ...student, 
      [name]: type === 'checkbox' ? checked : value 
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!student.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (student.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    if (!student.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (student.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    if (!student.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!student.dob) {
      newErrors.dob = 'Date of birth is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    
    if (!validate()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setSaving(true);
    try {
      await axios.put(`${apiUrl}/students/${id}`, student);
      toast.success('Student updated successfully!');
      navigate('/students');
    } catch (error) {
      toast.error(`Error: ${error.response?.data?.error || error.message}`);
    } finally {
      setSaving(false);
    }
  };

  // Generate year options for enrollment (2000-current year)
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from(
    { length: currentYear - 2000 + 1 },
    (_, i) => currentYear - i
  );

  const departments = [
    'Computer Science',
    'Electrical',
    'Mechanical',
    'Civil',
    'Electronics'
  ];

  if (loading) {
    return (
      <div className="page-container">
        <div className="empty-state">
          <Loader size="lg" />
          <p className="empty-state__description">Loading student data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <Link to="/students" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: 'var(--space-2)',
          marginBottom: 'var(--space-4)',
          color: 'var(--text-secondary)',
          textDecoration: 'none',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-medium)',
          transition: 'color var(--transition-fast)'
        }}
        onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
        onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
        >
          <FaArrowLeft /> Back to Students
        </Link>
        <h1 className="page-title">
          <FaUserEdit style={{ marginRight: 'var(--space-3)', verticalAlign: 'middle' }} />
          Edit Student Record
        </h1>
        <p className="page-subtitle">
          Update the student information below
        </p>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <Input
              label="Student ID"
              id="studentId"
              name="studentId"
              value={student.studentId}
              readOnly
              icon={<FaIdCard />}
              fullWidth
              helperText="Student ID cannot be changed"
            />

            <Input
              label="First Name"
              id="firstName"
              name="firstName"
              value={student.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              required
              error={errors.firstName}
              icon={<FaUser />}
              fullWidth
            />

            <Input
              label="Last Name"
              id="lastName"
              name="lastName"
              value={student.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              required
              error={errors.lastName}
              icon={<FaUser />}
              fullWidth
            />

            <Input
              label="Email Address"
              id="email"
              name="email"
              type="email"
              value={student.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
              error={errors.email}
              icon={<FaEnvelope />}
              fullWidth
            />

            <Input
              label="Date of Birth"
              id="dob"
              name="dob"
              type="date"
              value={student.dob}
              onChange={handleChange}
              required
              error={errors.dob}
              icon={<FaCalendarAlt />}
              fullWidth
            />

            <div className="input-group input-group--full-width">
              <label htmlFor="department" className="input-label">
                <FaGraduationCap style={{ marginRight: 'var(--space-2)' }} />
                Department
                <span className="input-label__required">*</span>
              </label>
              <div className="input-wrapper">
                <select
                  id="department"
                  name="department"
                  className="input"
                  value={student.department}
                  onChange={handleChange}
                  required
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="input-group input-group--full-width">
              <label htmlFor="enrollmentYear" className="input-label">
                <FaCalendarCheck style={{ marginRight: 'var(--space-2)' }} />
                Enrollment Year
                <span className="input-label__required">*</span>
              </label>
              <div className="input-wrapper">
                <select
                  id="enrollmentYear"
                  name="enrollmentYear"
                  className="input"
                  value={student.enrollmentYear}
                  onChange={handleChange}
                  required
                >
                  {yearOptions.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-6)' }}>
            <Switch
              label="Active Student"
              checked={student.isActive}
              onChange={(e) => handleChange({ target: { name: 'isActive', type: 'checkbox', checked: e.target.checked } })}
            />
          </div>

          <div className="form-actions">
            <Link to="/students">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Link>
            <Button 
              type="submit" 
              variant="primary"
              icon={<FaSave />}
              loading={saving}
            >
              Update Student
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default EditStudent;
