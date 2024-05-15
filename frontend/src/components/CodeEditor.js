import React from "react";
import MonacoEditor from "@monaco-editor/react";

const CodeEditor = ({ language, value, onChange }) => {
  return (
    <MonacoEditor
      height="400px"
      language={language}
      value={value}
      onChange={(value) => onChange(value)}
      theme="vs-dark"
      options={{
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: "line",
        automaticLayout: true,
      }}
    />
  );
};

export default CodeEditor;
