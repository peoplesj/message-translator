import { Manifest } from "deno-slack-sdk/mod.ts";
import GreetingWorkflow from "./workflows/greeting_workflow.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "Message Translator",
  description: "Translate a message into your language of choice",
  icon: "assets/default_new_app_icon.png",
  workflows: [GreetingWorkflow],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
