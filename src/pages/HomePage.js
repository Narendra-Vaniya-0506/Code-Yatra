import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MotionSection, MotionText, FloatingBlob, fadeInUp, staggerContainer, ScaleCard } from "../../src/components/MotionPrimitives";

export default function HomePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    // Simulate fetching data
    const simulateNetworkRequest = new Promise((resolve) => {
      const delay = Math.random() < 0.5 ? 800 : 2500; // Random fast/slow
      setTimeout(resolve, delay);
    });

    simulateNetworkRequest.then(() => {
      const elapsed = Date.now() - startTime;
      const remainingTime = 1000 - elapsed;
      setTimeout(() => setLoading(false), remainingTime > 0 ? remainingTime : 0);
    });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        {/* Wave Loader */}
        <div className="wave-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p
          style={{
            color: "#555",
            fontSize: "1.1rem",
            fontWeight: "500",
            letterSpacing: "0.3px",
            marginTop: "20px",
          }}
        >
          Welcome to The Code Yatra...
        </p>

        <style>
          {`
          .wave-loader {
            display: flex;
            align-items: flex-end;
            height: 40px;
            gap: 4px;
          }
          .wave-loader span {
            display: block;
            width: 6px;
            height: 100%;
            background: #43cea2;
            animation: wave 1.2s infinite ease-in-out;
            border-radius: 4px;
          }
          .wave-loader span:nth-child(2) {
            animation-delay: 0.2s;
            background: #185a9d;
          }
          .wave-loader span:nth-child(3) {
            animation-delay: 0.4s;
            background: #ff7e5f;
          }
          @keyframes wave {
            0%, 40%, 100% {
              transform: scaleY(0.3);
            }
            20% {
              transform: scaleY(1);
            }
          }
        `}
        </style>
      </div>
    );
  }

  const cardHoverEffect = {
    transform: "translateY(-10px) scale(1.03)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
  };

  return (
    <>
      {/* Hero Section with animated blobs and entrance */}
      <div
        className="home-wrapper linear-container with-lines lines-animate"
        style={{
          position: "relative",
          color: "#fff",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem",
          overflow: "hidden",
        }}
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src={require("../Image/background-vid.mp4")} type="video/mp4" />
        </video>

        {/* Overlay for text readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7))",
            zIndex: 1,
          }}
        />
        {/* floating blobs to emulate soft, layered background animation */}
        <FloatingBlob color="var(--cy-accent)" size={280} opacity={0.25} x={30} y={20} duration={14} style={{ top: 80, left: -40, zIndex: 1 }} />
        <FloatingBlob color="var(--cy-primary)" size={220} opacity={0.22} x={40} y={30} duration={12} style={{ bottom: 120, right: -30, zIndex: 1 }} />
        <FloatingBlob color="var(--cy-primary-2)" size={300} opacity={0.18} x={20} y={40} duration={16} style={{ top: 260, right: 160, zIndex: 1 }} />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "750px",
            background: "rgba(255,255,255,0.08)",
            padding: "2rem",
            borderRadius: "16px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
          }}
        >
          <motion.p variants={fadeInUp}
            style={{
              fontSize: "0.85rem",
              marginBottom: "1rem",
              backgroundColor: "rgba(255,255,255,0.15)",
              display: "inline-block",
              padding: "0.3rem 0.8rem",
              borderRadius: "12px",
              letterSpacing: "1px",
            }}
          >
            Learn coding in the right way
          </motion.p>
          <motion.h1 variants={fadeInUp}
            style={{
              fontSize: "3rem",
              fontWeight: "900",
              marginBottom: "0.5rem",
              textShadow: "0 3px 6px rgba(0,0,0,0.4)",
            }}
          >
            Welcome to <span style={{ color: "#FFD700" }}>Code Yatra</span>
          </motion.h1>

          <motion.p variants={fadeInUp}
            style={{
              fontSize: "1rem",
              marginBottom: "2rem",
              color: "#eee",
              lineHeight: "1.6",
            }}
          >
            Something exciting is on the way at <strong>Code Yatra</strong> 🚀
            Very soon, you’ll find in-depth videos, detailed notes, and practical
            resources to make learning easier, faster, and more enjoyable.
          </motion.p>

          <motion.button
            variants={fadeInUp}
            onClick={() => navigate("/lessons")}
            whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0,0,0,0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="btn-glass-dark btn-lg"
            style={{ marginRight: "1rem", color: "#fff" }}
          >
            Explore Lessons
          </motion.button>
        </motion.div>
      </div>

      {/* Features Section */}
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          background: "var(--cy-surface)",
        }}
      >
        <MotionSection>
          
          <motion.h2
            variants={staggerContainer}
            style={{
              position: "relative",
              display: "inline-block",
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "1.25rem",
              color: "#333",
            }}
          >
            <motion.span variants={fadeInUp} style={{ display: "inline-block", marginRight: 6 }}>
              Think Like a Programmer.
            </motion.span>
            <motion.span
              variants={fadeInUp}
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Solve Real Problems.
            </motion.span>
            <motion.span
              aria-hidden
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              style={{
                position: "absolute",
                left: 0,
                bottom: -6,
                height: 3,
                width: "100%",
                transformOrigin: "left",
                borderRadius: 999,
                background: "linear-gradient(90deg, rgba(255,126,95,0.6), rgba(254,180,123,0.6))",
              }}
            />
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            style={{
              maxWidth: "700px",
              margin: "0 auto 3rem",
              color: "#555",
              fontSize: "1.1rem",
              lineHeight: "1.6",
            }}
          >
            Learning to code is more than memorizing syntax it's about developing
            a new way to think. We'll guide you through hands-on exercises to help
            you break down problems and build elegant solutions.
          </motion.p>
          <motion.div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
          {[

            {
              title: "Build for the Web",
              text: "Learn to architect and construct modern websites and apps.",
              img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Data-Driven Decision Making",
              text: "Master Python, ML, and AI to find insights in data.",
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Master the Developer's Toolkit",
              text: "Go deep into DSA for writing efficient, scalable code.",
              img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -100, scale: 0.95 },
                visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.3 } },
              }}
              whileHover={{ y: -10, scale: 1.03, boxShadow: "0 12px 30px rgba(0,0,0,0.25)" }}
              transition={{ duration: 0.25 }}
              style={{ maxWidth: "300px", borderRadius: "16px", overflow: "hidden", background: "var(--cy-surface)", border: "1px solid var(--cy-border)", boxShadow: "var(--cy-elev)", cursor: "pointer" }}
            >
              <motion.img
                initial={{ opacity: 0, scale: 1.02 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                src={card.img}
                alt={card.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <div style={{ padding: "1.2rem", textAlign: "left" }}>
                <h3 style={{ marginBottom: "0.5rem", color: "var(--cy-text)" }}>
                  {card.title}
                </h3>
                <p style={{ margin: 0, color: "var(--cy-muted)" }}>{card.text}</p>
              </div>
            </motion.div>
          ))
        }</motion.div>
        </MotionSection>
      </section>

      {/* About the Developer Section */}
      <section
        style={{
          maxWidth: "800px",
          margin: "2rem auto",
          padding: "2rem",
          textAlign: "center",
          background: "var(--cy-surface)",
          borderRadius: "16px",
          border: "1px solid var(--cy-border)",
          boxShadow: "var(--cy-elev)",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            color: "#333",
          }}
        >
          About the Developer
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          <motion.img
            src={require("../Image/Developer.jpg")}
            alt="Narendra Vaniya"
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
              width: "128px",
              height: "128px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <motion.img
            src={require("../Image/Developer1.jpg")}
            alt="Shreya Vaghela"
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{
              width: "128px",
              height: "128px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          <p
            style={{
              marginBottom: "1rem",
              color: "var(--cy-muted)",
              fontSize: "1.1rem",
            }}
          >
            We are Narendra Vaniya and Shreya Vaghela, developers passionate about building and teaching. We created Code Yatra as a dedicated space for high-quality, practical coding tutorials. Our approach is simple: teach technology through hands-on projects that build real-world skills, making modern development accessible to everyone.
          </p>

          <p
            style={{
              marginBottom: "2rem",
              color: "var(--cy-muted)",
              fontSize: "1.1rem",
            }}
          >
            This platform serves as a growing library of our work and educational content. From front-end frameworks to machine learning models, every project and lesson is crafted with the clarity we wished for when we were learning. We are excited to share our journey and help you advance yours.
          </p>
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "var(--cy-text)",
              }}
            >
              Connect with us:
            </h3>
            <p
              style={{
                marginBottom: "0.5rem",
                color: "#555",
                fontSize: "1rem",
              }}
            >
              Narendra Vaniya:{" "}
              <a
                href="https://www.linkedin.com/in/narendra-vaniya1617"
                target="_blank"
                style={{
                  color: "#007bff",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
              >
                LinkedIn
              </a>
            </p>
            <p
              style={{
                marginBottom: "0",
                color: "#555",
                fontSize: "1rem",
              }}
            >
              Shreya Vaghela:{" "}
              <a
                href="https://www.linkedin.com/in/shreyavaghela65"
                target="_blank"
                style={{
                  color: "#007bff",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section
          style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
            backgroundAttachment: "fixed",
          color: "#fff",
          padding: "4rem 2rem",
          textAlign: "center",
          marginTop: "4rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          Start Your Coding Journey
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "2rem",
            color: "#ddd",
          }}
        >
          Learn to code with a clear, step-by-step guide for beginners.
        </p>
        <button
          onClick={() => navigate("/lessons")}
          className="btn-glass-dark btn-lg"
          style={{ color: "#fff" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 15px rgba(0,0,0,0.3)";
          }}
        >
          Start Now
        </button>
      </section>

    </>
  );
}
