import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./views/Hero";
import NewsPage from "./views/NewsPage";
import NewsInfo from "./views/NewsInfo";
import SingIn from "./views/SingIn";
import Register from "./views/Register";

function App() {
    return (
            <Router>
                <Header/>
                <Route exact path='/'><Hero/></Route>
                <Route path='/news-page'><NewsPage /></Route>
                <Route path='/news-info/:id'><NewsInfo /></Route>
                <Route path="/sing-in"><SingIn/></Route>
                <Route path='/register'><Register/></Route>
                <Footer/>
            </Router>
    );
}

export default App;
