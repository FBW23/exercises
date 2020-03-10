function modifyText() {
    var t2 = document.querySelector("#t2");
    if (t2.firstChild.nodeValue === "three") {
      t2.firstChild.nodeValue = "two";
    } else {
      t2.firstChild.nodeValue = "three";
    }
  }
  // add event listener to table
  var el = document.querySelector("#outside");
  el.addEventListener("mouseleave", modifyText);
  console.log('added Event Listener');
  el.removeEventListener("mouseleave",modifyText);