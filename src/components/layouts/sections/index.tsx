import About from "./_About";
import CallToAction from "./_CallToAction";
import Header from "./_Header";
import Program from "./_Program";
import Testimonial from "./_Testimonial";
import "./index.css";

export default function Main() {
  return (
    <main className="main">
      <Header />
      <About />
      <Program />
      <Testimonial />
      <CallToAction />
    </main>
  );
}
