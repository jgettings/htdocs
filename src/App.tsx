import { Flowbite } from 'flowbite-react';
import Header from 'components/Header';
import Footer from 'components/Footer';

import theme from './flowbite-theme';

const App: React.FC = () => (
  <Flowbite theme={{ theme }}>
    <Header />
    <Footer />
  </Flowbite>
);

export default App;
