import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer
      style={{
        backgroundColor: "#302e2eff",
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
          { title: "Learn", links: ["Code lessons", "Projects"] },
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
                  } else if (link === "Projects") {
                    onClickHandler = () => navigate("/projects");
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
        &copy;  2025 Code Yatra. All rights reserved.
      </div>
    </footer>
  );
}
