import { Laptop, Palette, Rocket, Settings } from "lucide-react";
import Card from "../../Card";

export default function Program() {
  return (
    <section className="section section--center" id="program">
      <div className="section__copy section__copy--center">
        <h2 className="title title--medium">Program Workshop</h2>
        <p>Kami menawarkan berbagai topik workshop, seperti:</p>
      </div>
      <div className="section__wrap section__wrap--stack">
        <Card
          variant="primary"
          title="Pengembangan Diri"
          copy="Public speaking, leadership, time management"
        >
          <Settings size={40} color="#3f44a6" />
        </Card>
        <Card
          variant="primary"
          title="Kreativitas & Desain"
          copy="UI/UX, design thinking, branding"
        >
          <Palette size={40} color="#F2637E" />
        </Card>
        <Card
          variant="primary"
          title="Teknologi & Digital"
          copy="Developer, digital marketing, data analytics"
        >
          <Laptop size={40} color="#3f44a6" />
        </Card>
        <Card
          variant="primary"
          title="Kewirausahaan"
          copy="Startup 101, manajemen bisnis, strategi pemasaran"
        >
          <Rocket size={40} color="#F2637E" />
        </Card>
      </div>
    </section>
  );
}
