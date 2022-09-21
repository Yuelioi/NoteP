换行 const nl = String.fromCharCode(10)
倒引号 96


```yaml
日记模板
---
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: 
aliases: <% tp.file.title %>
mood: {{VALUE:😃,😡,😭,😁}}
weather: "<% tp.user.天氣_台北市() %>"
tags: [ daily ]
---
```


## Format

link : https: //github.com/chhoumann/quickadd/blob/master/docs/FormatSyntax.md

-   {{DATE:YYYY-MM-DD HH:mm:ss}}
-   {{VALUE:输入提示文字}} 弹出输入视窗
-   {{VALUE:选项,选项2,选项3}} 弹出选择清单
-   {{TEMPLATE:模板完整路径}} 使用指定的模板档
-   {MACRO: 巨集名 :: 输出的函数名}} 使用巨集

## Temple

```yaml

title: Admotion
<%*
let selection = window.getSelection();
​let choice = await tp.system.suggester(
  [ "✏️ note", "📘 abstract", "ℹ️ info", "🔥 tip", "✅ success", 
  "❓ question", "⚠️ warning", "❌ fail", "🪲 bug", "📋 example", 
  "✍️ quote", "💡 comment", "😝 LOL" ], 
  [ 0,1,2,3,4,5,6,7,8,9,10,11,12 ]
  );
​const admonitions = [ 
  ["ad-note", "重點"], ["ad-abstract", "摘要"], ["ad-info", "資訊"], ["ad-tip", "技巧"], ["ad-success", "完成"], 
  ["ad-question", "問題"], ["ad-warning", "警告"], ["ad-fail", "失敗"], ["ad-error", "錯誤"], ["ad-example", "範例"], 
  ["ad-quote", "引用"], ["ad-comment", "建議"], ["ad-LOL", "好笑"]
];

admonition = admonitions[choice][0];
title = admonitions[choice][1];

const nl = String.fromCharCode(10);

​choice = "```" + admonition + nl +
  //"collapse: on" + nl +
  "title: " + title + nl + selection + nl +
  "```";
%>
<% choice %>
```

JS 版, 但是得有前后`

```js quickadd
//const selection = window.getSelection();
const selection = this.quickAddApi.utility.getSelectedText();  // QuickAdd 0.4.6
const aTexts =   [ "✏️ note", "📘 abstract", "ℹ️ info", "🔥 tip", "✅ success", 
  "❓ question", "⚠️ warning", "❌ fail", "🪲 bug", "📋 example",
  "✍️ quote", "💡 comment", "😝 LOL" ];
const aValues = [ "0", "1", "2" , "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ];
let choice = await this.quickAddApi.suggester(aTexts, aValues);
//console.log("choice", choice);

const admonitions = [ 
  ["ad-note", "重點"], ["ad-abstract", "摘要"], ["ad-info", "資訊"], ["ad-tip", "技巧"], ["ad-success", "完成"], 
  ["ad-question", "問題"], ["ad-warning", "警告"], ["ad-fail", "失敗"], ["ad-error", "錯誤"], ["ad-example", "範例"], 
  ["ad-quote", "引用"], ["ad-comment", "建議"], ["ad-LOL", "好笑"]
];

admonition = admonitions[choice][0];
title = admonitions[choice][1];

// 在腳本裡，換行符號和倒引號不要在字串裡使用，改用String.fromCharCode()才不會出現解析錯誤
const nl = String.fromCharCode(10);
const backQuotes = String.fromCharCode(96) + String.fromCharCode(96) + String.fromCharCode(96);

result = backQuotes + admonition + nl +
  "title: " + title + nl + selection + nl + backQuotes;

return result;
```


## 脚本
```js quickadd
selection = window.getSelection();
selText = selection.toString()
console.log("selection", selText);
const activeFile = this.app.workspace.getActiveFile();
    if (!activeFile) {
        new Notice("No active file", 5000);
        return;
    }
console.log("active file=", activeFile);
new Notice("active file" + activeFile.name, 5000);
```


暗示的诞生


Macros

capture 可以有返回值  {{Macro..}}
普通的只执行


asdf