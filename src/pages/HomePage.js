import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      {/* Hero Section */}
      <div
        className="home-wrapper"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
        <div
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
          <p
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
          </p>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "900",
              marginBottom: "0.5rem",
              textShadow: "0 3px 6px rgba(0,0,0,0.4)",
            }}
          >
            Welcome to <span style={{ color: "#FFD700" }}>Code Yatra</span>
          </h1>

          <p
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
          </p>

          <button
            onClick={() => navigate("/lessons")}
            style={{
              background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
              color: "#fff",
              border: "none",
              padding: "0.8rem 1.8rem",
              marginRight: "1rem",
              borderRadius: "50px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.3)";
            }}
          >
            Explore Courses
          </button>
        </div>
      </div>

      {/* Features Section */}
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          background: "#f5f7fa",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#333",
          }}
        >
          Think Like a Programmer.{" "}
          <span style={{ color: "#ff7e5f" }}>Solve Real Problems.</span>
        </h2>
        <p
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
        </p>
        <div
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
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Data-Driven Decision Making",
              text: "Master Python, ML, and AI to find insights in data.",
              img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Master the Developer's Toolkit",
              text: "Go deep into DSA for writing efficient, scalable code.",
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              style={{
                maxWidth: "300px",
                borderRadius: "16px",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, cardHoverEffect)
              }
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 5px 20px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={card.img}
                alt={card.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "1.2rem", textAlign: "left" }}>
                <h3 style={{ marginBottom: "0.5rem", color: "#222" }}>
                  {card.title}
                </h3>
                <p style={{ margin: 0, color: "#555" }}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
          style={{
            background: "linear-gradient(135deg, #43cea2, #185a9d)",
            color: "#fff",
            border: "none",
            padding: "0.8rem 1.8rem",
            borderRadius: "50px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 6px 20px rgba(0,0,0,0.4)";
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

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#111",
          padding: "2rem 1rem",
          color: "#ccc",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {[
            { title: "Main", links: ["Home", "Contact"] },
            { title: "Learn", links: ["Code lessons", "Studyabroad"] },
            { title: "Legal", links: ["Terms", "Privacy"] },
            {
              title: "Social",
              links: ["GitHub", "Instagram", "YouTube", "Facebook"],
            },
          ].map((section, idx) => (
            <div
              key={idx}
              style={{
                flex: "1 1 150px",
                marginBottom: "1rem",
              }}
            >
              <h4
                style={{
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  color: "#fff",
                }}
              >
                {section.title}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {section.links.map((link, i) => {
                  let href = "#";
                  let onClickHandler = undefined;
                  
                  if (section.title === "Social") {
                    if (link === "YouTube") {
                      href = "https://www.youtube.com/@codeyatra0605";
                    } else if (link === "GitHub") {
                      href = "https://github.com/codeyatra0605";
                    } else if (link === "Instagram") {
                      href = "https://www.instagram.com/codeyatra_0605";
                    } else if (link === "Facebook") {
                      href = "https://facebook.com";
                    }
                  } else if (section.title === "Main") {
                    if (link === "Home") {
                      onClickHandler = () => navigate("/");
                    } else if (link === "Contact") {
                      onClickHandler = () => navigate("/contact");
                    }
                  } else if (section.title === "Learn") {
                    if (link === "Code lessons") {
                      onClickHandler = () => navigate("/lessons");
                    } else if (link === "Studyabroad") {
                      onClickHandler = () => navigate("/studyabroad");
                    }
                  } else if (section.title === "Legal") {
                    if (link === "Terms") {
                      onClickHandler = () => navigate("/terms");
                    } else if (link === "Privacy") {
                      onClickHandler = () => navigate("/privacy");
                    }
                  }
                  
                  return (
                    <li key={i} style={{ marginBottom: "0.4rem" }}>
                      <a
                        href={href}
                        onClick={onClickHandler ? (e) => {
                          e.preventDefault();
                          onClickHandler();
                        } : undefined}
                        style={{
                          color: "#ccc",
                          textDecoration: "none",
                          cursor: onClickHandler ? "pointer" : "default",
                        }}
                        target={href !== "#" ? "_blank" : undefined}
                        rel={href !== "#" ? "noopener noreferrer" : undefined}
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "2rem",
            color: "#888",
          }}
        >
          Code Yatra
        </div>
      </footer>
    </>
  );
}
