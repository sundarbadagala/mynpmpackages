import React from "react";
import { simpleData } from "./data/simpleDummyData";
import { complexData } from "./data/complexDummyData";
import { sort } from "./packages/myreactjs/helpers";
import { data_chain } from "./packages/myreactjs";

function App() {
  console.log(
    data_chain.initiate(simpleData).sort("name").sortDescent("name").print()
  );
  return <div>App</div>;
}

export default App;
