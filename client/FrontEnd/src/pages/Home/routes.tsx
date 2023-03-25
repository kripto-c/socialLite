import { Routes, Route, BrowserRouter } from "react-router-dom";
import Acount from "./acount/Acount";
import Chats from "./chats/Chats";
import Friends from "./friends/Friends";
import Index from "./inicio/Index";
import Settings from "./settings/Settings";
import Soport from "./soport/Soport";

function RutasAcoutn() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/acountInfo" element={<Acount />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/soport" element={<Soport />} />
    </Routes>
  );
}

export default RutasAcoutn;
