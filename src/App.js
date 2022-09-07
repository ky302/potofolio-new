// import logo from './logo.svg';
// import './App.css';

import Fotter from "./components/Fotter";
import Home from "./components/Home";

import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <div className=" bg-neutral-900">
        <NavigationBar />
        <Home />
        <Fotter />
      </div>
    </>
  );
}

export default App;
