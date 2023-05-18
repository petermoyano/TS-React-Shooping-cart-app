import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import Navbar from "./components/NavBar";

function App() {
    return (
        <>
            <Navbar />
            <Container className="mb-4">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
