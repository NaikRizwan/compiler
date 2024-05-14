// // server.js
// const express = require("express");
// const bodyParser = require("body-parser");
// const { exec } = require("child_process");
// const fs = require("fs");
// const path = require("path");
// const cors = require("cors");
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // const compileCode = (language, code, callback) => {
// //   const filename = `temp.${language}`;
// //   const filepath = path.join(__dirname, filename);

// //   fs.writeFileSync(filepath, code);

// //   let command;
// //   if (language === "sol") {
// //     command = `solc --combined-json abi,bin ${filepath}`;
// //   } else if (language === "rs") {
// //     command = `rustc ${filepath} -o ${filepath}.exe && ${filepath}.exe`;
// //   } else if (language === "mo") {
// //     command = `moc ${filepath}`;
// //   }

// //   exec(command, (error, stdout, stderr) => {
// //     fs.unlinkSync(filepath); // Clean up the temp file
// //     if (language === "rs" && !error) {
// //       fs.unlinkSync(`${filepath}.exe`); // Clean up Rust output binary
// //     }
// //     if (error) {
// //       callback(stderr);
// //     } else {
// //       callback(stdout);
// //     }
// //   });
// // };
// const compileCode = (language, code, callback) => {
//   const filename = `temp.${language}`;
//   const filepath = path.join(__dirname, filename);

//   fs.writeFileSync(filepath, code);

//   // Add the directory containing rustc to the PATH
//   const rustPath = "C:\\Users\\LENOVO\\.cargo\\bin"; // Update this to your actual rustc path
//   const currentPath = process.env.PATH;
//   const newPath = `${currentPath};${rustPath}`;

//   let command;
//   if (language === "sol") {
//     command = `solc --combined-json abi,bin ${filepath}`;
//   } else if (language === "rs") {
//     command = `rustc ${filepath} -o ${filepath}.exe && ${filepath}.exe`;
//   } else if (language === "mo") {
//     command = `moc ${filepath}`;
//   }

//   exec(
//     command,
//     { env: { ...process.env, PATH: newPath } },
//     (error, stdout, stderr) => {
//       fs.unlinkSync(filepath); // Clean up the temp file
//       if (language === "rs" && !error) {
//         fs.unlinkSync(`${filepath}.exe`); // Clean up Rust output binary
//       }
//       if (error) {
//         callback(stderr);
//       } else {
//         callback(stdout);
//       }
//     }
//   );
// };

// app.post("/api/compile", (req, res) => {
//   console.log("hii");
//   const { language, code } = req.body;

//   let ext;
//   switch (language) {
//     case "solidity":
//       ext = "sol";
//       break;
//     case "rust":
//       ext = "rs";
//       break;
//     case "motoko":
//       ext = "mo";
//       break;
//     default:
//       res.status(400).json({ error: "Unsupported language" });
//       return;
//   }

//   compileCode(ext, code, (output) => {
//     res.json({ output });
//   });
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });
// const express = require("express");
// const bodyParser = require("body-parser");
// const { exec } = require("child_process");
// const fs = require("fs");
// const path = require("path");
// const cors = require("cors");
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const compileCode = (language, code, callback) => {
//   const filename = `temp.${language}`;
//   const filepath = path.join(__dirname, filename);

//   fs.writeFileSync(filepath, code);

//   let command;
//   let additionalPath = "";

//   switch (language) {
//     case "sol":
//       command = `solcjs --combined-json abi,bin ${filepath}`;
//       additionalPath = "C:\\Users\\LENOVO\\AppData\\Roaming\\npm"; // Update this to your actual solcjs path
//       break;
//     case "rs":
//       command = `rustc ${filepath} -o ${filepath}.exe && ${filepath}.exe`;
//       additionalPath = "C:\\Users\\LENOVO\\.cargo\\bin"; // Update this to your actual rustc path
//       break;
//     case "mo":
//       command = `moc ${filepath}`;
//       additionalPath = "C:\\Users\\LENOVO\\motoko\\bin"; // Update this to your actual moc path
//       break;
//     default:
//       callback("Unsupported language");
//       return;
//   }

//   const currentPath = process.env.PATH;
//   const newPath = `${currentPath};${additionalPath}`;

//   exec(
//     command,
//     { env: { ...process.env, PATH: newPath } },
//     (error, stdout, stderr) => {
//       fs.unlinkSync(filepath); // Clean up the temp file
//       if (language === "rs" && !error) {
//         fs.unlinkSync(`${filepath}.exe`); // Clean up Rust output binary
//       }
//       if (error) {
//         callback(stderr);
//       } else {
//         callback(stdout);
//       }
//     }
//   );
// };

// app.post("/api/compile", (req, res) => {
//   const { language, code } = req.body;

//   let ext;
//   switch (language) {
//     case "solidity":
//       ext = "sol";
//       break;
//     case "rust":
//       ext = "rs";
//       break;
//     case "motoko":
//       ext = "mo";
//       break;
//     default:
//       res.status(400).json({ error: "Unsupported language" });
//       return;
//   }

//   compileCode(ext, code, (output) => {
//     res.json({ output });
//   });
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

// // run rust
// const express = require("express");
// const bodyParser = require("body-parser");
// const { exec } = require("child_process");
// const fs = require("fs");
// const path = require("path");
// const cors = require("cors");
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const compileCode = (language, code, callback) => {
//   const filename = `temp.${language}`;
//   const filepath = path.join(__dirname, filename);

//   fs.writeFileSync(filepath, code);

//   let command;
//   let additionalPath = "";

//   switch (language) {
//     case "sol":
//       command = `solcjs --abi --bin ${filepath}`;
//       additionalPath = "C:\\Users\\LENOVO\\AppData\\Roaming\\npm"; // Path to solcjs
//       break;
//     case "rs":
//       command = `rustc ${filepath} -o ${filepath}.exe && ${filepath}.exe`;
//       additionalPath = "C:\\Users\\LENOVO\\.cargo\\bin"; // Path to rustc
//       break;
//     case "mo":
//       command = `moc ${filepath}`;
//       additionalPath = "C:\\Users\\LENOVO\\motoko\\bin"; // Path to moc (update to actual path)
//       break;
//     default:
//       callback("Unsupported language");
//       return;
//   }

//   const currentPath = process.env.PATH;
//   const newPath = `${currentPath};${additionalPath}`;

//   exec(
//     command,
//     { env: { ...process.env, PATH: newPath } },
//     (error, stdout, stderr) => {
//       fs.unlinkSync(filepath); // Clean up the temp file
//       if (language === "rs" && !error) {
//         fs.unlinkSync(`${filepath}.exe`); // Clean up Rust output binary
//       }
//       if (error) {
//         callback(stderr);
//       } else {
//         callback(stdout);
//       }
//     }
//   );
// };

// app.post("/api/compile", (req, res) => {
//   console.log("hejrf");
//   const { language, code } = req.body;

//   let ext;
//   switch (language) {
//     case "solidity":
//       ext = "sol";
//       break;
//     case "rust":
//       ext = "rs";
//       break;
//     case "motoko":
//       ext = "mo";
//       break;
//     default:
//       res.status(400).json({ error: "Unsupported language" });
//       return;
//   }

//   compileCode(ext, code, (output) => {
//     res.json({ output });
//   });
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });
// run rsut
const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

