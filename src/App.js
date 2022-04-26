import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Card/Card';
import { comedy } from './Static/urls';
import { action } from './Static/urls';
import { originalas } from './Static/urls';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Card title="NetFlix Orginals" url={originalas}/>
      <Card title="Comedy" url={comedy}  small />
      <Card title="Action" url={action} small/>
    </div>
  );
}

export default App;
