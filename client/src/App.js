import AllChannels from "./scenes/AllChannels";
import ChannelDetails from "./scenes/ChannelDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./scenes/LoginPage";
import SignupPage from "./scenes/SignupPage";
import { useSelector } from "react-redux";
function App() {
  
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/login" element={ <LoginPage /> } />
          <Route exact path="/register" element={ <SignupPage /> } />
          <Route exact path="/" element={isLoggedIn?<AllChannels />: <LoginPage />} />
          <Route exact path="/:channelName" element={<ChannelDetails />} />
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
