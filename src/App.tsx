import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Store } from "./pages/Store/Store";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import "./App.css";

function App() {
    return (
        <>
            <ShoppingCartProvider>
                <Navbar />
                <Container className="mb-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/store" element={<Store />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Container>
            </ShoppingCartProvider>
        </>
    );
}

export default App;
