import { useState } from "react";
import testimonial1 from "../assets/testimonial-1.jpg";
import testimonial2 from "../assets/testimonial-2.jpg";
import testimonial3 from "../assets/testimonial-3.jpg";
import "./Slide.css";

const testimonial = [
  {
    name: "Nadia Omara",
    role: "Freelancer",
    quote:
      "“Saya ikut workshop tentang personal branding dan hasilnya luar biasa! Pembicaranya insightful dan materinya bisa langsung saya aplikasikan.”",
    image: testimonial1,
  },
  {
    name: "Mayasari Putri",
    role: "Mahasiswi",
    quote:
      "“Workshop ini sangat membuka wawasan saya! Materinya disampaikan dengan cara yang mudah dipahami dan aplikatif.”",
    image: testimonial2,
  },
  {
    name: "Fahmi Samudra",
    role: "Web Development",
    quote:
      "“Sebelum ikut workshop, saya masih bingung harus mulai dari mana. Sekarang saya merasa lebih percaya diri untuk memulai project sendiri!.”",
    image: testimonial3,
  },
];

export default function Slide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="slide">
      <div className="slide__list">
        <div className="slide__item">
          <blockquote className="slide__quote">
            {testimonial[currentIndex].quote}
          </blockquote>
          <cite className="slide__cite">
            <img
              src={testimonial[currentIndex].image}
              alt={testimonial[currentIndex].name}
              className="slide__image"
            />
            <div className="slide__info">
              <span className="slide__name">
                {testimonial[currentIndex].name}
              </span>
              <span>{testimonial[currentIndex].role}</span>
            </div>
          </cite>
        </div>
      </div>
      <div className="slide__pagination">
        {testimonial.map((_, index) => (
          <button
            type="button"
            key={index}
            className={`slide__pagination-item ${
              currentIndex === index ? "slide__pagination-item--active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
