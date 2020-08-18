import * as $ from "jquery";
import Post from "@/Post";
import "@/styles/styles.css";
import icon from "@/assets/icon";
import "./babel";
import React from "react";
import { render } from "react-dom";
import "@/styles/sass.scss";
import Main from "@/components/main.jsx";

const post = new Post("test title", icon);
$("pre").html(post.toString());

// console.log("post to string", post.toString());

const App = () => {
  return (
    <div className="container">
      {/* <h1>webpack test</h1>
      <div className="logo"></div>
      <hr />
      <pre className="code" />
      <div className="test">
        testing test<p>another text</p>
      </div> */}
      <Main></Main>
    </div>
  );
};

render(<App />, document.getElementById("app"));
