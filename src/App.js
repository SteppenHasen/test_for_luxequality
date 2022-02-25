import GoogleApiWrapper from './components/map';

import './App.css';

function App() {
  return (
    <>
      <header>
      <h1>Map for test API</h1>
      </header>
      <div className='container'>
        <GoogleApiWrapper />
      </div>
    </>
  );
}

export default App;
