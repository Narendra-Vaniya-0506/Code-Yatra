import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// --- DATA UPDATED TO USE EMOJIS FOR ALL ICONS ---
const englishTestsData = [
    {
        title: "TOEFL",
        description: "Test of English as a Foreign Language. Required for US universities with minimum score 80-100. Valid for 2 years.",
        icon: "📚", // Emoji Icon
        path: null,
    },
    {
        title: "IELTS",
        description: "International English Language Testing System. Accepted by UK, Australian, and Canadian universities. Score 6.0-7.5.",
        icon: "📝", // Emoji Icon
        path: "/studyabroad/english/ielts",
    },
    {
        title: "Duolingo English Test",
        description: "Online English proficiency test with results in 48 hours. Accepted by 3000+ universities worldwide. Score 100-120.",
        icon: "🦉", // Emoji Icon
        path: "/studyabroad/english/duolingo",
    },
    {
        title: "PTE Academic",
        description: "Pearson Test of English. Computer-based test accepted globally. Fast results within 5 business days.",
        icon: "💻", // Emoji Icon
        path: null,
    },
    {
        title: "Cambridge English",
        description: "Cambridge English Qualifications including C1 Advanced and C2 Proficiency. Lifetime validity.",
        icon: "🎖️", // Emoji Icon
        path: null,
    },
    {
        title: "GRE Verbal",
        description: "Graduate Record Examination verbal section. Required for graduate programs in US universities.",
        icon: "📊", // Emoji Icon
        path: null,
    },
];

export default function English() {
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
                <div style={{ width: '55px', height: '55px', border: '4px solid rgba(0,0,0,0.05)', borderTop: '4px solid #667eea', borderRadius: '50%', animation: 'spin 0.8s linear infinite', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', marginBottom: '18px', }}></div>
                <p style={{ color: '#555', fontSize: '1.1rem', fontWeight: '500', letterSpacing: '0.3px', }}>Loading English tests...</p>
                <style>{`@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes fadeIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}`}</style>
            </div>
        );
    }

    return (
        <div style={{ background: "linear-gradient(135deg, #f8f9fa, #e9ecef)", padding: "3rem 1rem", minHeight: "100vh", }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                <h1 style={{ fontWeight: "900", fontSize: "2.8rem", display: "inline-block", position: "relative", paddingBottom: "0.5rem", textShadow: "0 4px 6px rgba(0,0,0,0.1)", }}>
                    <span style={{ background: "linear-gradient(90deg, #667eea, #764ba2, #f093fb)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200% auto", animation: "shine 3s ease-in-out infinite", display: "inline-block", }}>English Language Tests</span>{" "}
                    <span style={{ display: "inline-block", animation: "bounceEmoji 1.5s infinite", }}>🎯</span>
                </h1>
                <style>{`@keyframes shine{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@keyframes bounceEmoji{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}`}</style>
            </div>
            <h2 style={{ fontWeight: "700", marginBottom: "2.5rem", textAlign: "center", fontSize: "1.5rem", color: "#495057", }}>Choose Your Test</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", maxWidth: "1100px", margin: "0 auto", }}>
                {englishTestsData.map(({ title, description, icon, path }) => (
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
                        {/* ✅ ICON IS NOW RENDERED AS A LARGE EMOJI */}
                        <span style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>
                            {icon}
                        </span>
                        
                        <h3 style={{ margin: "0.5rem 0", fontWeight: "700", fontSize: "1.4rem", color: "#2c3e50" }}>{title}</h3>
                        <p style={{ fontSize: "1rem", color: "#6c757d", lineHeight: 1.5, flexGrow: 1, margin: 0, }}>{description}</p>
                        {path ? (
                            <button style={{
                                background: "linear-gradient(135deg, #667eea, #764ba2)", color: "#fff", border: "none", padding: "0.7rem 1.8rem",
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
