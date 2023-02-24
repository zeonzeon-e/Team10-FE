import { Routes, Route } from "react-router-dom";
import MakeMyProfile from "./components/MakeMyProfile";
import Home from "./components/Home";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex align="center" justify="center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make-my-profile" element={<MakeMyProfile />} />
      </Routes>
    </Flex>
  );
}

export default App;
