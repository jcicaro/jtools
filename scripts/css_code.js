var SAMPLE_MARGIN = [
"margin: auto | 100px;",
"margin-top | margin-right | margin-bottom | margin-left",
"margin-before | margin-after | margin-start | margin-end"
].join("\n");

var SAMPLE_BORDER = [
"border: auto | 100px;",
"",
"border-top | border-right | border-bottom | border-left",
"border-before | border-after | border-start | border-end",
"",
"border-width | border-style | border-color",
"border-top-width | border-top-style | border-top-color",
"",
"border-collapse: collapse | separate ;",
"border-spacing: <length> ;",
"border-radius: <length> | % ;"
].join("\n");

var SAMPLE_PSEUDO = [
"PSEUDO-CLASS - STATUS",
":link | :visited | :hover | :active | :disabled | :enabled | :required | :optional | :valid | :invalid ",
":focus | :checked ",
"",
"PSEUDO-CLASS - ORDER",
":first-child | :last-child | :only-child | :nth-child(n) | :nth-last-child(n) | :nth-child(odd) | :nth-child(even) | :first-of-type | :last-of-type | :only-of-type | :nth-of-type(n) | :nth-last-of-type(n) | :root"
].join("\n");

var SAMPLE_BACKGROUND = [
"COMMON",
"background: <below*> ;",
"background-color: <color>",
"background-image: <url> | none ;",
"background-position: top left | top center | top right | center * | bottom * | x-pos y-pos ;",
"background-repeat: repeat | repeat-x | repeat-y | space | round | no-repeat ;",
"",
"background-clip: border-box | padding-box | content-box ;",
"background-origin: border-box | padding-box | content-box ;",
"background-size: <length> | <%> | auto | cover | contain ;",
"background-break: bounding-box | each-box | continuous ;",
"background-attachment: scroll | fixed | local ;"
].join("\n");

var SAMPLE_TEXT = [
"text-align: start | end | left | right | center | justify | <string> ;",
"",
"text-align-last: start | end | left | right | center | justify ;",
"text-justify: inter-word | inter-ideograph | inter-cluster | distribute | kashida | tibetan | auto ;",
"text-indent: <length> | <%> hanging?",
"text-emphasis: [ [ accent | dot | circle | disc] [ before | after ]? ] | none ;",
"text-transform: capitalize | uppercase | lowercase | none ;",
"text-wrap: unrestricted | none | suppress | normal ;",
"text-decoration: none | underline | overline | line-through | blink ;",
"text-outline: [ <length> <length>? <color> ] | none ;",
"text-shadow: [ <length> <length> <length>? <color>? ] | none ;",
"",
"RELATED:",
"color: <color> | inherit ;",
"letter-spacing: <length> | <%> | normal ;",
"word-spacing: <length> | <%> | normal ;",
"opacity: <alphavalue> | inherit ;",
"word-wrap: break-word | normal ;",
"word-break: keep-all | loose | break-strict | break-all | normal ;",
"punctuation-trim: [start || end || adjacent] | none ;",
"white-space: pre | nowrap | pre-wrap | pre-line | normal ;",
"white-space-collapse: preserve | collapse | pre-serve-breaks | discard ;"
].join("\n");

var SAMPLE_FONT = [
"font: <below*> | <system-fonts> ;",
"",
"font-family: [<font-name>, <generic-font-families>] | inherit ;",
"font-size: <length> | <%> | smaller | larger | inherit | xx-small | x-small | small | medium | large | x-large | xx-large ;",
"font-weight: normal | bold | bolder | lighter | inherit | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 ;",
"font-style: normal | italic | oblique | inherit ;",
"font-variant: normal | small-caps | inherit ;"
].join("\n");

var SAMPLE_DISPLAY = [
"// COMMON",
"display: block | inline | inline-block | list-item | none ;",
"",
"display: run-in | compact | table | inline-table | table-header-group | table-footer-group | table-row-group | table-column-group | table-caption | table-cell | table-row | table-column ;"
].join("\n");

