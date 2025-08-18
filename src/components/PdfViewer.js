import React, { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

// Required for pdf.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

export default function PdfViewer({ file }) {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!file) return;

    const loadingTask = pdfjsLib.getDocument(file);

    loadingTask.promise
      .then((pdf) => pdf.getPage(1)) // render only page 1 for now
      .then((page) => {
        const scale = 1.3;
        const viewport = page.getViewport({ scale });
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = { canvasContext: context, viewport };
        return page.render(renderContext).promise;
      })
      .then(() => setLoading(false))
      .catch((err) => {
        console.error("Error loading PDF:", err);
        setLoading(false);
      });
  }, [file]);

  return (
    <div className="pdf-viewer">
      {loading ? (
        <p>Loading PDF...</p>
      ) : (
        <canvas ref={canvasRef} className="pdf-canvas" />
      )}

      {file && (
        <a href={file} download className="download-btn">
          📥 Download PDF
        </a>
      )}
    </div>
  );
}
