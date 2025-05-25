import Button from "../../Button";
import Partnership from "./_Partnership";
import Support from "./_Support";

export default function Header() {
  return (
    <section className="section" id="top">
      <div className="section__copy">
        <h1 className="title title--large">
          <span className="title__oblique">W</span>Insp Workshop Inspiratif di
          Mana Ide Bertemu Aksi
        </h1>
        <p>
          Winsp adalah Tempat belajar interaktif yang dirancang untuk membantu
          Anda mengembangkan keterampilan baru, memperluas jaringan, dan
          menemukan potensi terbaik dalam diri Anda.
        </p>
        <Button>Gabung Sekarang</Button>
      </div>
      <Partnership />
      <Support />
    </section>
  );
}
