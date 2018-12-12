
let fs = require("fs");
let resolve = require("path").resolve;
let filecontent = fs.readFileSync(resolve("./config/api.json"));
let api = JSON.parse(filecontent)

export default api
