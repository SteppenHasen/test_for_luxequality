import GoogleApiWrapper from './components/mapComponent/map';
import Header from './components/baseComponents/header';

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
