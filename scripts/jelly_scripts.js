var SAMPLE_JELLYCONTAINER = [
"<?xml version=\"1.0\" encoding=\"utf-8\" ?>",
"<j:jelly trim=\"false\" xmlns:j=\"jelly:core\" xmlns:g=\"glide\" xmlns:j2=\"null\" xmlns:g2=\"null\">",
"",
"</j:jelly>"
].join("\n");


var SAMPLE_GEVALUATE = [
"<!-- jvar_gr becomes gr-->",
"<g:evaluate var=\"jvar_gr\" object=\"true\">",
"	var gr = new GlideRecord(\"incident\");",
"	gr.addQuery(\"active\", true);",
"	gr.query();",
"	gr;",
"</g:evaluate>",
"",
"",
"<g:evaluate var=\"jvar_gr\" object=\"true\" expression=\"",
"  var gr = new GlideRecord('incident');",
"  gr.addQuery('active', 'true');",
"  gr.query();",
"  gr; // this is the variable put into the variable jvar_gr\" />"
].join("\n");

var SAMPLE_JIF = [
"<j:if test=\"${jvar_gr.next()}\">",
"	We found ${jvar_gr.getRowCount()} active incidents.",
"</j:if>"
].join("\n");


var SAMPLE_JWHILE = [
"<j:while test=\"${jvar_gr.next()}\">",
"	<a href=\"incident.do?sys_id=${jvar_gr.getValue('sys_id')}\">${jvar_gr.getValue('number')}</a><br/>",
"</j:while>"
].join("\n");


var SAMPLE_JSET = [
"<j:set var=\"jvar_incident_number\" value=\"${jvar_gr.getValue('number')}\"/>",
"",
"<g:set_if var=\"jvar_ticket_count\" test=\"${jvar_gr.getRowCount() == 0}\" true=\"${jvar_gr.getRowCount()}\" false=\"None\" />"
].join("\n");

var SAMPLE_JCHOOSE = [
"<j:choose>",
"	<j:when test=\"${jvar_gr.getRowCount() ${AMP}lt; 1}\">We found multiple records!</j:when>",
"	<j:when test=\"${jvar_gr.next()}\">We found record ${jvar_gr.getValue('number')}</j:when>",
"	<j:otherwise>Sorry, we could not find the record you specified.</j:otherwise>",
"</j:choose>"
].join("\n");

var SAMPLE_GMESSAGES = [
"<g:messages>",
"  Yes",
"  No",
"  Cancel",
"</g:messages>"
].join("\n");


var SAMPLE_GBREAKPOINT = [
"<g:breakpoint />",
"<g:breakpoint var=\"sysparm_view\"/>"
].join("\n");


var SAMPLE_GNOESCAPE = [
"<g:no_escape>",
"	${jvar_raw_html_data}",
"</g:no_escape>"
].join("\n");

var SAMPLE_GMACROINVOKE = [
"<!-- Will invoke the contents of the UI macro named \"sample_macro\", which will have the variable jvar_message available within it-->",
"<g:macro_invoke macro=\"sample_macro\" message=\"This is a sample macro variable.\" />",
"",
"<!-- Will invoke the contents of the UI macro named \"sample_macro\", which will have the variable jvar_message available within it-->",
"<g:sample_macro message=\"This is a sample macro variable.\" />"
].join("\n");


var SAMPLE_GEXTENSIONS = [
"<script>",
"if (confirm(\"$[gs.getMessage('home.delete.confirm') ]\"))",
"   ...",
"</script>",
"",
"<input type=\"hidden\" id=\"${jvar_name}\" name=\"${jvar_name}\" value=\"${jvar_value}\" class=\"${jvar_class}\" />",
"",
"<j:if test=\"${jvar_something}\">...do something...</j:if>",
"<j:if test=\"${!jvar_something}\">...do something...</j:if>",
"<j:if test=\"${empty(jvar_something)}\">...do something...</j:if>",
"",
"",
"<g2:set_if var=\"jvar_style\" test=\"$[gs.getPreference('table.compact') != 'false']\" ",
"   true=\"margin-top:0px; margin-bottom:0px;\" ",
"   false=\"margin-top:2px; margin-bottom:2px;\" />",
"",
"<g:insert template=\"get_target_form_function.xml\" />",
"",
"<g:inline template=\"element_default.xml\" />"
].join("\n");







