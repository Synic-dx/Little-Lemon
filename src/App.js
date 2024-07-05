import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import HomeMain from "./pages/HomeMain";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <VStack>
          <Header />
          <Routes>
            <Route path="/" element={<HomeMain />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
          </Routes>
          <Footer />
        </VStack>
      </Router>
    </ChakraProvider>
  );
}

export default App;
