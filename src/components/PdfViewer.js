import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Required worker setup
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

export default function PdfViewer({ file }) {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!file) return;

    const loadingTask = pdfjsLib.getDocument(file);
    loadingTask.promise.then((pdf) => {
      pdf.getPage(1).then((page) => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale });
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        page.render({ canvasContext: context, viewport }).promise.then(() => {
          setLoading(false);
        });
      });
    }).catch((err) => {
      console.error("Error loading PDF:", err);
      setLoading(false);
    });
  }, [file]);

  return (
    <div style={{ marginTop: "20px" }}>
      {loading ? <p>Loading PDF...</p> : null}
      <canvas ref={canvasRef} style={{ border: "1px solid #ddd", width: "100%", maxWidth: "800px" }} />
      <br />
      <a
        href={file}
        download
        style={{
          display: "inline-block",
          padding: "10px 15px",
          background: "#1f2937",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none",
          marginTop: "15px"
        }}
      >
        📥 Download PDF
      </a>
    </div>
  );
}
