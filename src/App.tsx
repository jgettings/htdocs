import { Flowbite } from 'flowbite-react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Basics from 'pages/Basics';
import ScrollPages from 'components/ScrollPages';
import ResumeTimeline from 'pages/ResumeTimeline';
import Skills from 'pages/Skills';
import ErrorBoundary from 'components/ErrorBoundary';
import theme from './flowbite-theme';

const App: React.FC = () => (
  <ErrorBoundary showErrorMessage>
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
  </ErrorBoundary>
);

export default App;
