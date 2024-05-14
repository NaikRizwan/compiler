// // // // // src/components/Compiler.js
// // // // import React, { useState } from "react";
// // // // import CodeEditor from "./CodeEditor";
// // // // import compileCode from "./compilerService";
// // // // import Output from "./Output";

// // // // const Compiler = () => {
// // // //   const [language, setLanguage] = useState("solidity");
// // // //   const [code, setCode] = useState("");
// // // //   const [output, setOutput] = useState("");

// // // //   const handleCompile = async () => {
// // // //     const result = await compileCode(language, code);
// // // //     setOutput(result.output);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <select onChange={(e) => setLanguage(e.target.value)} value={language}>
// // // //         <option value="solidity">Solidity</option>
// // // //         <option value="rust">Rust</option>
// // // //         <option value="motoko">Motoko</option>
// // // //       </select>
// // // //       <CodeEditor language={language} value={code} onChange={setCode} />
// // // //       <button onClick={handleCompile}>Compile</button>
// // // //       <Output output={output} />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Compiler;
// // // // src/components/Compiler.js
// // // import React, { useState } from "react";
// // // import CodeEditor from "./CodeEditor";
// // // import compileCode from "./compilerService";
// // // import Output from "./Output";

// // // const Compiler = () => {
// // //   const [language, setLanguage] = useState("solidity");
// // //   const [difficulty, setDifficulty] = useState("easy");
// // //   const [code, setCode] = useState("");
// // //   const [output, setOutput] = useState("");

// // //   const predefinedCode = {
// // //     solidity: {
// // //       easy: 'pragma solidity ^0.8.0;\n\ncontract Simple {\n  function greet() public pure returns (string memory) {\n    return "Hello, world!";\n  }\n}',
// // //       medium:
// // //         "pragma solidity ^0.8.0;\n\ncontract Medium {\n  function add(uint a, uint b) public pure returns (uint) {\n    return a + b;\n  }\n}",
// // //       hard: "pragma solidity ^0.8.0;\n\ncontract Hard {\n  function factorial(uint n) public pure returns (uint) {\n    if (n == 0) return 1;\n    return n * factorial(n - 1);\n  }\n}",
// // //     },
// // //     rust: {
// // //       easy: 'fn main() {\n    println!("Hello, world!");\n}',
// // //       medium:
// // //         'fn add(a: i32, b: i32) -> i32 {\n    a + b\n}\n\nfn main() {\n    println!("{}", add(2, 3));\n}',
// // //       hard: 'fn factorial(n: u32) -> u32 {\n    match n {\n        0 => 1,\n        _ => n * factorial(n - 1),\n    }\n}\n\nfn main() {\n    println!("{}", factorial(5));\n}',
// // //     },
// // //     motoko: {
// // //       easy: 'actor HelloWorld {\n  public func greet() : async Text {\n    return "Hello, world!";\n  }\n}',
// // //       medium:
// // //         "actor Medium {\n  public func add(a : Nat, b : Nat) : async Nat {\n    return a + b;\n  }\n}",
// // //       hard: "actor Hard {\n  public func factorial(n : Nat) : async Nat {\n    if (n == 0) return 1;\n    return n * await factorial(n - 1);\n  }\n}",
// // //     },
// // //   };

// // //   const handleCompile = async () => {
// // //     const result = await compileCode(language, code);
// // //     setOutput(result.output);
// // //   };

// // //   const handleDifficultyChange = (e) => {
// // //     const selectedDifficulty = e.target.value;
// // //     setDifficulty(selectedDifficulty);
// // //     setCode(predefinedCode[language][selectedDifficulty]);
// // //   };

