import logo from './logo.svg';
import './App.css';
import Clock from './clock';
import Name from './functionHook';

function App() {

  const address = {
    name: "Name",
    address: "112 Street",
    zip: "AA1 BB2"
  }

  return (
    <div className="App">
      <p>Hello {address.name}, your address is {address.address} and zipcode is {address.zip}</p>
      <Clock/>
      <Name/>
    </div>
  );
}

export default App;
