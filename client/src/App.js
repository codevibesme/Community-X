import AllChannels from "./scenes/AllChannels";
import ChannelDetails from "./scenes/ChannelDetails";
import ChatPage from "./scenes/ChatPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import io from "socket.io-client";
function App() {
  const users = ["Soham", "Reigns", "Ambrose", "Murphy", "Ruby", "Kisan", "Hiya", "Alan", "Criss", "Rock", "Helen", "Karen"];
  const channels = ["FRONT-END DEVELOPERS", "CATS AND DOGS", "RANDOM", "BACKEND", "WELCOME"];
  const socket = io.connect("http://localhost:8000");
  
  return (
    <div className="min-h-screen flex flex-row font-Noto text-white">
      <Router>
        <Routes>
          <Route exact path="/" element={<AllChannels channels={channels}/>} />
          <Route exact path="/:channelName" element={<ChannelDetails users={users} />} />
        </Routes>  
      </Router>
      {/* <ChannelDetails users={users}/>
      <AllChannels channels={channels} /> */}
      <ChatPage />
    </div>
  );
}

export default App;
