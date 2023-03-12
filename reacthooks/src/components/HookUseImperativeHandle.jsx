import React from "react";
import { useRef } from "react";
import SomeComponent from "./SomeComponent";

const HookUseImperativeHandle = () => {
  const componentRef = useRef();

  return (
    <div>
      <h2>HookUseImperativeHandle</h2>
      <SomeComponent ref={componentRef} />
      <hr />
      <button onClick={() => componentRef.current.validate()}>Validate</button>
    </div>
  );
};

export default HookUseImperativeHandle;
