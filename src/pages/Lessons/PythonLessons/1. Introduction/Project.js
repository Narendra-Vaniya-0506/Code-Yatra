import React, { useState } from "react";

export default function Project() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const copyCode = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage("✓ Copied to clipboard!");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }).catch(err => {
      setToastMessage("❌ Failed to copy");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      console.error('Failed to copy code:', err);
    });
  };

  return (
    <div id="Project">
      <h2 className="python-lesson-h2">Project</h2>
      <p className="python-lesson-p">Content coming soon...</p>

      {showToast && (
        <div className="python-toast">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
