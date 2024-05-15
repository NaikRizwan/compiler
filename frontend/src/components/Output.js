import React from "react";

const Output = ({ output }) => {
  return (
    <div className="mt-4">
      <h2>Output</h2>
      <pre className="bg-light p-3 border rounded">{output}</pre>
    </div>
  );
};

export default Output;
