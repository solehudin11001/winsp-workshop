import Button from "../../Button";

export default function CallToAction() {
  return (
    <section className="section section--center section--theme-pale-blue">
      <div className="section__copy section__copy--center section__copy--cta">
        <h2 className="title title--large">
          Siap Jadi Bagian dari <span className="title__oblique">W</span>Insp?
        </h2>
        <p>
          Daftarkan dirimu sekarang dan mulai perjalanan inspiratifmu bersama
          para mentor terbaik dan komunitas kreatif!
        </p>
        <Button>Daftar Sekarang</Button>
      </div>
    </section>
  );
}
