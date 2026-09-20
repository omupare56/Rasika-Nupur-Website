import { Navbar }       from './components/layout/Navbar';
import { Footer }       from './components/layout/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { Hero }         from './components/sections/Hero';
import { About }        from './components/sections/About';
import { Ghungroo }     from './components/sections/Ghungroo';
import { Ccottonqueen } from './components/sections/Ccottonqueen';
import { Institute }    from './components/sections/Institute';
import { FaceOfMaharashtra } from './components/sections/FaceOfMaharashtra';
import { Modelling }    from './components/sections/Modelling';
import { Events }       from './components/sections/Events';
import { Gallery }      from './components/sections/Gallery';
import { Contact }      from './components/sections/Contact';

function App() {
  return (
    <div className="bg-[#faf8f4] min-h-screen text-[#080808] selection:bg-[#c9a96e] selection:text-[#faf8f4]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ghungroo />
        <Ccottonqueen />
        <FaceOfMaharashtra />
        <Institute />
        <Modelling />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
