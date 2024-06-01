import "./App.css";

import Navbar from "./components/Navbar";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register_Complaints from "./pages/Register_Complaints";
import Community_Forum from "./pages/Community_Forum";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home.jsx"
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import ListOfComplaints from './pages/ListOfComplaints.jsx'
const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/register_complaints"
            element={<Register_Complaints />}
          />
          <Route path="/community_forum" element={<Community_Forum />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path = "/list_of_complaints" element = {<ListOfComplaints />} />
        </Routes>
      </Router>
    </main>
  );
};
export default App;
