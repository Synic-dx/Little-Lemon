import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import HomeMain from "./pages/HomeMain";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/"></Route>
        </Routes>

        <VStack>
          <Header />
          <HomeMain />
          <Footer />
        </VStack>
      </Router>
    </ChakraProvider>
  );
}

export default App;
