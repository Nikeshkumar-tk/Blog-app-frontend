import  Topbar  from './Components/Topbar/Topbar';
import './App.css';

import Home from './Pages/Home';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';

function App() {
  return (
    <div className="App">
      
      <Topbar />
      <Write/>
    </div>
  );
}

export default App;
