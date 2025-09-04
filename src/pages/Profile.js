import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Profile = () => {
    const { user, loading, updateUserProfile, logout } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    useEffect(() => {
        if (!loading && !user) {
            navigate('/login');
        }
        if (user) {
            setFormData({
                name: user.name || '',
                email: user.email || '',
            });
        }
    }, [user, loading, navigate]);

    if (loading || !user) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '1.3rem',
                color: '#555',
                fontWeight: '500',
                letterSpacing: '0.5px'
            }}>
                Loading profile...
            </div>
        );
    }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSaveProfile = async () => {
        try {
            await updateUserProfile(formData);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Failed to log out:', error);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Not available';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const cardStyle = {
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
    };

    const buttonStyle = (bg) => ({
        padding: '0.75rem 1.5rem',
        backgroundColor: bg,
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '1rem',
        letterSpacing: '0.3px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
        transition: 'background-color 0.2s ease, transform 0.2s ease',
    });

    const gradientBtnStyle = {
        ...buttonStyle(), // Inherit base styles
        background: 'linear-gradient(135deg, #43cea2, #185a9d)',
    };

    return (
        <div style={{
            maxWidth: '900px',
            margin: '2rem auto',
            padding: '2rem',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            background: 'linear-gradient(135deg, #f5f7fa, #e4ebf0)',
            borderRadius: '14px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
        }}>
            <h1 style={{
                textAlign: 'center',
                marginBottom: '2rem',
                fontSize: '2.5rem',
                fontWeight: '700',
                letterSpacing: '-0.5px'
            }}>
                <span
                    style={{
                        background: "linear-gradient(90deg, #6366f1, #ec4899, #f59e0b)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundSize: "200% auto",
                        animation: "shine 3s ease-in-out infinite",
                        display: "inline-block",
                    }}
                >
                    Welcome, {user.name || 'User'}!
                </span>
            </h1>
            <style>
                {`
                    @keyframes shine {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `}
            </style>

            {/* Navigation Links */}
            <nav style={{
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
            }}>
                {[
                    { name: 'Home', path: '/' },
                    { name: 'Code lessons', path: '/lessons' },
                    { name: 'Studyabroad', path: '/Studyabroad' },
                    { name: 'Contact', path: '/contact' }
                ].map((link, i) => (
                    <Link
                        key={i}
                        to={link.path}
                        style={{
                            textDecoration: 'none',
                            color: '#fff',
                            background: 'linear-gradient(135deg, #43cea2, #185a9d)',
                            fontWeight: '600',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            transition: 'background 0.3s ease, transform 0.2s ease',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                        }}
                        onMouseOver={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, #3aa189, #144b84)';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, #43cea2, #185a9d)';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        {link.name}
                    </Link>
                ))}
                <button
                    onClick={() => navigate('/dashboard')}
                    style={{
                        textDecoration: 'none',
                        color: '#fff',
                        background: 'linear-gradient(135deg, #43cea2, #185a9d)',
                        fontWeight: '600',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background 0.3s ease, transform 0.2s ease',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                    }}
                    onMouseOver={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, #3aa189, #144b84)';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, #43cea2, #185a9d)';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    Dashboard
                </button>
            </nav>

            {/* Personal Information */}
            <section style={cardStyle}>
                <h2 style={{ color: '#333', marginBottom: '1.5rem', fontSize: '1.75rem' }}>Personal Information</h2>

                {isEditing ? (
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                        onSubmit={(e) => { e.preventDefault(); handleSaveProfile(); }}>
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Name:</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #ccc',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email:</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #ccc',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <button type="submit" style={buttonStyle('#007bff')}>Save Changes</button>
                            <button type="button" style={buttonStyle('#6c757d')}
                                onClick={() => {
                                    setIsEditing(false);
                                    setFormData({ name: user.name || '', email: user.email || '' });
                                }}>
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <div>
                        <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}><strong>Name:</strong> {user.name || 'Not set'}</p>
                        <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}><strong>Email:</strong> {user.email}</p>
                        <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}><strong>Join Date:</strong> {formatDate(user.join_date)}</p>
                        <button 
                            style={gradientBtnStyle} 
                            onClick={() => setIsEditing(true)}
                            onMouseOver={(e) => {
                                e.target.style.background = 'linear-gradient(135deg, #3aa189, #144b84)';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = 'linear-gradient(135deg, #43cea2, #185a9d)';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            Edit Profile
                        </button>
                    </div>
                )}
            </section>

            {/* Logout Section */}
            <section style={{ ...cardStyle, textAlign: 'center' }}>
                 <h2 style={{ color: '#333', marginBottom: '1.5rem', fontSize: '1.75rem' }}>Account Actions</h2>
                <button 
                    style={gradientBtnStyle} 
                    onClick={handleLogout}
                    onMouseOver={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, #3aa189, #144b84)';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, #43cea2, #185a9d)';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    Logout
                </button>
            </section>
        </div>
    );
};

export default Profile;

