// import './App.css';

//Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/portfolioo" element={<Home />} />
          {/* <Route exact path="/*" element={<Error />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;