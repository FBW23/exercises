// Let's print all the elements that are parents of the element `cite` to the console.

// We want to print them as a string in the following format:

// ```
// html > body > main > section > blockquote > footer > cite
// ```

// function printDom(node, prefix){
//     console.log(prefix+node.nodeName);
//     for(let i=0; i<node.childNodes.length; i++){
//         printDom(node.childNodes[i], prefix+ '\t');
//     }
// }
// console.log(printDom);

// function printNode(node) {
//     document.writeln("Node name=" + node.nodeName + ", value=" + node.nodeValue + ", type=" + node.nodeType + "<br>");
//     if (node.hasChildNodes()) {
//       var childs = node.childNodes;
//       for (var i = 0; i < childs.length; i++) {
//         printNode(childs[i]);
//       }
//     }
//   }
//   console.log(printNode);
// let a = document.querySelector('cite');
// console.log(a);
// for (let i=0; i.parentElement; i++) {
//     a=a.parentElement;
//     console.log(a);
// }
