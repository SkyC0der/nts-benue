import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./components/landing";
import SignUp from "./components/register";
import Login from "./components/login";
import AllergyPage from "./components/allergyPage";
import NextKin from "./components/nextKin";
import Final from "./components/final";
import MultiStepForm from "./components/Form";
import FounderOnboarding from "./components/test";
import BackgroundAudio from "./components/BackgroundAudio";
// import { auth } from "./components/firebase";

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
          <BackgroundAudio/>
            <Routes>
              <Route path="/" element={<Landing />} />
              {/* <Route path="/login" element={<Login />} /> */}
              {/* <Route path="/register" element={<SignUp />} /> */}
              {/* <Route path='/allergyPage' element ={<AllergyPage/>} />
              <Route path="/nextKin" element ={<NextKin/>} /> */}
              <Route path="/completed" element ={<Final/>}/>
              {/* <Route path="/form" element={<MultiStepForm/>}/> */}
              <Route path="/register" element={<FounderOnboarding/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
