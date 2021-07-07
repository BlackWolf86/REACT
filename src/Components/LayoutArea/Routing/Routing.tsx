import { Redirect, Route, Switch } from "react-router-dom";
import ContactUs from "../../HomeArea/ContactUs/ContactUs";
import Main from "../../HomeArea/Main/Main";
import Sales from "../../HomeArea/Sales/Sales";
import AllClubs from "../../MenuArea/AllClubs/AllClubs";
import AllTimeGoals from "../../MenuArea/AllTimeGoals/AllTimeGoals";
import AllTimeTitles from "../../MenuArea/AllTimeTitles/AllTimeTitles";
import Page404 from "../../SharedArea/Page404/Page404";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Switch>
                <Route path='/home' component={Main} exact />
                <Route path='/goals' component={AllTimeGoals} exact />
                <Route path='/titles' component={AllTimeTitles} exact />
                <Route path='/clubs' component={AllClubs} exact />
                <Route path='/sale' component={Sales} exact />
                <Route path='/contactus' component={ContactUs} exact />
                <Redirect from='/' to='home' exact />
                <Route component={Page404} /> {/* Last */}
            </Switch>
        </div>
    );
}

export default Routing;
