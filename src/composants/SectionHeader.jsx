export default function SectionHeader({ label, title }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
