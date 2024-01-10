import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Treatment from './pages/Treatment';
import Blogs from './pages/Blogs';
import AboutMe from './pages/AboutMe';
import { useEffect, useState } from 'react';
import TreatmentDetails from './pages/TreatmentDetails';
import BlogDetails from './pages/BlogDetails';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Appointment from './pages/Appointment';


function App() {
  const [treat, setTreat] = useState("");
  const [blog, setBlog] = useState("");
  const [login, setLogin] = useState(false)
  const [firstLetter, setFirstLetter] = useState('')
  const [userLoginInfo, setUserLoginInfo] = useState({});

  useEffect(() => {
    const fetchSession = async () => {
      console.log("hello")
      let apiBaseUrl = `${import.meta.env.SERVERURL}`;
      console.log(apiBaseUrl);
      const response = await fetch(`${apiBaseUrl}/auth/validatesession`, {
        credentials: "include",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });
      if (response.status === 200) {
        const data = await response.json();
        setLogin(true);
        setUserLoginInfo(data.data)
        setFirstLetter(data.data.firstName[0])

      } else {
        setLogin(false);
      }

    } // Log the login state here or use a then callback

    fetchSession();
  }, [login])

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar login={login} setLogin={setLogin} firstLetter={firstLetter} />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home login={login} setTreat={setTreat} setBlog={setBlog} />} />
          <Route path="treatment" element={<Treatment setTreat={setTreat} />} />
          <Route path="blogs" element={<Blogs setBlog={setBlog} />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="/treatment-details" element={<TreatmentDetails data={treat} />} />
          <Route path="/blogs-details" element={<BlogDetails data={blog} />} />
          <Route path='/booking' element={<Booking userID={userLoginInfo} />} />
          <Route path='/login' element={<Login setLogin={setLogin} setUserLoginInfo={setUserLoginInfo} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile userID={userLoginInfo} setFirstLetter={setFirstLetter} />} />
          <Route path='/appointment' element={<Appointment userID={userLoginInfo} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
