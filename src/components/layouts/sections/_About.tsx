import { Lightbulb, Target, UserRound } from "lucide-react";
import Card from "../../Card";

export default function About() {
  return (
    <section className="section section--center" id="tentang">
      <div className="section__copy section__copy--center">
        <h2 className="title title--medium">Tentang Kami</h2>
        <p>
          Kami adalah workshop edukatif yang berfokus pada pengembangan
          keterampilan praktis dan pemikiran kreatif. Dengan pendekatan yang
          inspiratif dan interaktif, Winsp hadir sebagai ruang belajar modern di
          mana peserta tidak hanya menerima ilmu, tetapi juga diarahkan untuk
          langsung menerapkannya dalam proyek nyata.
        </p>
      </div>
      <div className="section__wrap">
        <Card
          title="Visi"
          copy="Menciptakan ekosistem belajar yang menyulut aksi dan pemikiran kreatif, bukan hanya teori."
        >
          <Lightbulb size={20} color="#3f44a6" />
        </Card>
        <Card
          title="Misi"
          copy="Menghubungkan ide-ide dengan strategi eksekusi melalui workshop berbasis pengalaman langsung."
        >
          <Target size={20} color="#F2637E" />
        </Card>
        <Card
          title="Komunitas"
          copy="Menumbuhkan jaringan profesional yang suportif dan kolaboratif bagi para peserta."
        >
          <UserRound size={20} color="#3f44a6" />
        </Card>
      </div>
    </section>
  );
}
