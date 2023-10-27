const Database = require("./models/database");
// Create a new DB
let db = new Database();
// Generate a short_path from long_url
let short_path = db.push("google.com/abc/bolo?env=develop");
// Try to generate the same link again (it doesn't do it)
db.push("google.com/abc/bolo?env=develop");
// Generate another Link in DB
db.push("facebook.com/profile/magnus-carlsen");
// Open a long_url from a short path
db.open(short_path);
// Get statics about all link saved
console.log(db.print());