import * as React from "react";

export interface AppProps {
  hoge: string;
  fuge: string;
}

export class App extends React.Component<AppProps, {}> {
  render() {
    return <h1>Hello {this.props.hoge} and {this.props.fuge}!</h1>;
  }
}
