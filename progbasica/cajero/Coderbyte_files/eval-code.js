function __evalCode(codeObject,challengeObject,callback){if(!codeObject||!codeObject.code){console.log('error with code eval, (code) key needs to exist in code object');return}
if(!challengeObject||!challengeObject.language||!challengeObject.parameter_type||!challengeObject.editor_type){console.log('error with code eval, (language, parameter_type, editor_type) keys needs to exist in challenge object');return}
var executeFile=challengeObject.execute_file?challengeObject.execute_file:'executeCodeTPS.php';var code=codeObject.code;var language=challengeObject.language;var file_mapping=window.__MAIN_LANGUAGE_LIST[language].file_mapping;var input1=(codeObject.inputs&&codeObject.inputs.length>0)?codeObject.inputs[0]:undefined;var input2=(codeObject.inputs&&codeObject.inputs.length>1)?codeObject.inputs[1]:undefined;var username=codeObject.username?codeObject.username:null;if(challengeObject.parameter_type==='str'){if(input1[0]!=='"'&&input1[input1.length-1]!=='"'){input1='"'+input1+'"'}}
if(input1&&challengeObject.editor_type==='algorithm'&&challengeObject.tier!=='7'){code=window['stdin_mod_'+language](input1,input2,code)}
var params={code:code,language:language.toLowerCase(),file_mapping:file_mapping,username:username,};$.post('/backend/requests/coderunner/'+executeFile,params,function(data){callback(data)})}
function __evalSQLCode(codeObject,challengeObject,callback){if(!codeObject||!codeObject.code){console.log('error with code eval, (code) key needs to exist in code object');return}
if(!challengeObject||!challengeObject.challenge_title||!challengeObject.table_name){console.log('error with code eval, (challenge_title, table_name) keys needs to exist in challenge object');return}
var params={code:codeObject.code,challenge_title:challengeObject.challenge_title,table_name:challengeObject.table_name,};$.post('/backend/requests/coderunner/executeSQL.php',params,function(data){callback(data)})}
function __evalFrontendCode(codeObject,challengeObject,callback){if(!codeObject||!codeObject.code){console.log('error with code eval, (code) key needs to exist in code object');return}
var parameters;var baseLanguage;if(challengeObject.challenge_title.indexOf('React')!==-1)baseLanguage='React';if(challengeObject.challenge_title.indexOf('Vue')!==-1)baseLanguage='Vue';if(challengeObject.challenge_title.indexOf('Angular')!==-1)baseLanguage='Angular';if(challengeObject.challenge_title.indexOf('AngularJS')!==-1)baseLanguage='AngularJS';if(baseLanguage){parameters=window.__DEFAULT_CODE_FRONTEND_BASE[baseLanguage](codeObject.code)}else{console.log('error running front-end code',challengeObject);return}
fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(parameters)}).then(x=>x.json()).then(data=>{callback(data)})}