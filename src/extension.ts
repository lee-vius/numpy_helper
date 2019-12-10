// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import {HelloworldCommand} from "./command/helloword";
import {ShowPanel} from "./command/showPanel";
import {GetHover} from "./command/showHover";
import {ShowLab} from "./command/showLab";
import { Hook } from 'mocha';

const cats = {
	'Coding Cat': 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
	'Compiling Cat': 'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif'
  };

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const helloword = new HelloworldCommand();
	context.subscriptions.push(vscode.commands.registerCommand(helloword.id, () => helloword.execute()));
	
	const showPanel = new ShowPanel();
	console.log(showPanel.current_panel);
	context.subscriptions.push(vscode.commands.registerCommand(showPanel.id, () => showPanel.execute(context)));

	const showLab = new ShowLab();
	context.subscriptions.push(vscode.commands.registerCommand(showLab.id, () => showLab.execute(context)));
	
	GetHover(context);
}

// this method is called when your extension is deactivated
export function deactivate() {}
