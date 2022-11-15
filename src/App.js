// Import data
import Gallery from './Gallery';
import Sidebar from './Sidebar'
// Import components
import './App.css';

function App(){
  return (
    <div className='gallery'>
      <h1>Craigslist</h1>
      <div className="App">
      <Sidebar/>
      <Gallery/>
      </div>
    </div>
  );
}

export default App;
