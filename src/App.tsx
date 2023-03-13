import React from "react";
import "./App.css";
import { BugReportingTool, Platform } from "@xsvetli1/bug-reporting-tool";
import background from "./demo-guess.png";

function App() {
  return (
    <BugReportingTool
      platform={Platform.Github}
      platformProps={{
        owner: "xsvetli1",
        repository: "bug-reporting-tool",
        authToken: "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",
      }}
    >
      <img src={background} style={{ width: "100%", height: "100vh" }}></img>
    </BugReportingTool>
    // <BugReportingTool
    //   platform={Platform.Gitlab}
    //   props={{
    //     server: new URL("https://gitlab.fi.muni.cz/"),
    //     projectId: 27325,
    //     authToken: '_X97nsW6RxeEV7EkRHmw'
    //   }}
    // >
    //   <h2>Sample application</h2>
    //   <p>Lorem ipsum</p>
    // </BugReportingTool>
  );
}

export default App;
