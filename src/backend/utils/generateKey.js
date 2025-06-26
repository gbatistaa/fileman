import crypto from "crypto";
import fs from "fs";

const secret = crypto.randomBytes(64).toString("base64");
const envPath = "../.env";
const varName = "JWT_SECRET";

let envContent = "";

if (fs.existsSync(envPath)) {
  envContent = fs.readFileSync(envPath, "uft8");
  envContent = envContent.replace(new RegExp(`^${varName}=.*`, "m"), "");
  envContent = envContent.trim() + "\n";
}

envContent += `${varName}=${secret}\n`;

fs.writeFileSync(envPath, envContent, { encoding: "utf8" });
console.log(`JWT secret written to ${envPath}`);
