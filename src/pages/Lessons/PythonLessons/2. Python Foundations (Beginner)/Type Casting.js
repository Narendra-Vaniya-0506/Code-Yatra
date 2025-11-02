import React, { useState } from "react";

const TypeCasting = () => {
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
    <div id="type-casting">
      <h2 className="python-lesson-h2">Type Casting</h2>
      <p className="python-lesson-p">Content coming soon...</p>

      {showToast && (
        <div className="python-toast">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default TypeCasting;
