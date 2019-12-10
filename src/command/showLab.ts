import * as vscode from 'vscode';
import * as path from 'path';
import * as math from 'mathjs';
import {lab_dic} from "../contents/lab_dic";
import { fstat, readFile } from 'fs';

export class ShowLab{
    public readonly id = 'extension.showLab';

    public current_panel: vscode.WebviewPanel | undefined;

    public constructor(){
        this.current_panel = undefined;
    }

    public execute = (context: vscode.ExtensionContext) => {
        const columnToShowIn = vscode.window.activeTextEditor ? 
        vscode.window.activeTextEditor.viewColumn: undefined;
		let panel: vscode.WebviewPanel;
		if (this.current_panel) {
			// If we already have a panel, show it in the target column
            this.current_panel.reveal(columnToShowIn);
            panel = this.current_panel;
		} 
		else {
			// Otherwise, create a new panel
			this.current_panel = vscode.window.createWebviewPanel(
				'numpyLab',
				'Numpy Lab',
				vscode.ViewColumn.Two,
				{
                    enableScripts: true,
                    localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath))]
                }
			);
            panel = this.current_panel;
            
			this.current_panel.onDidDispose(
				() => {
					  this.current_panel = undefined;
				},
                null,
                context.subscriptions
			);
        }

        panel.webview.html = getWebviewContent();

        panel.webview.onDidReceiveMessage(
            message => {
              console.log(message);
              switch (message.command) {
                case 'dot':
                  panel.webview.html = getWebviewContent2("dot");
                  return;
                case 'sum':
                  panel.webview.html = getWebviewContent2("sum");
                  return;
              }
            },
            undefined,
            context.subscriptions
          );
    }
}

function getWebviewContent() {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Numpy Lab</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/5.0.0/math.js" type="text/javascript"></script>
      <script>const vscode = acquireVsCodeApi();</script>
  </head>
  <body>
    Function Name:   
    <input type="text" id="input"></input>
    <button onclick="getinput()">Start</button>
      <script>
          function getinput(){
            const value = document.getElementById('input').value;
            vscode.postMessage({
                command: value
            });
          }
      </script>
  </body>

  </html>`;
  }

  function getWebviewContent2(key: keyof typeof lab_dic) {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Numpy Lab</title>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/5.0.0/math.js" type="text/javascript"></script>
      <script>const vscode = acquireVsCodeApi();</script>
  </head>
  <body>
    Function Name:   
    <input type="text" id="input"></input>
    <button onclick="getinput()">Start</button>
      <script>
          function getinput(){
            const value = document.getElementById('input').value;
            vscode.postMessage({
                command: value
            });
          }
      </script>
  </body>
  ${lab_dic[key]}
  </html>`;
  }

  