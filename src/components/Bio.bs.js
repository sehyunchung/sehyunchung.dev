// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as React from "react";

function str(prim) {
  return prim;
}

function Bio(Props) {
  var social = Props.social;
  return React.createElement("p", undefined, React.createElement("span", undefined, "about"), "  |  ", React.createElement("a", {
                  href: "https://github.com/" + social.github
                }, "github"));
}

var make = Bio;

export {
  str ,
  make ,
  
}
/* react Not a pure module */