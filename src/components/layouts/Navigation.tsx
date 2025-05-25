import Button from "../Button";
import "./Navigation.css";

const links = [
  { href: "#", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#program", label: "Program" },
  { href: "#testimoni", label: "Testimoni" },
];

export default function Navigation({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <nav className={`nav ${open ? "nav--open" : ""}`}>
      <ul className="nav__list">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="nav__link" onClick={() => setOpen(!open)}>
              {label}
            </a>
          </li>
        ))}
        <li className="nav__item">
          <Button>Daftar Sekarang</Button>
        </li>
      </ul>
    </nav>
  );
}
