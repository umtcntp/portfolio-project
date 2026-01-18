import { BrowserRouter } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div ref={ref} className='relative z-0'>
          <Contact />
          {inView ? <StarsCanvas /> : null}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;