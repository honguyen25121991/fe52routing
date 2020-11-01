import React from "react";
import { Route } from "react-router-dom";
// import NavbarAdmin from "../../components/NavbarAdmin";
import NavbarHome from "./../../components/NavbarHome";

function HomeLayout(props) {
  return (
    <div>
      <NavbarHome />
      {props.children}
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  // const {exact,path,Component}= props;
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent}/>
        </HomeLayout>
      )}
    />
  );
}
