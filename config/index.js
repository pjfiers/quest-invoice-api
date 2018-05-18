
let fs = require("fs");
let filecontent = fs.readFileSync("./config/api.json");
let api = JSON.parse(filecontent)

export default api