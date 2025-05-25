import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Main from "./components/layouts/sections";

export default function App() {
  return (
    <>
      <a href="#top" className="sr-only">
        Skip to content
      </a>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
