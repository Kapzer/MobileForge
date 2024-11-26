import inquirer from "inquirer";
import * as path from "path";
import * as fs from "fs";

/**
 * Prompts the user for Expo app details.
 * @returns {Promise<{ appName: string; appPath: string }>} The app name and path.
 */

export async function promptAppDetails(): Promise<{
  appName: string;
  appPath: string;
}> {
  return inquirer.prompt([
    {
      type: "input",
      name: "appName",
      message: "What is the name of your new Expo app?",
      validate: (input) => (input.trim() ? true : "App name cannot be empty."),
    },
    {
      type: "input",
      name: "appPath",
      message:
        "Where do you want to create your new Expo app? (Provide full path)",
      default: path.dirname(process.cwd()),
      validate: (input) => {
        const resolvedPath = path.resolve(input.trim());
        return fs.existsSync(resolvedPath)
          ? true
          : "Provided path does not exist.";
      },
    },
  ]);
}