// // //   return (
// // //     <div className="container mt-4">
// // //       <h1 className="text-center mb-4">Web-Based Compiler</h1>
// // //       <div className="row">
// // //         <div className="col-md-6">
// // //           <div className="form-group">
// // //             <label htmlFor="language" className="form-label">
// // //               Select Language
// // //             </label>
// // //             <select
// // //               id="language"
// // //               className="form-select"
// // //               onChange={(e) => setLanguage(e.target.value)}
// // //               value={language}
// // //             >
// // //               <option value="solidity">Solidity</option>
// // //               <option value="rust">Rust</option>
// // //               <option value="motoko">Motoko</option>
// // //             </select>
// // //           </div>
// // //         </div>
// // //         <div className="col-md-6">
// // //           <div className="form-group">
// // //             <label htmlFor="difficulty" className="form-label">
// // //               Select Difficulty
// // //             </label>
// // //             <select
// // //               id="difficulty"
// // //               className="form-select"
// // //               onChange={handleDifficultyChange}
// // //               value={difficulty}
// // //             >
// // //               <option value="easy">Easy</option>
// // //               <option value="medium">Medium</option>
// // //               <option value="hard">Hard</option>
// // //             </select>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <div className="mt-4">
// // //         <CodeEditor language={language} value={code} onChange={setCode} />
// // //       </div>
// // //       <div className="text-center mt-4">
// // //         <button className="btn btn-primary" onClick={handleCompile}>
// // //           Compile
// // //         </button>
// // //       </div>
// // //       <Output output={output} />
// // //     </div>
// // //   );
// // // };

// // // export default Compiler;
// // import React, { useState } from "react";
// // import CodeEditor from "./CodeEditor";
// // import compileCode from "./compilerService";
// // import Output from "./Output";

// // const Compiler = () => {
// //   const [language, setLanguage] = useState("solidity");
// //   const [difficulty, setDifficulty] = useState("easy");
// //   const [code, setCode] = useState("");
// //   const [output, setOutput] = useState("");
// //   const [loading, setLoading] = useState(false);

//   // const predefinedCode = {
//   //   solidity: {
//   //     easy: 'pragma solidity ^0.8.0;\n\ncontract Simple {\n  function greet() public pure returns (string memory) {\n    return "Hello, world!";\n  }\n}',
//   //     medium:
//   //       "pragma solidity ^0.8.0;\n\ncontract Medium {\n  function add(uint a, uint b) public pure returns (uint) {\n    return a + b;\n  }\n}",
//   //     hard: "pragma solidity ^0.8.0;\n\ncontract Hard {\n  function factorial(uint n) public pure returns (uint) {\n    if (n == 0) return 1;\n    return n * factorial(n - 1);\n  }\n}",
//   //   },
//   //   rust: {
//   //     easy: 'fn main() {\n    println!("Hello, world!");\n}',
//   //     medium:
//   //       'fn add(a: i32, b: i32) -> i32 {\n    a + b\n}\n\nfn main() {\n    println!("{}", add(2, 3));\n}',
//   //     hard: 'fn factorial(n: u32) -> u32 {\n    match n {\n        0 => 1,\n        _ => n * factorial(n - 1),\n    }\n}\n\nfn main() {\n    println!("{}", factorial(5));\n}',
//   //   },
//   //   motoko: {
//   //     easy: 'actor HelloWorld {\n  public func greet() : async Text {\n    return "Hello, world!";\n  }\n}',
//   //     medium:
//   //       "actor Medium {\n  public func add(a : Nat, b : Nat) : async Nat {\n    return a + b;\n  }\n}",
//   //     hard: "actor Hard {\n  public func factorial(n : Nat) : async Nat {\n    if (n == 0) return 1;\n    return n * await factorial(n - 1);\n  }\n}",
//   //   },
//   // };

// //   const handleCompile = async () => {
// //     setLoading(true);
// //     const result = await compileCode(language, code);
// //     setLoading(false);
// //     setOutput(result.output);
// //   };

// //   const handleDifficultyChange = (e) => {
// //     const selectedDifficulty = e.target.value;
// //     setDifficulty(selectedDifficulty);
// //     setCode(predefinedCode[language][selectedDifficulty]);
// //   };

