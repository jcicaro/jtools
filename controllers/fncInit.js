/*
 * CodeMirror Initialisation
 */
var editorST = CodeMirror.fromTextArea(document.getElementById("result"), {
	lineNumbers : true,
	mode : "text/javascript",
	lineWrapping : true,
	indentUnit : 4,
	theme: 'twilight',
	matchBrackets : true
}); //theme: 'twilight',
editorST.setSize("100%", "100%");

var editorMT = CodeMirror.fromTextArea(document.getElementById("textInput"), {
	lineNumbers : true,
	mode : "text/javascript",
	lineWrapping : true,
	indentUnit : 4,
	theme: 'twilight',
	matchBrackets : true
}); //theme: 'twilight',
editorMT.setSize("100%", "510");
editorMT.on('cursorActivity', function() { //'change'
	//addSampleCode();
	_toSecText();
});

function _toSecText() {
	//Input
	var cursor = editorMT.getCursor();
	var inp = editorMT.getLine(cursor.line);
	
	//Result
	var res = FNCAUTOCTRL.processLine(inp); //should return the text
	editorST.setValue(res);
}


/*
 * FNC Controller Initialisation Code
 */
window.onload = init;
function init() {

	var ptrow = document.getElementById("ptRow");
	ptrow.onclick = FNCBUTTONCTRL.parToRow;
	
	var findAllPar = document.getElementById("findAllPar");
	findAllPar.onclick = FNCBUTTONCTRL.findAllParentheses;
	
	var fncWoBrackets = document.getElementById("fncWoBrackets");
	fncWoBrackets.onclick = FNCBUTTONCTRL.addFNCWoBrackets;

	var addSimple = document.getElementById("addSimple");
	addSimple.onclick = FNCBUTTONCTRL.addSimpleInput;
	
	var addComplex = document.getElementById("addComplex");
	addComplex.onclick = FNCBUTTONCTRL.addComplexInput;
	
}