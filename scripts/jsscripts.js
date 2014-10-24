

/*
Service Now
*/

var SAMPLE_GS = [
"//GENERAL",
"gs.addInfoMessage('the message');",
"gs.setRedirect('url.com');",
"gs.getProperty('leighton.shared.domain.id');",
"",
"//USERS",
"gs.getUserDisplayName();",
"gs.getUserID();",
"gs.getUserName();",
"gs.hasRole('admin');",
"gs.getUser().isMemberOf('groupName');",
"gs.getUser().getCompanyID();",
"gs.getUser().getDomainID();"
].join("\n");

var SAMPLE_GR = [
"// QUERY",
"gr.addEncodedQuery('priority=1^ORpriority=2');",
"gr.addNotNullQuery('short_description'); //addNullQuery",
"",
"// ADDQUERY",
"gr.addQuery('priority', '1');",
"gr.addQuery('sys_created_on', '>', '2010-01-19 04:05:00');",
"gr.addQuery('number','IN','INC00001,INC00002');",
"",
"// CURRENT",
"current.getValue('number');",
"current.setValue('priority', 1); //g_form",
"current.u_time_to_assign.setDisplayValue('3 04:30:14');",
"current.setWorkflow(false);",
"current.update();",
"current.insert(); //gr.initialise(); gr.insert();",
"current.risk.changes();"
].join("\n");

var SAMPLE_CURRENT = [
"// CURRENT",
"current.getValue('number'); //previous",
"current.setValue('priority', 1); //g_form",
"current.u_time_to_assign.setDisplayValue('3 04:30:14');",
"current.setWorkflow(false);",
"current.update();",
"current.insert(); //gr.initialise(); gr.insert();",
"current.risk.changes();"
].join("\n");

