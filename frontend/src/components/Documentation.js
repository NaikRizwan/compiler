import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;

  h2,
  h3 {
    color: #333;
  }

  p {
    line-height: 1.6;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
`;

const Documentation = () => {
  return (
    <Wrapper>
      <h2>Web-Based Compiler Documentation</h2>

      <h3>Overview</h3>
      <p>
        This web-based compiler allows users to write, compile, and run code for
        multiple programming languages directly in their web browser. It
        supports Solidity, Rust, and Motoko, and provides features such as code
        templates and difficulty levels (Easy, Medium, Hard).
      </p>

      <h3>Technologies Used</h3>
      <p>
        <strong>Frontend:</strong>
      </p>
      <ul>
        <li>React for building the user interface.</li>
        <li>Bootstrap and CSS for styling.</li>
        <li>Styled-components for additional styling.</li>
      </ul>
      <p>
        <strong>Backend:</strong>
      </p>
      <ul>
        <li>Node.js and Express for the server.</li>
        <li>MongoDB for database storage.</li>
        <li>dotenv for environment variable management.</li>
        <li>
          Various Node.js modules for functionality, including{" "}
          <code>child_process</code> for running compiler commands,{" "}
          <code>body-parser</code> for parsing request bodies, <code>cors</code>{" "}
          for handling cross-origin requests, and <code>cookie-parser</code> for
          managing cookies.
        </li>
      </ul>

      <h3>Features</h3>
      <ul>
        <li>
          <strong>Language Support:</strong> Users can write and compile code in
          Solidity, Rust, and Motoko.
        </li>
        <li>
          <strong>Difficulty Levels:</strong> The compiler provides predefined
          code templates for Easy, Medium, and Hard levels to help users get
          started.
        </li>
        <li>
          <strong>User Authentication:</strong> Users need to be logged in to
          compile code, with authentication handled via cookies and context.
        </li>
        <li>
          <strong>Real-time Code Compilation:</strong> Code is sent to the
          backend where it is compiled using the appropriate compiler. The
          output is then returned to the user.
        </li>
        <li>
          <strong>Storing Compilation Data:</strong> Compilation results,
          including user details, code, and outputs, are stored in the database
          for tracking and analysis.
        </li>
      </ul>

      <h3>How It Works</h3>
      <p>
        <strong>Frontend Process:</strong>
      </p>
      <ul>
        <li>The user selects a programming language and difficulty level.</li>
        <li>The user writes or edits the code in the provided code editor.</li>
        <li>
          Upon clicking the "Compile" button, the code is sent to the backend
          for compilation.
        </li>
        <li>The output from the compilation is displayed to the user.</li>
      </ul>
      <p>
        <strong>Backend Process:</strong>
      </p>
      <ul>
        <li>The backend receives the code and the selected language.</li>
        <li>
          The appropriate compiler (based on the selected language) is invoked
          to compile the code.
        </li>
        <li>
          The compilation result, whether successful or with errors, is sent
          back to the frontend.
        </li>
        <li>
          The backend also stores the compilation data, including the user’s
          details, the code, and the result, in the database for future
          reference.
        </li>
      </ul>

      <p>
        By following this process, users can write and test their code
        efficiently while the application handles the compilation and result
        management in the background.
      </p>
    </Wrapper>
  );
};

export default Documentation;
