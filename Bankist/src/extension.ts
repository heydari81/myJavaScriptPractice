import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // ...existing code...

  vscode.window.registerTreeDataProvider('chatView', new ChatViewProvider());

  // ...existing code...
}

class ChatViewProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
  // ...existing code...

  getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(
    element?: vscode.TreeItem
  ): vscode.ProviderResult<vscode.TreeItem[]> {
    return [
      new vscode.TreeItem('Chat Item 1'),
      new vscode.TreeItem('Chat Item 2'),
    ];
  }
}
