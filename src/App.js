import logo from './logo.svg';
import './App.css';
import Clock from './clock';
import Name from './username';
import TextHide from './readMore';
import Backlog from './backlog';

function App() {

  const address = {
    name: "Name",
    address: "112 Street",
    zip: "AA1 BB2"
  }

  return (
    <div className="App">
      <p>Hello {address.name}, your address is {address.address} and zipcode is {address.zip}</p>
      <Clock />
      <Name />
      <br></br>
      <TextHide text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} maxLength={5} />
      <br></br>
      <br></br>
      <Backlog />
    </div>
  );
}

export default App;
