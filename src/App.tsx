import { Flowbite } from 'flowbite-react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Basics from 'pages/Basics';
import ScrollPages from 'components/ScrollPages';
import ResumeTimeline from 'pages/ResumeTimeline';
import theme from './flowbite-theme';
import Skills from 'pages/Skills';

const App: React.FC = () => (
  <Flowbite theme={{ theme }}>
    <ParallaxProvider>
      <Header />
      <main className="mt-8">
        <ScrollPages>
          <Basics />
          <ResumeTimeline />
          <Skills />
        </ScrollPages>
      </main>
      <Footer />
    </ParallaxProvider>
  </Flowbite>
);

export default App;
