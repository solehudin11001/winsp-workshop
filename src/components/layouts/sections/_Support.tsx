import heroImage from "../../../assets/hero-image.jpg";
import "./_Support.css";

export default function Support() {
  return (
    <div className="support">
      <div className="support__copy">
        <div className="support__headline">
          <span className="support__title">15000+</span>
          <span>Peserta</span>
        </div>
        <div className="support__headline">
          <span className="support__title">100%</span>
          <span>Direkomendasikan</span>
        </div>
      </div>
      <div className="support__figure">
        <img
          src={heroImage}
          alt="Peserta workshop berdiskusi"
          className="support__image"
        />
      </div>
    </div>
  );
}
