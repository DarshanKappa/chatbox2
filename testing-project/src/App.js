import logo from './logo.svg';
import './App.css';
import TestingComponent from './TestingComponent';
import { BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate, 
  useNavigate} from "react-router-dom";

function App() {
  return (
    // <div className="App">
     <BrowserRouter>
      <Routes>
          <Route index element={<div>Testing Project</div>} />
          <Route path="test" element={<TestingComponent />} />
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
