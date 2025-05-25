import "./Card.css";

export default function Card({
  children,
  copy,
  title,
  variant,
}: {
  children: React.ReactNode;
  copy: string;
  title: string;
  variant?: string;
}) {
  return (
    <div className={`card ${variant ? `card--${variant}` : ""}`}>
      <div className="card__inner">
        <div className="card__header">
          {children}
          <h3 className="card__title">{title}</h3>
        </div>
        <p>{copy}</p>
      </div>
    </div>
  );
}
