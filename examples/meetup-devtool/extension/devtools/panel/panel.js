const scriptToAttach = "$0.style.backgroundColor = 'lightblue'";
document.querySelector("#panel-btn").addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(scriptToAttach);
});
