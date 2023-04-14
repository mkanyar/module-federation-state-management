// src/Header.jsx
import React from "react";
import { useStore } from "store/store";
var Header_default = () => {
  const { count, clear } = useStore();
  return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", null, "Awesome Header"), /* @__PURE__ */ React.createElement("div", null, count, /* @__PURE__ */ React.createElement("button", { onClick: clear }, "normal component for test")));
};
export {
  Header_default as default
};
