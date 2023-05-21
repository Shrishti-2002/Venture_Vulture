import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Project from './views/Project'
import { isWallectConnected } from './services/blockchain'
import { ToastContainer } from 'react-toastify'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/inc/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import MyProfile from "./components/pages/myprofile";
import Explore from "./components/pages/Explore";
import Investorprofile from "./components/pages/Investors_profile";
import Incubators from "./components/pages/Incubators";
import Investor from "./components/pages/Investor";
import Startup from "./components/pages/Startup";

const App = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(async () => {
    await isWallectConnected()
    console.log('Blockchain loaded')
    setLoaded(true)
  }, [])

  return (
    <div className="min-h-screen relative">
      <Navbar />
      {loaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/explore" element={<Explore />}></Route>
          <Route exact path="/myprofile" element={<MyProfile />}></Route>
          <Route exact path="/investor" element={<Investor />}></Route>
          <Route exact path="/startup" element={<Startup/>}></Route>
          <Route exact path="/investors_profile" element={<Investorprofile/>}></Route>
          <Route exact path="/incubators" element={<Incubators/>}></Route>
        </Routes>
      ) : null}

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default App
