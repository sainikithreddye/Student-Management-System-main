import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { 
  FaUserGraduate, 
  FaEdit, 
  FaTrashAlt,
  FaIdCard,
  FaEnvelope,
  FaBirthdayCake,
  FaSchool,
  FaCalendarAlt,
  FaToggleOn,
  FaUserPlus
} from 'react-icons/fa';
import { toast } from 'react-toastify';

function StudentListCards() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    try {
      const res = await axios.get('https://localhost:5000/students');
      console.log('API Response:', res.data); // Debugging log
      if (res.data && Array.isArray(res.data)) {
        setStudents(res.data);
      } else {
        throw new Error('Invalid data format received');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
      toast.error(`Error loading students: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`https://student-management-system-19g4.onrender.com/students/${id}`);
      toast.success('Student deleted successfully');
      fetchStudents();
    } catch (err) {
      toast.error(`Error deleting student: ${err.message}`);
    }
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString; // Return raw string if date parsing fails
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger m-4">
        Error loading students: {error}
      </div>
    );
  }

  if (!students || students.length === 0) {
    return (
      <div className="container text-center my-5">
        <div className="card shadow-sm p-5">
          <h5 className="text-muted">No student records found</h5>
          <Link to="/add" className="btn btn-primary mt-3">
            <FaUserPlus className="me-1" />
            Add First Student
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary mb-0">
          <FaUserGraduate className="me-2" />
          Student Records
        </h2>
        <Link to="/add" className="btn btn-primary">
          <FaUserGraduate className="me-1" />
          Add Student
        </Link>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {students.map((student) => (
          <div key={student._id} className="col">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-header bg-primary text-white">
                <h5 className="card-title mb-0">
                  {student.firstName} {student.lastName}
                </h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <div className="d-flex align-items-center">
                    <FaIdCard className="text-primary me-2" />
                    <strong>ID:</strong>
                    <span className="ms-2">{student.studentId}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex align-items-center">
                    <FaEnvelope className="text-primary me-2" />
                    <strong>Email:</strong>
                    <span className="ms-2 text-truncate">{student.email}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex align-items-center">
                    <FaBirthdayCake className="text-primary me-2" />
                    <strong>DOB:</strong>
                    <span className="ms-2">{formatDate(student.dob)}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex align-items-center">
                    <FaSchool className="text-primary me-2" />
                    <strong>Department:</strong>
                    <span className="ms-2">{student.department}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex align-items-center">
                    <FaCalendarAlt className="text-primary me-2" />
                    <strong>Enrolled:</strong>
                    <span className="ms-2">{student.enrollmentYear}</span>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <FaToggleOn className="text-primary me-2" />
                  <strong>Status:</strong>
                  <span className={`badge ms-2 ${student.isActive ? 'bg-success' : 'bg-secondary'}`}>
                    {student.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
              <div className="card-footer bg-white border-0 d-flex justify-content-between">
                <Link
                  to={`/edit/${student._id}`}
                  className="btn btn-sm btn-outline-primary"
                >
                  <FaEdit className="me-1" />
                  Edit
                </Link>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => {
                    if (window.confirm('Delete this student?')) {
                      deleteStudent(student._id);
                    }
                  }}
                >
                  <FaTrashAlt className="me-1" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentListCards;