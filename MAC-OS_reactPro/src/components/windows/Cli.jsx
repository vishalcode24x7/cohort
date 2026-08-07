import React, { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import MacWindow from "./MacWindow";
import "./cli.scss";

const Cli = ({windowName, setwindowsState}) => {
  const [lineData, setLineData] = useState([
    <TerminalOutput key={0}>Welcome!</TerminalOutput>,
  ]);

  const onInput = (input) => {
    let response;
    switch (input.trim().toLowerCase()) {
      case "help":
        response = "Available commands: help, about, clear";
        break;
      case "about":
        response = "This is Vishal's portfolio terminal.";
        break;
      case "clear":
        setLineData([]);
        return;
      default:
        response = `Command not found: ${input}`;
    }

    setLineData((prev) => [
      ...prev,
      <TerminalOutput
        key={prev.length}
      >{`vishal@portfolio:~$ ${input}`}</TerminalOutput>,
      <TerminalOutput key={prev.length + 1}>{response}</TerminalOutput>,
    ]);
  };

  return (
    <MacWindow windowName="cli" setwindowsState={setwindowsState}>
      <div className="cli-window">
        <Terminal
          name=""
          colorMode={ColorMode.Dark}
          onInput={onInput}
          showControlBar={false}
        >
          {lineData}
        </Terminal>
      </div>
    </MacWindow>
  );
};

export default Cli;
