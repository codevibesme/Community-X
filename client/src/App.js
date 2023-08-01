import AllChannels from "./scenes/AllChannels";
import ChannelDetails from "./scenes/ChannelDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import io from "socket.io-client";
import LoginPage from "./scenes/LoginPage";
import SignupPage from "./scenes/SignupPage";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const users = ["Soham", "Reigns", "Ambrose", "Murphy", "Ruby", "Kisan", "Hiya", "Alan", "Criss", "Rock", "Helen", "Karen"];
  const channels = ["FRONT-END DEVELOPERS", "CATS AND DOGS", "RANDOM", "BACKEND", "WELCOME"];
  const socket = io.connect("http://localhost:8000");

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/login" element={ <LoginPage /> } />
          <Route exact path="/register" element={ <SignupPage /> } />
          <Route exact path="/" element={<AllChannels />} />
          {/* <Route exact path="/:channelName" element={<ChannelDetails />} /> */}
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