var SAMPLE_ATTRIBUTES = [
"COMMON",
"visibility: visible | hidden | collapse ;",
"height: <length> | <%> | auto ;",
"width: <length> | <%> | auto ;",
"float: left | right | none | <page-floats> ;",
"clear: left | right | both | none ;",
"",
"max-height: <length> | <%> | none ;",
"max-width: <length> | <%> | none ;",
"min-height: <length> | <%> | inherit ;",
"min-width: <length> | <%> | inherit ;",
"logical-height: <length> | <%> | auto ; ",
"logical-width: <length> | <%> | auto ;",
"",
"overflow: visible | hidden | scroll | auto | no-display | no-content ;",
"overflow-x: visible | hidden | scroll | auto | no-display | no-content ;",
"overflow-y: visible | hidden | scroll | auto | no-display | no-content ;",
"overflow-style: marquee-line | marquee-block | auto ;"
].join("\n");

var SAMPLE_POSITION = [
"position: relative | absolute | fixed | static ;",
"top: <length> | <%> | auto ;",
"right: <length> | <%> | auto ;",
"bottom: <length> | <%> | auto ;",
"left: <length> | <%> | auto ;",
"z-index: <num> ;"
].join("\n");


var SAMPLE_CSSCOMMON = [
"a:link | a:visited | a:hover | a:active | a[target=\"_blank\"] {}",
"[class|=\"top\"] [attribute~=\"value\"]|[attribute~=\"value\"]|[attribute|=\"value\"]|[attribute^=\"value\"][attribute$=\"value\"]",
"[attribute*=\"value\"] ",
"",
"background: url('img_navsprites.gif') -47px 0;",
"background-color: red; [rgb(204, 102, 0)][#cc6600][#c60]",
"background-image: url(images/background.gif);",
"background-repeat: no-repeat; [no-repeat|repeat-x|repeat-y|inherit]",
"background-attachment: fixed; [scroll|fixed|local|initial|inherit]",
"background-position: top left; [top|left|right|bottom|center]",
"",
"border: 1px solid gray;",
"border-color: black;",
"border-bottom: 1px solid black;",
"border-top-color: black;",
"",
"border-width: thin; [thin|medium|thick][1px]",
"border-style: solid; [none|solid|dashed|dotted|double|groove|ridge|inset|outset]",
"",
"border-collapse: collapse; ",
"",
"color: maroon;",
"",
"clear: right; [left|right|both]",
"",
"display: none; [none|inline|block]",
"width: 60px;",
"",
"float: right; [left|right]",
"width: 280px;",
"height: 50px;",
"",
"font-family: Verdana, Geneva, Arial, sans-serif; [\"Times New Roman\"]",
"font-size: 14px; [2.5em][100%][xx-small|x-small|small|medium|large|x-large|xx-large]",
"font-weight: bold; [lighter|normal|bold|bolder]",
"font-style: italic; [normal|italic|oblique|]",
"",
"height: 50px;",
"[max-height|min-height]",
"",
"input:focus {}",
"",
"line-height: 1.6em;",
"",
"list-style: square url(\"sqpurple.gif\");",
"list-style-type: circle; [circle|square|upper-roman|lower-alpha]",
"list-style-image: url('sqpurple.gif');",
"",
"margin: 30px; [0px 330px 10px 10px]",
"margin-right: 250px; [auto]",
"",
"overflow: auto; [auto|hidden|scroll|visible|inherit]",
"",
"[p:first-child|p:lang(it)]",
"[p::first-letter|p::first-line|p::before|p::after]",
"",
"padding: 25px;",
"padding-left: 80px;",
"",
"position: absolute; [static|absolute|fixed|relative]",
"top: 100px; [-20px]",
"right: 200px; [-20px]",
"z-index: -1;",
"",
"text-align: right; [center|right|justify]",
"text-decoration: underline; [none|underline|overline|line-through|blink]",
"text-transform: uppercase; [uppercase|lowercase|capitalize]",
"text-indent: 50px;",
"",
"width: 280px;",
"[max-width|min-width]",
"",
"vertical-align: bottom; [top|bottom|middle]",
"",
"visibility: hidden;"
].join("\n");