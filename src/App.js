import './App.css';
import { CleaningHome } from './CleaningHome';
import { Meeting } from './Meeting';
import { Shopping } from './Shopping';

function App() {
  return (
    <div>
      <div className='app'>
        <h1>Planner App</h1>
        <div className='div'>
          <h2>Meeting</h2>
          <Meeting/>
        </div> 
        <div className='div'>
          <h2>Shopping</h2>
          <Shopping/>
        </div>
        <div className='div'>
          <h2>Cleaning Home</h2>
          <CleaningHome/>
        </div>
      </div>
    </div>
  );
}

export default App;
