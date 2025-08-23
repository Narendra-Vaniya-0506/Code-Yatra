import React from "react";

export default function Privacy() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem", color: "#333" }}>
        Privacy Policy
      </h1>
      
      <div style={{ lineHeight: "1.6", color: "#555" }}>
        <h2>1. Information We Collect</h2>
        <p>
          We collect information from you when you register on our site, subscribe to our newsletter, 
          or fill out a form. You may be asked to provide your name, email address, and other details.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We may use the information we collect from you to personalize your experience, improve our 
          website, and send periodic emails regarding your order or other products and services.
        </p>

        <h2>3. How We Protect Your Information</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information 
          when you place an order or enter, submit, or access your personal information.
        </p>

        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable 
          Information unless we provide users with advance notice. This does not include website hosting 
          partners and other parties who assist us in operating our website, conducting our business, 
          or servicing you, so long as those parties agree to keep this information confidential.
        </p>

        <h2>5. Third-Party Services</h2>
        <p>
          Occasionally, at our discretion, we may include or offer third-party products or services on our 
          website. These third-party sites have separate and independent privacy policies. Therefore, we 
          have no responsibility or liability for the content and activities of these linked sites.
        </p>

        <h2>6. Changes to Our Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you about significant changes 
          in the way we treat personal information by sending a notice to the primary email address specified 
          in your account or by placing a prominent notice on our site.
        </p>

        <h2>7. Your Consent</h2>
        <p>
          By using our site, you consent to our Privacy Policy.
        </p>

        <p style={{ marginTop: "2rem", fontStyle: "italic", color: "#888" }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
