import * as vscode from 'vscode';
import {my_dic} from "../contents/my_dic";

const cats = {
	'Coding Cat': 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
	'Compiling Cat': 'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif'
  };

export class ShowPanel{
    public readonly id = 'extension.showPanel';

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
				'catCoding',
				'Numpy Doc',
				vscode.ViewColumn.Two,
				{}
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
		vscode.window.onDidChangeTextEditorSelection(event => {
			// get the current position of cursor and the current word
			let curr_word: string | undefined = undefined;
			const editor = vscode.window.activeTextEditor;
			if (editor){
				// get the position of cursor
				const position = editor.selection.active;
				// get the word around the cursor
				curr_word = event.textEditor.document.getText(event.textEditor.document.getWordRangeAtPosition(position));
			}

			let filename: string = event.textEditor.document.fileName;
			let text: string = event.textEditor.document.getText();
			var re = /\n/gi;
			let text_ts: string = text.replace(re, "</br>");
			console.debug(text);
			console.debug(text_ts);

			if (curr_word){
				// judge whether the word is in the dictionary
				let key: string | undefined = undefined;
				for (let some in my_dic){
					console.log(some);
					if (some === curr_word){
						key = some;
					}
				}
				// case that find the doc
				if (key){
					console.log("find word!");
					var a = <keyof typeof my_dic>key;
					panel.webview.html = getWebviewContent(filename, a, "Coding Cat");
				}
				else{
					// if not found, do nothing
					console.log("not find word!");
					//panel.webview.html = getWebviewContent(filename, text_ts, "Coding Cat");
				}
			}
		});
		
        /*
		vscode.workspace.onDidChangeTextDocument(event => {
			// get the current position of cursor and the current word
			let curr_word: string | undefined = undefined;
			const editor = vscode.window.activeTextEditor;
			if (editor){
				// get the position of cursor
				const position = editor.selection.active;
				// get the word around the cursor
				curr_word = event.document.getText(event.document.getWordRangeAtPosition(position));
			}

			let filename: string = event.document.fileName;
			let text: string = event.document.getText();
			var re = /\n/gi;
			let text_ts: string = text.replace(re, "</br>");
			console.debug(text);
			console.debug(text_ts);
			
			if (curr_word){
				// judge whether the word is in the dictionary
				let key: string | undefined = undefined;
				for (let some in my_dic){
					console.log(some);
					if (some === curr_word){
						key = some;
					}
				}
				// case that find the doc
				if (key){
					console.log("find word!");
					var a = <keyof typeof my_dic>key;
					panel.webview.html = getWebviewContent(filename, a, "Compiling Cat");
				}
				else {
					// if not found, do nothing
					console.log("not find word!");
					//panel.webview.html = getWebviewContent(filename, text_ts, "Coding Cat");
				}
			}
			else{
				// if no current word, do nothing
				console.log('no curr_word!');
				//panel.webview.html = getWebviewContent(filename, text_ts, "Coding Cat");
			}
		});
		*/
    }
}

  function getWebviewContent(filename: string, key: keyof typeof my_dic, cat: keyof typeof cats) {
	return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Cat Coding</title>
  </head>
  <body>
	${my_dic[key]} </br>
	<!--<img src="${cats[cat]}" width="300"/>-->
  </body>
  </html>`;
  }