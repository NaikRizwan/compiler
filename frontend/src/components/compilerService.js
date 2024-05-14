import axios from "axios";

const compileCode = async (language, code) => {
  const response = await axios.post("http://localhost:5000/api/compile", {
    language,
    code,
  });
  return response.data;
};

export default compileCode;
