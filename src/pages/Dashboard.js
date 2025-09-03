import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  // State management: dashboard data, loading boolean, error string
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API logic: Fetch data from backend
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
        if (!token) {
          setError('User not authenticated');
          setLoading(false);
          return;
        }
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/dashboard/`, {
          headers: {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data');
        }
        const data = await response.json();
        setDashboardData(data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load dashboard data. Please try again.');
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Loading state: Display spinner
  if (loading) {
    return (
      <div style={containerStyle}>
        <div style={loadingStyle}>
          <svg width="50" height="50" viewBox="0 0 50 50" style={spinnerStyle}>
            <circle cx="25" cy="25" r="20" stroke={colors.primary} strokeWidth="4" fill="none" strokeDasharray="31.4" strokeDashoffset="31.4">
              <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/>
            </circle>
          </svg>
          <p style={loadingTextStyle}>Loading your learning progress...</p>
        </div>
      </div>
    );
  }

  // Error state: Display error message
  if (error) {
    return (
      <div style={containerStyle}>
        <div style={errorStyle}>
          <svg width="50" height="50" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill={colors.error}/>
            <text x="25" y="30" textAnchor="middle" fill="white" fontSize="20">!</text>
          </svg>
          <p style={errorTextStyle}>{error}</p>
        </div>
      </div>
    );
  }

  // Success state: Render dashboard with dynamic data
  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <div style={headerStyle}>
        <h2 style={welcomeStyle}>Welcome back, <span style={usernameStyle}>{dashboardData.user.name}</span>!</h2>
        <button style={viewProfileBtnStyle} onClick={() => window.location.href = '/profile'}>Profile</button>
        <button style={{...viewProfileBtnStyle, marginLeft: '1rem'}} onClick={() => window.location.href = '/dashboard'}>Dashboard</button>
      </div>

      {/* Progress Overview Section */}
      <section style={sectionStyle}>
        <h3 style={sectionTitleStyle}>Your Progress Summary</h3>
        <div style={statsContainerStyle}>
          <div style={statCardStyle}>
            <div style={statIconStyle} dangerouslySetInnerHTML={{ __html: progressStatsIcons[0] }} />
            <div style={statMetricStyle}>{dashboardData.progressSummary.coursesCompleted}/{dashboardData.progressSummary.totalCourses}</div>
            <div style={statLabelStyle}>Courses Completed</div>
          </div>
          <div style={statCardStyle}>
            <div style={statIconStyle} dangerouslySetInnerHTML={{ __html: progressStatsIcons[1] }} />
            <div style={statMetricStyle}>{dashboardData.progressSummary.projectsSubmitted}</div>
            <div style={statLabelStyle}>Projects Completed</div>
          </div>
          <div style={statCardStyle}>
            <div style={statIconStyle} dangerouslySetInnerHTML={{ __html: progressStatsIcons[2] }} />
            <div style={statMetricStyle}>{dashboardData.progressSummary.lessonsWatched}</div>
            <div style={statLabelStyle}>Lessons Watched</div>
          </div>
          <div style={statCardStyle}>
            <div style={statIconStyle} dangerouslySetInnerHTML={{ __html: progressStatsIcons[3] }} />
            <div style={statMetricStyle}>{dashboardData.progressSummary.experiencePoints}</div>
            <div style={statLabelStyle}>Experience Points</div>
          </div>
        </div>
      </section>

      {/* Continue Learning Section */}
      <section style={sectionStyle}>
        <h3 style={sectionTitleStyle}>Pick Up Where You Left Off</h3>
        <div style={continueCardStyle}>
          <h4 style={continueTitleStyle}>{dashboardData.continueLearning.courseTitle}</h4>
          <p style={continueLessonStyle}>Lesson: {dashboardData.continueLearning.lessonTitle}</p>
          <div style={progressContainerStyle}>
            <div style={progressBarStyle}>
              <div style={{ ...progressFillStyle, width: `${dashboardData.continueLearning.progress}%` }}></div>
            </div>
            <span style={progressTextStyle}>{dashboardData.continueLearning.progress}%</span>
          </div>
          <button style={continueBtnStyle}>Continue Lesson</button>
        </div>
      </section>

      {/* My Enrolled Courses Section */}
      <section style={sectionStyle}>
        <h3 style={sectionTitleStyle}>All Your Courses</h3>
        <div style={coursesGridStyle}>
          {dashboardData.enrolledCourses.map((course) => (
            <div key={course.id} style={courseCardStyle}>
              <div style={courseHeaderStyle}>
                <h4 style={courseTitleStyle}>{course.title}</h4>
                {course.isLocked && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.textSecondary} strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <circle cx="12" cy="16" r="1"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                )}
              </div>
              <div style={progressContainerStyle}>
                <div style={progressBarStyle}>
                  <div style={{ ...progressFillStyle, width: `${course.progress}%` }}></div>
                </div>
                <span style={progressTextStyle}>{course.progress}%</span>
              </div>
              <p style={projectStatusStyle}>Project: {course.projectStatus.replace('-', ' ')}</p>
              <button
                style={{
                  ...courseBtnStyle,
                  backgroundColor: course.isLocked ? colors.textSecondary : colors.primary,
                  cursor: course.isLocked ? 'not-allowed' : 'pointer'
                }}
                disabled={course.isLocked}
              >
                {course.isLocked ? 'Locked' : 'Go to Course'}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const colors = {
  primary: '#FFD700', // Gold
  background: '#F7F9FB', // Light background
  cardBackground: '#FFFFFF', // White cards
  textPrimary: '#333333',
  textSecondary: '#666666',
  success: '#4CAF50',
  warning: '#FFC107',
  error: '#ff6b6b',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
};

// Icon definitions for progress stats
const progressStatsIcons = [
  '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
  '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFD700" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
];

// Inline CSS styles using React style objects
const containerStyle = {
  padding: '2rem',
  maxWidth: '1200px',
  margin: '0 auto',
  fontFamily: '"Inter", sans-serif',
  backgroundColor: colors.background,
  minHeight: '100vh'
};

const loadingTextStyle = {
  fontSize: '1.1rem',
  color: colors.textSecondary,
  fontWeight: '500'
};

const errorTextStyle = {
  fontSize: '1.1rem',
  color: colors.error,
  fontWeight: '500'
};

const loadingStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh'
};

const spinnerStyle = {
  marginBottom: '20px'
};

const errorStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh'
};

const progressContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem'
};

const progressBarStyle = {
  flex: 1,
  height: '8px',
  backgroundColor: '#e0e0e0',
  borderRadius: '4px',
  overflow: 'hidden'
};

const progressFillStyle = {
  height: '100%',
  backgroundColor: colors.primary,
  transition: 'width 0.3s ease'
};

const progressTextStyle = {
  fontSize: '0.9rem',
  color: colors.textPrimary,
  fontWeight: '600',
  minWidth: '45px',
  textAlign: 'right'
};

// Header Section Styles
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem',
  padding: '1.5rem',
  backgroundColor: colors.cardBackground,
  borderRadius: '12px',
  boxShadow: colors.boxShadow
};

const welcomeStyle = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: colors.textPrimary,
  margin: 0
};

const usernameStyle = {
  color: colors.primary,
  fontWeight: '700'
};

const viewProfileBtnStyle = {
  padding: '0.75rem 1.5rem',
  backgroundColor: colors.primary,
  color: colors.textPrimary,
  border: 'none',
  borderRadius: '8px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontSize: '0.95rem'
};

// Section Styles
const sectionStyle = {
  marginBottom: '2.5rem'
};

const sectionTitleStyle = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: colors.textPrimary,
  marginBottom: '1.5rem'
};

// Progress Overview Styles
const statsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  justifyContent: 'center'
};

const statCardStyle = {
  backgroundColor: colors.cardBackground,
  borderRadius: '12px',
  padding: '1.5rem',
  boxShadow: colors.boxShadow,
  textAlign: 'center',
  minWidth: '200px',
  flex: '1 1 200px'
};

const statIconStyle = {
  marginBottom: '0.75rem'
};

const statMetricStyle = {
  fontSize: '1.5rem',
  fontWeight: '700',
  color: colors.primary,
  marginBottom: '0.25rem'
};

const statLabelStyle = {
  fontSize: '0.9rem',
  color: colors.textSecondary,
  fontWeight: '500'
};

// Continue Learning Styles
const continueCardStyle = {
  backgroundColor: colors.cardBackground,
  borderRadius: '12px',
  padding: '2rem',
  boxShadow: colors.boxShadow,
  maxWidth: '600px',
  margin: '0 auto'
};

const continueTitleStyle = {
  fontSize: '1.25rem',
  fontWeight: '600',
  color: colors.textPrimary,
  marginBottom: '0.5rem'
};

const continueLessonStyle = {
  fontSize: '1rem',
  color: colors.textSecondary,
  marginBottom: '1rem'
};

const continueBtnStyle = {
  padding: '0.75rem 1.5rem',
  backgroundColor: colors.primary,
  color: colors.textPrimary,
  border: 'none',
  borderRadius: '8px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontSize: '0.95rem',
  marginTop: '1rem'
};

// Enrolled Courses Styles
const coursesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '1.5rem'
};

const courseHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem'
};

const courseCardStyle = {
  backgroundColor: colors.cardBackground,
  borderRadius: '12px',
  padding: '1.5rem',
  boxShadow: colors.boxShadow,
  border: 'none'
};

const courseTitleStyle = {
  fontSize: '1.1rem',
  fontWeight: '600',
  color: colors.textPrimary,
  marginBottom: '1rem'
};

const projectStatusStyle = {
  fontSize: '0.9rem',
  color: colors.textSecondary,
  marginBottom: '1rem',
  fontWeight: '500'
};

const courseBtnStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: colors.primary,
  color: colors.textPrimary,
  border: 'none',
  borderRadius: '6px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontSize: '0.9rem',
  width: '100%'
};

export default Dashboard;
