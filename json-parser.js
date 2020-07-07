var json_body=null;
var target="https://stem2shtem.github.io/json-example.json";
var desc_tag = "desc";
var opts_tag = "opts";

function load_question_body(uid){
	if(json_body==null){
		return fetch(target).then(response=>response.json()).then(body=>body[0]).then(function(data){if(json_body==null){json_body=data;}return data;});
	}else{
		return Promise.resolve(json_body);
	}	
}

function get_question_desc(uid){
	return load_question_body(uid).then(d=>d[desc_tag]);
}

function get_question_opts(uid){
	return load_question_body(uid).then(d=>d[opts_tag]);
}