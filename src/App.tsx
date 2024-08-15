import { Flowbite } from 'flowbite-react';
import Footer from './Footer';
import Header from './Header';
import theme from './flowbite-theme';

const App: React.FC = () => (
  <Flowbite theme={{ theme }}>
    <Header />
    <Footer />
  </Flowbite>
);

export default App;
