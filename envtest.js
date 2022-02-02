import config from "config";
import dotenv from "dotenv";

console.log(process.env.NODE_ENV);
console.log(process.env.NODE_CONFIG_ENV);

if (config.get("jwtPrivateKey")) {
  console.log(process.env[config.get("jwtPrivateKey")]);
} else {
  dotenv.config();
  console.log(process.env["PrivateKey"]);
}

console.log(config.get("port"));
//console.log(process.env);
