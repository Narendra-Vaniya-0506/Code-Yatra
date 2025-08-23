import React from "react";

export default function Privacy() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.7",
        color: "#333",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#111" }}>
        Privacy Policy
      </h1>
      <p style={{ fontSize: "14px", textAlign: "center", marginBottom: "30px" }}>
        Last Updated: Aug, 2025
      </p>

      <h2>1. Introduction</h2>
      <p>
        Welcome! This website and YouTube channel are dedicated to teaching
        coding and sharing educational resources. I respect your privacy and
        take steps to protect any information you share with me. This Privacy
        Policy explains how your data may be collected, used, and safeguarded.
      </p>

      <h2>2. Information I Collect</h2>
      <p>I may collect the following information when you interact with my site:</p>
      <ul style={{ marginLeft: "20px" }}>
        <li>
          <strong>Personal Information:</strong> Your name, email, or payment
          details (only if you purchase any paid content).
        </li>
        <li>
          <strong>Usage Data:</strong> Information like your IP address,
          browser, pages visited, and time spent on the site.
        </li>
        <li>
          <strong>Cookies:</strong> Small data files stored on your device to
          improve your browsing experience.
        </li>
      </ul>

      <h2>3. How Your Information Is Used</h2>
      <p>Your data may be used for purposes such as:</p>
      <ul style={{ marginLeft: "20px" }}>
        <li>Providing and improving lessons, notes, and website features.</li>
        <li>Processing payments for any paid resources.</li>
        <li>
          Sending updates, newsletters, or announcements (optional; you can
          unsubscribe anytime).
        </li>
        <li>Analyzing site usage to improve user experience.</li>
        <li>Ensuring compliance with my Terms & Conditions.</li>
      </ul>

      <h2>4. Protecting Your Data</h2>
      <p>
        I use reasonable security measures such as secure servers and encrypted
        payment processing (where applicable) to keep your data safe. However,
        no online system is 100% secure, so please use the site responsibly.
      </p>

      <h2>5. Sharing Your Information</h2>
      <p>
        I don’t sell, rent, or trade your personal data. Information may only be
        shared with:
      </p>
      <ul style={{ marginLeft: "20px" }}>
        <li>Payment processors for handling transactions.</li>
        <li>Legal authorities if required by law.</li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        This site may use cookies to improve your browsing experience, track
        preferences, and analyze performance. You can manage or disable cookies
        through your browser settings.
      </p>

      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul style={{ marginLeft: "20px" }}>
        <li>Request access to the data collected about you.</li>
        <li>Correct any incorrect personal information.</li>
        <li>Request deletion of your data (if not required legally).</li>
        <li>Opt out of newsletters or promotional messages anytime.</li>
      </ul>

      <h2>8. Updates to This Policy</h2>
      <p>
        I may update this Privacy Policy occasionally. Any updates will be
        posted here with a new “Last Updated” date. Please review this page
        periodically to stay informed.
      </p>

      <h2>9. Contact</h2>
      <p>
        If you have questions about this Privacy Policy, reach out anytime:
        <br /> 📧{" "}
        <a href="mailto:codeyatra0605@gmail.com" style={{ color: "#007bff", textDecoration: "none" }}>
            codeyatra0605@gmail.com
          </a>
        <br /> 📱 YouTube Channel : <a href="https://www.youtube.com/@codeyatra0605" style={{ color: "#007bff", textDecoration: "none" }}>Code Yatra</a>
      </p>
    </div>
  );
}