// //   return (
// //     <div className="container mt-4">
// //       <h1 className="text-center mb-4">Web-Based Compiler</h1>
// //       <div className="row">
// //         <div className="col-md-6">
// //           <div className="form-group">
// //             <label htmlFor="language" className="form-label">
// //               Select Language
// //             </label>
// //             <select
// //               id="language"
// //               className="form-select"
// //               onChange={(e) => setLanguage(e.target.value)}
// //               value={language}
// //             >
// //               <option value="solidity">Solidity</option>
// //               <option value="rust">Rust</option>
// //               <option value="motoko">Motoko</option>
// //             </select>
// //           </div>
// //         </div>
// //         <div className="col-md-6">
// //           <div className="form-group">
// //             <label htmlFor="difficulty" className="form-label">
// //               Select Difficulty
// //             </label>
// //             <select
// //               id="difficulty"
// //               className="form-select"
// //               onChange={handleDifficultyChange}
// //               value={difficulty}
// //             >
// //               <option value="easy">Easy</option>
// //               <option value="medium">Medium</option>
// //               <option value="hard">Hard</option>
// //             </select>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="mt-4">
// //         <CodeEditor language={language} value={code} onChange={setCode} />
// //       </div>
// //       <div className="text-center mt-4">
// //         <button
// //           className="btn btn-primary"
// //           onClick={handleCompile}
// //           disabled={loading}
// //         >
// //           {loading ? "Compiling..." : "Compile"}
// //         </button>
// //       </div>
// //       <Output output={output} />
// //     </div>
// //   );
// // };

// // export default Compiler;
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import CodeEditor from './CodeEditor';
// import compileCode from './compilerService';
// import Output from './Output';
// import { useUser } from '../context/UserContext';

// const Compiler = () => {
//   const [language, setLanguage] = useState('solidity');
//   const [difficulty, setDifficulty] = useState('easy');
//   const [code, setCode] = useState('');
//   const [output, setOutput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { state } = useUser();
//   const history = useHistory();

//   const predefinedCode = {
//     solidity: {
//       easy: 'pragma solidity ^0.8.0;\n\ncontract Simple {\n  function greet() public pure returns (string memory) {\n    return "Hello, world!";\n  }\n}',
//       medium:
//         "pragma solidity ^0.8.0;\n\ncontract Medium {\n  function add(uint a, uint b) public pure returns (uint) {\n    return a + b;\n  }\n}",
//       hard: "pragma solidity ^0.8.0;\n\ncontract Hard {\n  function factorial(uint n) public pure returns (uint) {\n    if (n == 0) return 1;\n    return n * factorial(n - 1);\n  }\n}",
//     },
//     rust: {
//       easy: 'fn main() {\n    println!("Hello, world!");\n}',
//       medium:
//         'fn add(a: i32, b: i32) -> i32 {\n    a + b\n}\n\nfn main() {\n    println!("{}", add(2, 3));\n}',
//       hard: 'fn factorial(n: u32) -> u32 {\n    match n {\n        0 => 1,\n        _ => n * factorial(n - 1),\n    }\n}\n\nfn main() {\n    println!("{}", factorial(5));\n}',
//     },
//     motoko: {
//       easy: 'actor HelloWorld {\n  public func greet() : async Text {\n    return "Hello, world!";\n  }\n}',
//       medium:
//         "actor Medium {\n  public func add(a : Nat, b : Nat) : async Nat {\n    return a + b;\n  }\n}",
//       hard: "actor Hard {\n  public func factorial(n : Nat) : async Nat {\n    if (n == 0) return 1;\n    return n * await factorial(n - 1);\n  }\n}",
//     },
//   };
//   const handleCompile = async () => {
//     if (!state.loggedIn) {
//       history.push('/login');
//       return;
//     }

//     setLoading(true);
//     try {
//       const result = await compileCode(language, code);
//       setOutput(result.output);

//       const compileData = {
//         username: state.name,
//         email: state.email,
//         language,
//         difficulty,
//         code,
//         result: result.output,
//         success: result.success,
//       };

//       await fetch('/api/storeCompilationData', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(compileData),
//       });

//     } catch (error) {
//       console.error('Compilation failed', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDifficultyChange = (e) => {
//     const selectedDifficulty = e.target.value;
//     setDifficulty(selectedDifficulty);
//     setCode(predefinedCode[language][selectedDifficulty]);
//   };

