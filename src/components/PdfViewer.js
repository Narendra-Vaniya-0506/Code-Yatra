export default function PdfViewer({ file }) {
  return (
    <div>
      <iframe
        src={file}
        width="100%"
        height="600px"
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginTop: "20px"
        }}
        title="Lesson PDF"
      />
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
