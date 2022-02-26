import GoogleApiWrapper from './components/map';
import Header from './components/header';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <GoogleApiWrapper />
      </div>
    </>
  );
}

export default App;
