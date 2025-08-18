import React, { useEffect, useRef } from 'react';
import { pdfjs } from 'pdfjs-dist';

export default function PdfViewer({ file }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadingTask = pdfjs.getDocument(file);
    loadingTask.promise.then((pdf) => {
      pdf.getPage(1).then((page) => {
        const viewport = page.getViewport({ scale: 1 });
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        page.render(renderContext);
      });
    });
  }, [file]);

  return (
    <div>
      <canvas ref={canvasRef} />
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
