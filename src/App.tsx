import { Flowbite } from 'flowbite-react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ScrollPages from 'components/ScrollPages';
import Basics from 'pages/Basics';
import theme from './flowbite-theme';

const App: React.FC = () => (
  <Flowbite theme={{ theme }}>
    <Header />
    <main>
      <ScrollPages>
        <Basics />
        <div />
      </ScrollPages>
    </main>
    <Footer />
  </Flowbite>
);

export default App;
