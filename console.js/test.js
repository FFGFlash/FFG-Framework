const Console = require("./index.js");
con = new Console();

con.log("Hello World,");
con.warn("Warning: Error Up Ahead...");
con.error("We Warned You!");

con.write("This is new...").nl().write("Very New!").warn();

con.log(JSON.stringify(con.logs, null, 2));
