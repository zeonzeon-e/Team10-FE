import { BrowserRouter as Router, Switch, Routes, Route,BrowserRouter  } from "react-router-dom";
import MakeMyProfile from "./components/MakeMyProfile";
import Home from "./components/Home";
import { Flex } from "@chakra-ui/react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Cardpage from "./components/Cardpage";
import MyCard from "./components/MyCard";

function App() {
  return (
    <Flex align="center" justify="center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make-my-profile" element={<MakeMyProfile />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Card" element={<Cardpage />} />
        <Route path="/MyCard" element={<MyCard />} />
      </Routes>
    </Flex>
  );
}

export default App;
