import "./App.css";
// import HomePage from "./containers/HomeTemplate/HomePage";
// import AboutPage from "./containers/HomeTemplate/AboutPage";
// import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import NavbarHome from "./components/NavbarHome";
import { routesHome,routesAdmin } from "./routes";
import NavbarAdmin from "./components/NavbarAdmin";
import HomeTemplate from "./containers/HomeTemplate";
import AdminTemplate from "./containers/AdminTemplate"


function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          // <Route
          //   key={index}
          //   exact={item.exact}
          //   path={item.path}
          //   component={item.component}
          // />
          <HomeTemplate
            key = {index}
            exact = {item.exact}
            path = {item.path}
            Component = {item.component}
          />
        );
      });
    }
  };
  const showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <div>
        {/* <NavbarHome /> */}
        {/* <NavbarAdmin/> */}
     
        <Switch>
          {/* Trang HomePage - localhost:3000 */}
          {/* <Route exact path="/" component={HomePage} /> */}

          {/* Trang AboutPage - localhost:3000/about */}
          {/* <Route path="/about" component={AboutPage} /> */}

          {/* Trang ListMoviePage - localhost:3000/list-movie */}
          {/* <Route path="/list-movie" component={ListMoviePage} /> */}

          {showLayoutHome(routesHome)};
          {showLayoutAdmin(routesAdmin)};

          {/* Trang K tim thay */}
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
