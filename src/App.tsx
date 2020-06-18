import React from "react";
import Jsx from "./Jsx";
import js from "./js";
import { pure } from "./ts";

export default () => {
  return (
    <>
      <h1>{js + pure(1, 2) + process.env.TEST}</h1>
      <Jsx />
    </>
  );
};
