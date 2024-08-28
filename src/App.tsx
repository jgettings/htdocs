import { Flowbite } from 'flowbite-react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from 'components/Header';
import Footer from 'components/Footer';
// import ScrollPages from 'components/ScrollPages';
import Basics from 'pages/Basics';
import theme from './flowbite-theme';

const App: React.FC = () => (
  <Flowbite theme={{ theme }}>
    <ParallaxProvider>
      <Header />
      <main className="mt-12">
        {/* <ScrollPages> */}
        <Basics />
        {/* </ScrollPages> */}
      </main>
      <Footer />
    </ParallaxProvider>
  </Flowbite>
);

export default App;
