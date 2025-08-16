import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Data for visa types with country flag image URLs
const visaTypesData = [
    {
        title: "United States - F-1 Visa",
        description: "Required for full-time academic studies. Valid for duration of study program. Allows on-campus work (20 hours/week) and OPT after graduation.",
        icon: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg", 
        path: null,
    },
    {
        title: "United Kingdom - Tier 4 Visa",
        description: "Required for courses longer than 6 months. Valid for course duration + 4 months. Allows part-time work (20 hours/week during term).",
        icon: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg", 
        path: null,
    },
    {
        title: "Canada - Study Permit",
        description: "Required for courses longer than 6 months. Valid for course duration + 90 days. Allows off-campus work (20 hours/week during term).",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg", 
        path: null,
    },
    {
        title: "Australia - Student Visa (Subclass 500)",
        description: "Required for all international students. Valid for course duration + 2 months. Allows work (40 hours/fortnight during term).",
        icon: "https://flagcdn.com/w320/au.png", 
        path: null,
    },
    {
        title: "Germany - Student Visa",
        description: "Required for non-EU students. Valid for course duration. Allows work (120 full days or 240 half days per year).",
        icon: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg", 
        path: null,
    },
    {
        title: "France - Student Visa",
        description: "Required for non-EU students. Valid for course duration + 1 year. Allows part-time work (964 hours/year).",
        icon: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg", 
        path: null,
    },
];

export default function Visa() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const MIN_TIME = 1000;
        const startTime = Date.now();
        const fetchData = new Promise((resolve) => setTimeout(resolve, 500));
        fetchData.then(() => {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(MIN_TIME - elapsed, 0);
            setTimeout(() => setLoading(false), remaining);
        });
    }, []);

    if (loading) {
        return (
            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh',
                background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', animation: 'fadeIn 0.5s ease-in-out',
            }}>
                <div style={{ width: '55px', height: '55px', border: '4px solid rgba(0,0,0,0.05)', borderTop: '4px solid #4facfe', borderRadius: '50%', animation: 'spin 0.8s linear infinite', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', marginBottom: '18px', }}></div>
                <p style={{ color: '#555', fontSize: '1.1rem', fontWeight: '500', letterSpacing: '0.3px', }}>Loading visa information...</p>
                <style>{`@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes fadeIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}`}</style>
            </div>
        );
    }

    return (
        <div style={{ background: "linear-gradient(135deg, #f8f9fa, #e9ecef)", padding: "3rem 1rem", minHeight: "100vh", }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                <h1 style={{ fontWeight: "900", fontSize: "2.8rem", display: "inline-block", position: "relative", paddingBottom: "0.5rem", textShadow: "0 4px 6px rgba(0,0,0,0.1)", }}>
                    <span style={{ background: "linear-gradient(90deg, #4facfe, #00f2fe, #43e97b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200% auto", animation: "shine 3s ease-in-out infinite", display: "inline-block", }}>Student Visa Guide</span>{" "}
                    <span style={{ display: "inline-block", animation: "bounceEmoji 1.5s infinite", }}>✈️</span>
                </h1>
                <style>{`@keyframes shine{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@keyframes bounceEmoji{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}`}</style>
            </div>
            <h2 style={{ fontWeight: "700", marginBottom: "2.5rem", textAlign: "center", fontSize: "1.5rem", color: "#495057", }}>Visa Types by Country</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", maxWidth: "1100px", margin: "0 auto", }}>
                {visaTypesData.map(({ title, description, icon, path }) => (
                    <div
                        key={title}
                        style={{
                            background: "white", borderRadius: "16px", padding: "2rem", textAlign: "center",
                            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between",
                            gap: "1rem", boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: path ? "pointer" : "default",
                        }}
                        onMouseEnter={(e) => { if (path) { e.currentTarget.style.transform = "translateY(-8px) scale(1.02)"; e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)"; } }}
                        onMouseLeave={(e) => { if (path) { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)"; } }}
                        onClick={() => { if (path) { navigate(path); } }}
                    >
                        {/* ICON IS NOW RENDERED AS AN IMAGE */}
                        <img
                            src={icon}
                            alt={`${title} flag`}
                            style={{
                                width: '100px',
                                height: '60px',
                                objectFit: 'cover',
                                marginBottom: '0.5rem',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                            }}
                        />
                        
                        <h3 style={{ margin: "0.5rem 0", fontWeight: "700", fontSize: "1.4rem", color: "#2c3e50" }}>{title}</h3>
                        <p style={{ fontSize: "1rem", color: "#6c757d", lineHeight: 1.5, flexGrow: 1, margin: 0, }}>{description}</p>
                        {path ? (
                            <button style={{
                                background: "linear-gradient(135deg, #4facfe, #00f2fe)", color: "#fff", border: "none", padding: "0.7rem 1.8rem",
                                borderRadius: "30px", cursor: "pointer", fontWeight: "bold", marginTop: "1rem", boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            }}>Learn More</button>
                        ) : (
                            <button disabled style={{
                                backgroundColor: "#adb5bd", color: "#fff", border: "none", padding: "0.7rem 1.8rem",
                                borderRadius: "30px", cursor: "not-allowed", fontWeight: "bold", marginTop: "1rem", opacity: 0.8,
                            }}>Coming Soon</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
