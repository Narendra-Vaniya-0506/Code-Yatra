import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Required for pdfjs to work
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

export default function PdfViewer({ file }) {
  const [pdfText, setPdfText] = useState('');
  const canvasRef = useRef(null); // ✅ define canvasRef

  useEffect(() => {
    if (!file) return;

    const loadingTask = pdfjsLib.getDocument(file);
    console.log(`Loading PDF from: ${file}`);

    loadingTask.promise.then(
      (pdf) => {
        console.log('PDF loaded successfully');
        pdf.getPage(1).then((page) => {
          const scale = 1.5;
          const viewport = page.getViewport({ scale });
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport,
          };
          page.render(renderContext);
        });
      },
      (reason) => {
        console.error('Error loading PDF:', reason);
      }
    );
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
