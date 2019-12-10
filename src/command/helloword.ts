import * as vscode from 'vscode';

export class HelloworldCommand{
    public readonly id = 'extension.helloWorld';

    public constructor(){

    }

    public execute = () => {
        vscode.window.showInformationMessage('Hello World!');
    }
}