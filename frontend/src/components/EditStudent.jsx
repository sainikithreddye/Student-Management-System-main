import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  FaUserEdit, 
  FaIdCard, 
  FaUser, 
  FaEnvelope, 
  FaCalendarAlt, 
  FaGraduationCap,
  FaCalendarCheck,
  FaToggleOn,
  FaSave
} from 'react-icons/fa';
import { toast } from 'react-toastify';

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

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`https://student-management-system-19g4.onrender.com/students/${id}`);
        setStudent({
          ...response.data,
          dob: response.data.dob.split('T')[0] // Format date for input
        });
      } catch (error) {
        toast.error('Failed to fetch student data');
        navigate('/students');
      }
    };
    fetchStudent();
  }, [id, navigate]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setStudent({ 
      ...student, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`https://student-management-system-19g4.onrender.com/students/${id}`, student);
      toast.success('Student updated successfully!');
      navigate('/students');
    } catch (error) {
      toast.error(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  // Generate year options for enrollment (2000-current year)
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from(
    { length: currentYear - 2000 + 1 },
    (_, i) => currentYear - i
  );

  return (
    <div className="container mt-4">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-warning text-dark">
          <h2 className="mb-0 d-flex align-items-center">
            <FaUserEdit className="me-2" />
            Edit Student Record
          </h2>
        </div>

        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            {/* Student ID */}
            <div className="mb-3">
              <label htmlFor="studentId" className="form-label fw-semibold">
                <FaIdCard className="me-2" />
                Student ID
              </label>
              <input
                type="text"
                className="form-control"
                id="studentId"
                name="studentId"
                value={student.studentId}
                onChange={handleChange}
                required
                pattern="[a-zA-Z0-9]+"
                title="Alphanumeric characters only"
                readOnly // Typically IDs shouldn't be editable
              />
            </div>

            {/* First Name */}
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label fw-semibold">
                <FaUser className="me-2" />
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={student.firstName}
                onChange={handleChange}
                required
                minLength="2"
              />
            </div>

            {/* Last Name */}
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label fw-semibold">
                <FaUser className="me-2" />
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={student.lastName}
                onChange={handleChange}
                required
                minLength="2"
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                <FaEnvelope className="me-2" />
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={student.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-3">
              <label htmlFor="dob" className="form-label fw-semibold">
                <FaCalendarAlt className="me-2" />
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                value={student.dob}
                onChange={handleChange}
                required
              />
            </div>

            {/* Department */}
            <div className="mb-3">
              <label htmlFor="department" className="form-label fw-semibold">
                <FaGraduationCap className="me-2" />
                Department
              </label>
              <select
                className="form-select"
                id="department"
                name="department"
                value={student.department}
                onChange={handleChange}
                required
              >
                <option value="Computer Science">Computer Science</option>
                <option value="Electrical">Electrical</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Civil">Civil</option>
                <option value="Electronics">Electronics</option>
              </select>
            </div>

            {/* Enrollment Year */}
            <div className="mb-3">
              <label htmlFor="enrollmentYear" className="form-label fw-semibold">
                <FaCalendarCheck className="me-2" />
                Enrollment Year
              </label>
              <select
                className="form-select"
                id="enrollmentYear"
                name="enrollmentYear"
                value={student.enrollmentYear}
                onChange={handleChange}
                required
              >
                {yearOptions.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            {/* Active Status */}
            <div className="mb-4 form-check form-switch">
              <input
                type="checkbox"
                className="form-check-input"
                id="isActive"
                name="isActive"
                checked={student.isActive}
                onChange={handleChange}
              />
              <label htmlFor="isActive" className="form-check-label fw-semibold">
                <FaToggleOn className="me-2" />
                {student.isActive ? 'Active Student' : 'Inactive Student'}
              </label>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button 
                type="button" 
                className="btn btn-outline-secondary me-md-2"
                onClick={() => navigate('/students')}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-warning">
                <FaSave className="me-2" />
                Update Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditStudent;