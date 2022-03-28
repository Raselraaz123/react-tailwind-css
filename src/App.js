import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold text-rose-600">
        Hello React make diff with tailwind!
      </h1>
      <Header></Header>
    </div>
  );
}

export default App;
