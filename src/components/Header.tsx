
import * as React from "react";

export const Header = () => {

  return (

    <header>
      <div className="nav-head"><h1><a href="/">Demo Streaming</a></h1></div>
      <div className="nav-links">
        <div className="login" ><a href="#">Log In</a></div>
        <div className="free-trail"><a href="#">Start your free trail</a></div>
      </div>

    </header>

  );
}