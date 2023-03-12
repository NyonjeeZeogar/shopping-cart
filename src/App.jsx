import Header from "./components/header/Header";
// import logo from './logo.svg';

import './App.css';

const App = () => {
  return (
    <div>
      <div className="body__container">
        <div className="nav">
          <Header />
          <div className="nav-right"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
