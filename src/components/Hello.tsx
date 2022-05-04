import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}!
        <button onClick={() => console.log("Hello")}>click</button>
      </h1>
    );
  }
}