//   return (
//     <div className="container mt-4">
//       <h1 className="text-center mb-4">Web-Based Compiler</h1>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="form-group">
//             <label htmlFor="language" className="form-label">
//               Select Language
//             </label>
//             <select
//               id="language"
//               className="form-select"
//               onChange={(e) => {
//                 setLanguage(e.target.value);
//                 setCode(predefinedCode[e.target.value][difficulty]);
//               }}
//               value={language}
//             >
//               <option value="solidity">Solidity</option>
//               <option value="rust">Rust</option>
//               <option value="motoko">Motoko</option>
//             </select>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="form-group">
//             <label htmlFor="difficulty" className="form-label">
//               Select Difficulty
//             </label>
//             <select
//               id="difficulty"
//               className="form-select"
//               onChange={handleDifficultyChange}
//               value={difficulty}
//             >
//               <option value="easy">Easy</option>
//               <option value="medium">Medium</option>
//               <option value="hard">Hard</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <div className="mt-4">
//         <CodeEditor language={language} value={code} onChange={setCode} />
//       </div>
//       <div className="text-center mt-4">
//         <button
//           className="btn btn-primary"
//           onClick={handleCompile}
//           disabled={loading}
//         >
//           {loading ? 'Compiling...' : 'Compile'}
//         </button>
//       </div>
//       <Output output={output} />
//     </div>
//   );
// };

// export default Compiler;
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import CodeEditor from "./CodeEditor";
import compileCode from "./compilerService";
import Output from "./Output";
import { useUser } from "../context/UserContext";

const Compiler = () => {
  const [language, setLanguage] = useState("solidity");
  const [difficulty, setDifficulty] = useState("easy");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const { state } = useUser();
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const predefinedCode = {
    solidity: {
      easy: 'pragma solidity ^0.8.0;\n\ncontract Simple {\n  function greet() public pure returns (string memory) {\n    return "Hello, world!";\n  }\n}',
      medium:
        "pragma solidity ^0.8.0;\n\ncontract Medium {\n  function add(uint a, uint b) public pure returns (uint) {\n    return a + b;\n  }\n}",
      hard: "pragma solidity ^0.8.0;\n\ncontract Hard {\n  function factorial(uint n) public pure returns (uint) {\n    if (n == 0) return 1;\n    return n * factorial(n - 1);\n  }\n}",
    },
    rust: {
      easy: 'fn main() {\n    println!("Hello, world!");\n}',
      medium:
        'fn add(a: i32, b: i32) -> i32 {\n    a + b\n}\n\nfn main() {\n    println!("{}", add(2, 3));\n}',
      hard: 'fn factorial(n: u32) -> u32 {\n    match n {\n        0 => 1,\n        _ => n * factorial(n - 1),\n    }\n}\n\nfn main() {\n    println!("{}", factorial(5));\n}',
    },
    motoko: {
      easy: 'actor HelloWorld {\n  public func greet() : async Text {\n    return "Hello, world!";\n  }\n}',
      medium:
        "actor Medium {\n  public func add(a : Nat, b : Nat) : async Nat {\n    return a + b;\n  }\n}",
      hard: "actor Hard {\n  public func factorial(n : Nat) : async Nat {\n    if (n == 0) return 1;\n    return n * await factorial(n - 1);\n  }\n}",
    },
  };

  const handleCompile = async () => {
    if (!state.loggedIn) {
      setRedirectToLogin(true);
      return;
    }

    setLoading(true);
    try {
      const result = await compileCode(language, code);
      setOutput(result.output);

      const compileData = {
        username: state.name,
        email: state.email,
        language,
        difficulty,
        code,
        result: result.output,
        success: result.success,
      };

      await fetch("/storeCompilationData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(compileData),
      });
    } catch (error) {
      console.error("Compilation failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDifficultyChange = (e) => {
    const selectedDifficulty = e.target.value;
    setDifficulty(selectedDifficulty);
    setCode(predefinedCode[language][selectedDifficulty]);
  };

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Web-Based Compiler</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="language" className="form-label">
              Select Language
            </label>
            <select
              id="language"
              className="form-select"
              onChange={(e) => {
                setLanguage(e.target.value);
                setCode(predefinedCode[e.target.value][difficulty]);
              }}
              value={language}
            >
              <option value="solidity">Solidity</option>
              <option value="rust">Rust</option>
              <option value="motoko">Motoko</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="difficulty" className="form-label">
              Select Difficulty
            </label>
            <select
              id="difficulty"
              className="form-select"
              onChange={handleDifficultyChange}
              value={difficulty}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <CodeEditor language={language} value={code} onChange={setCode} />
      </div>
      <div className="text-center mt-4">
        <button
          className="btn btn-primary"
          onClick={handleCompile}
          disabled={loading}
        >
          {loading ? "Compiling..." : "Compile"}
        </button>
      </div>
      <Output output={output} />
    </div>
  );
};

export default Compiler;
