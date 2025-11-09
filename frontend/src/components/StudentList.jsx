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
  FaUserPlus,
  FaSearch,
  FaSpinner
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import getUrl from '../utils/getUrl';
import Card from './ui/Card';
import Button from './ui/Button';
import Loader from './ui/Loader';
import Alert from './ui/Alert';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const apiUrl = getUrl();

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(`${apiUrl}/students`);
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
    if (!window.confirm('Are you sure you want to delete this student?')) {
      return;
    }

    try {
      await axios.delete(`${apiUrl}/students/${id}`);
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
      return dateString;
    }
  };

  const filteredStudents = students.filter(student => {
    const searchLower = searchTerm.toLowerCase();
    return (
      student.firstName?.toLowerCase().includes(searchLower) ||
      student.lastName?.toLowerCase().includes(searchLower) ||
      student.studentId?.toLowerCase().includes(searchLower) ||
      student.email?.toLowerCase().includes(searchLower) ||
      student.department?.toLowerCase().includes(searchLower)
    );
  });

  if (loading) {
    return (
      <div className="page-container">
        <div className="empty-state">
          <Loader size="lg" />
          <p className="empty-state__description">Loading students...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <Alert variant="danger" title="Error Loading Students">
          {error}
        </Alert>
        <div style={{ marginTop: 'var(--space-6)' }}>
          <Button onClick={fetchStudents}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-6)' }}>
          <div>
            <h1 className="page-title">
              <FaUserGraduate style={{ marginRight: 'var(--space-3)', verticalAlign: 'middle' }} />
              Student Records
            </h1>
            <p className="page-subtitle">
              Manage and view all student information
            </p>
          </div>
          <Link to="/add">
            <Button variant="primary" icon={<FaUserPlus />}>
              Add Student
            </Button>
          </Link>
        </div>

        {/* Search Bar */}
        <div style={{ position: 'relative', maxWidth: '400px' }}>
          <FaSearch 
            style={{ 
              position: 'absolute', 
              left: 'var(--space-4)', 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: 'var(--text-tertiary)',
              pointerEvents: 'none'
            }} 
          />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: 'var(--space-3) var(--space-4) var(--space-3) var(--space-10)',
              fontSize: 'var(--font-size-base)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              transition: 'all var(--transition-base)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--border-color-focus)';
              e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border-color)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
      </div>

      {filteredStudents.length === 0 ? (
        <Card>
          <div className="empty-state">
            <FaUserGraduate className="empty-state__icon" />
            <h3 className="empty-state__title">
              {searchTerm ? 'No students found' : 'No student records'}
            </h3>
            <p className="empty-state__description">
              {searchTerm 
                ? 'Try adjusting your search terms'
                : 'Get started by adding your first student record'
              }
            </p>
            {!searchTerm && (
              <Link to="/add">
                <Button variant="primary" icon={<FaUserPlus />}>
                  Add First Student
                </Button>
              </Link>
            )}
          </div>
        </Card>
      ) : (
        <div className="grid grid--cols-3" style={{ gap: 'var(--space-6)' }}>
          {filteredStudents.map((student) => (
            <Card key={student._id} hover>
              <div style={{ marginBottom: 'var(--space-4)' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: 'var(--space-3)'
                }}>
                  <div>
                    <h3 style={{ 
                      margin: 0, 
                      fontSize: 'var(--font-size-xl)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--text-primary)'
                    }}>
                      {student.firstName} {student.lastName}
                    </h3>
                    <p style={{ 
                      margin: 'var(--space-1) 0 0 0',
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--text-secondary)'
                    }}>
                      {student.studentId}
                    </p>
                  </div>
                  <span style={{
                    padding: 'var(--space-1) var(--space-3)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    backgroundColor: student.isActive ? 'var(--color-success-light)' : 'var(--color-gray-200)',
                    color: student.isActive ? 'var(--color-success)' : 'var(--text-secondary)'
                  }}>
                    {student.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <FaEnvelope style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />
                  <span style={{ 
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--text-secondary)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {student.email}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <FaBirthdayCake style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />
                  <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                    {formatDate(student.dob)}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <FaSchool style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />
                  <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                    {student.department}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <FaCalendarAlt style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />
                  <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                    Enrolled: {student.enrollmentYear}
                  </span>
                </div>
              </div>

              <div style={{ 
                marginTop: 'var(--space-6)',
                paddingTop: 'var(--space-4)',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                gap: 'var(--space-2)'
              }}>
                <Link to={`/edit/${student._id}`} style={{ flex: 1 }}>
                  <Button variant="outline" fullWidth icon={<FaEdit />}>
                    Edit
                  </Button>
                </Link>
                <Button 
                  variant="danger" 
                  fullWidth
                  icon={<FaTrashAlt />}
                  onClick={() => deleteStudent(student._id)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {searchTerm && filteredStudents.length > 0 && (
        <div style={{ 
          marginTop: 'var(--space-6)',
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: 'var(--font-size-sm)'
        }}>
          Showing {filteredStudents.length} of {students.length} students
        </div>
      )}
    </div>
  );
}

export default StudentList;
