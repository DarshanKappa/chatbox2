import logo from './logo.svg';
import './App.css';
import { BrowserRouter,
         Routes,
         Route,
         useParams,
         Navigate, 
         useNavigate} from "react-router-dom";
import SignUp from '../../chatbox-fe/src/components/SignUP';
import SignIn from '../../chatbox-fe/src/components/SignIn'
import Conversation from '../../chatbox-fe/src/components/Conversation';
import Search from '../../chatbox-fe/src/components/Search';
import { useCookies } from 'react-cookie';


export default function App() {
  const [cookies, setCookies] = useCookies('')
  return (
    <BrowserRouter>
      <Routes>
          {cookies.token && <Route index element={ <Navigate to="/chat" /> }/>}
          <Route index element={<Navigate to="/signin" />} />
          <Route path="signup" element={<SignUp cookies={cookies} />} />
          <Route path="signin" element={<SignIn/>} />
          <Route path="search" element={<Search cookies={cookies} />} />
          <Route path="/chat" element={<Conversation/>} />
          <Route path="/chat/:user_id/:user_name" element={<Conversation/>} />
          <Route path="blogs" element={<h2>Blogs</h2>} />
          <Route path="contact" element={<h2>Contact</h2>} />
          <Route path="*" element={<h2>page not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

