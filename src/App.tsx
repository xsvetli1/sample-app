import React from "react";
import "./App.css";
import { BugReportingTool, Platform } from "@xsvetli1/bug-reporting-tool";
import background from "./demo-guess.png";

function App() {
  return (
    // <BugReportingTool
    //   platform={Platform.Github}
    //   platformProps={{
    //     owner: "xsvetli1",
    //     repository: "bug-reporting-tool",
    //     authToken: "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",
    //   }}
    // >
    //   <img src={background} style={{ width: "100%", height: "100vh" }}></img>
    // </BugReportingTool>
    <BugReportingTool
      platform={Platform.Gitlab}
      platformProps={{
        server: new URL("https://gitlab.fi.muni.cz/"),
        projectId: 27325,
        authToken: "zsRR4zgTxKUv3GzJ1hyJ",
        // authToken: '_X97nsW6RxeEV7EkRHmw'
      }}
    >
      <img src={background} style={{ width: "100%", height: "100vh" }}></img>
    </BugReportingTool>
  );
}

export default App;
