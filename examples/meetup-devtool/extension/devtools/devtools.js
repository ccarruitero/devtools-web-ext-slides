browser.devtools.panels.create(
  "meetup-devtool",
  "/icons/icon-64.png",
  "/devtools/panel/panel.html"
);
browser.devtools.panels.elements.createSidebarPane("my sidebarpanel");
browser.devtools.panels.elements.onSelectionChanged.addListener(() => {
	browser.devtools.inspectedWindow.eval("$0.textContent")
	.then((result) => {
		console.log(result);
		console.log(result[0]);
	});
});
