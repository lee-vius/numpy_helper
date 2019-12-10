import * as vscode from 'vscode';
import * as path from 'path';

class ShowHover implements vscode.HoverProvider{
    public readonly language_id = 'python';

    public constructor(){

    }

    public provideHover(document: any, position: any, token: any) {
        const fileName    = document.fileName;
        const workDir     = path.dirname(fileName);
	    const word        = document.getText(document.getWordRangeAtPosition(position));
	    console.log('should work');
	    return new vscode.Hover(`* **Test**`);
    }
}

export function GetHover(context: vscode.ExtensionContext){
    vscode.languages.registerHoverProvider('python', new ShowHover());
}