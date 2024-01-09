const swc = require("@swc/core");
const fs = require("fs");
const arg = process.argv

 
const config = arg[2];
const file_path = arg[3];
const code = fs.readFileSync(file_path, "utf-8");
