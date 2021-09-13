import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./views/Hero";


function App() {
    return (
        <Router>
            <Header/>
            <Hero/>
            <Footer/>
        </Router>
    );
}

export default App;
