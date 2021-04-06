import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Posts } from "./components/Posts";
import { Introduce } from "./components/Introduce";
import { Registration } from "./components/Registration";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Wrapper">
          <div className="header-main">
            <Profile />
            <Header />
          </div>
          <div className="Body">
            <Navbar />
            <Switch>
              <Route path={"/corporate-net-with-firebase/"} exact component={Introduce} />
              <Route path={"/corporate-net-with-firebase/registration"} exact component={Registration} />
              <Route path={"/corporate-net-with-firebase/work"} component={Posts} />
              <Route path={"/corporate-net-with-firebase/informal"} component={Posts} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