app.use(cors());
app.use(bodyParser.json());
const mongoose = require("./db");
dotenv.config({ path: "./config.env" });

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(require("./routes/auth"));
const addSpdxLicense = (code) => {
  const spdxLicense = "// SPDX-License-Identifier: UNLICENSED\n";
  return spdxLicense + code;
};

const compileCode = (language, code, callback) => {
  if (language === "sol") {
    code = addSpdxLicense(code);
  }

  const filename = `temp.${language}`;
  const filepath = path.join(__dirname, filename);

  fs.writeFileSync(filepath, code);

  let command;
  let additionalPath = "";

  switch (language) {
    case "sol":
      command = `solcjs --abi --bin ${filepath} -o ${__dirname}`;
      additionalPath = "C:\\Users\\LENOVO\\AppData\\Roaming\\npm"; // Path to solcjs
      break;
    case "rs":
      command = `rustc ${filepath} -o ${filepath}.exe && ${filepath}.exe`;
      additionalPath = "C:\\Users\\LENOVO\\.cargo\\bin"; // Path to rustc
      break;
    case "mo":
      command = `moc ${filepath}`;
      additionalPath = "C:\\Users\\LENOVO\\motoko\\bin"; // Path to moc (update to actual path)
      break;
    default:
      callback("Unsupported language");
      return;
  }

  const currentPath = process.env.PATH;
  const newPath = `${currentPath};${additionalPath}`;

  exec(
    command,
    { env: { ...process.env, PATH: newPath } },
    (error, stdout, stderr) => {
      fs.unlinkSync(filepath); // Clean up the temp file
      if (language === "rs" && !error) {
        fs.unlinkSync(`${filepath}.exe`); // Clean up Rust output binary
      }
      if (error) {
        callback(stderr);
      } else {
        if (language === "sol") {
          const abiFiles = fs
            .readdirSync(__dirname)
            .filter((file) => file.endsWith(".abi"));
          const binFiles = fs
            .readdirSync(__dirname)
            .filter((file) => file.endsWith(".bin"));

          const output = abiFiles
            .map((abiFile) => {
              const binFile = binFiles.find(
                (bin) => bin.replace(".bin", "") === abiFile.replace(".abi", "")
              );
              if (binFile) {
                const abi = fs.readFileSync(
                  path.join(__dirname, abiFile),
                  "utf8"
                );
                const bin = fs.readFileSync(
                  path.join(__dirname, binFile),
                  "utf8"
                );
                // Clean up the files
                fs.unlinkSync(path.join(__dirname, abiFile));
                fs.unlinkSync(path.join(__dirname, binFile));
                return {
                  contract: abiFile.replace("_sol_", "").replace(".abi", ""),
                  abi: JSON.parse(abi),
                  bin,
                };
              }
            })
            .filter(Boolean);

          callback(JSON.stringify(output));
        } else {
          callback(stdout);
        }
      }
    }
  );
};

app.post("/api/compile", (req, res) => {
  const { language, code } = req.body;

  let ext;
  switch (language) {
    case "solidity":
      ext = "sol";
      break;
    case "rust":
      ext = "rs";
      break;
    case "motoko":
      ext = "mo";
      break;
    default:
      res.status(400).json({ error: "Unsupported language" });
      return;
  }

  compileCode(ext, code, (output) => {
    res.json({ output });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
