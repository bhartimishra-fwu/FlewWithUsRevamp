import "dotenv/config";
import moduleAlias from "module-alias";
if (process.env.BUILD_ENV === "production") {
    moduleAlias();
}
import App from "@App";
import validateEnv from "@Utils/validateEnv";
validateEnv();
const app = new App();
app.listen();