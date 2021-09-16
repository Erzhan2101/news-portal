import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Hero from "./views/Hero";
import NewsPage from "./views/NewsPage";
import NewsInfo from "./views/NewsInfo";
import SingIn from "./views/SingIn";
import Register from "./views/Register";
import Layout from "./components/Layout";
import NotFount from "./views/NotFount";
import Admin from "./views/Admin";

function App() {
    return (
        <Router>
            <Layout>
              <Switch>
                  <Route exact path='/'><Hero/></Route>
                  <Route path='/news-page'><NewsPage/></Route>
                  <Route path='/news-info/:id'><NewsInfo/></Route>
                  <Route path="/sing-in"><SingIn/></Route>
                  <Route path='/register'><Register/></Route>
                  <Route path='/admin'><Admin/></Route>
                  <Route path='*'><NotFount/></Route>
              </Switch>
            </Layout>
        </Router>
    );
}

export default App;
