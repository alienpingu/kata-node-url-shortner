const Database = require("./models/database");

let db = new Database();

console.log(db.push("google.com/abc/bolo?env=develop"));
let short1 = db.push("fb.com/p/magnus-carlsen");
console.log(db.push("fb.com/p/magnus-carlsen"));
console.log(db.open(short1));

console.log(db.print());


