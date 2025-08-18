import React, { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// This line is mandatory for the library to work correctly.
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

export default function PdfViewer({ file }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!file) {
      return;
    }

    // Use the correctly imported 'pdfjsLib' object here
    const loadingTask = pdfjsLib.getDocument(file);
    loadingTask.promise.then((pdf) => {
      pdf.getPage(1).then((page) => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });
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
    }, (reason) => {
      console.error(reason); // Log any errors from loading the document
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