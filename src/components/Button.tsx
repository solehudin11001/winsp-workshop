import "./Button.css";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className={`button button--filled`}>
      {children}
    </a>
  );
}
