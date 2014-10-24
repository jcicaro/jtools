var SAMPLE_IF = [
"if (time < 10) {",
"    greeting = \"Good morning\";",
"} else if (time<20) {",
"    greeting = \"Good day\";",
"} else {",
"    greeting = \"Good evening\";",
"}"
].join("\n");

var SAMPLE_FOR = [
"for (i = 0; i < cars.length; i++) {",
"    text += cars[i] + \"<br>\";",
"}"
].join("\n");

var SAMPLE_FUNCTION = [
"function myFunction() {",
"    var text = document.getElementById(\"demo\");",
"	text.innerHTML = \"My Function\";",
"}"
].join("\n");

/*
Service Now
*/

var SAMPLE_GLIDERECORD = [
"var target = new GlideRecord('incident');",
"target.addQuery('category', 'hardware').addOrCondition('category', 'software');",
"target.addNullQuery('short_description');",
"target.orderBy('number'); //orderByDesc",
"target.setLimit(10);",
"target.query();",
"while (target.next()) {   ",
"    target.state = 1;",
"    target.update();",
"}"
].join("\n");