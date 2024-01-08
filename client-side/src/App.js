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
  const [userLoginInfo, setUserLoginInfo] = useState({});

  useEffect(() => {
    const fetchSession = async () => {
      console.log("hello")
      const response = await fetch("http://localhost:5050/auth/validatesession", {
        credentials: "include",
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });
      if (response.status === 200) {
        const data = await response.json();
        console.log(data)
        setLogin(true);
        setUserLoginInfo(data.data)
        console.log(userLoginInfo)
      } else {
        setLogin(false);
        console.log("not login");
        console.log(login);
      }

    } // Log the login state here or use a then callback

    fetchSession();
  }, [])

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  console.log(userLoginInfo);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar login={login} setLogin={setLogin} />
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
          <Route path='/profile' element={<Profile />} />
          <Route path='/appointment' element={<Appointment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
