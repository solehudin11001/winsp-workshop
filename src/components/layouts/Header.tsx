import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import debounce from "lodash.debounce";
import Navigation from "./Navigation";
import Button from "../Button";
import "./Header.css";

const HIDE_THRESHOLD = 50;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);
  const lastScrollY = useRef(0);

  // useCallback untuk memoize fungsi handleScroll,
  // dan terapkan debounce di dalamnya.
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Jika scroll ke bawah dan sudah melewati ambang batas, sembunyikan header
    if (
      currentScrollY > lastScrollY.current &&
      currentScrollY > HIDE_THRESHOLD
    ) {
      setIsVisible(true);
    }
    // Jika scroll ke atas atau di bagian paling atas, tampilkan header
    else if (
      currentScrollY < lastScrollY.current ||
      currentScrollY <= HIDE_THRESHOLD
    ) {
      setIsVisible(false);
    }

    // Logika untuk menampilkan/menyembunyikan shadow
    // Shadow muncul jika scrollY lebih besar dari 0
    setHasShadow(currentScrollY > 0);

    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener("scroll", debouncedHandleScroll);

    // Memanggil handleScroll untuk pertama kali
    debouncedHandleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`header header--${isVisible ? "hidden" : "visible"} ${
        hasShadow ? "header--has-shadow" : ""
      }`}
    >
      <div className="header__inner">
        <a href="#" className="logo">
          <span className="logo__oblique">W</span>Insp
        </a>
        <button
          type="button"
          className="button-menu"
          aria-expanded={isOpen}
          aria-haspopup="menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        </button>
        <Navigation open={isOpen} setOpen={setIsOpen} />
        <div className="only-large-screen">
          <Button>Daftar Sekarang</Button>
        </div>
      </div>
    </header>
  );
}
