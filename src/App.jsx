import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <section>
        <Navbar/>
        <Hero/>
      </section>
      <section>About</section>
      <section>Experiance</section>
      <section>Project</section>
      <section>contact</section>
    </>
  );
}

export default App;
