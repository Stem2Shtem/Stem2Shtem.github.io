var json_body=null;
var target="https://stem2shtem.github.io/test-questions.json";
var desc_tag = "desc";
var opts_tag = "opts";
var next_tag = "next";

const zip=(a,b)=>a.map((q,i)=>[q,b[i]]);

function set_target(file){
	target=file;
}

function load_question_body(uid){
	if(json_body==null){
		return fetch(target).then(re=>re.json()).then(function(dat){if(json_body==null){json_body=dat;}return dat[uid];});
	}else{
		return Promise.resolve(json_body[uid]);
	}	
}

function get_question_desc(uid){
	return load_question_body(uid).then(d=>d[desc_tag]);
}

function get_question_opts(uid){
	return load_question_body(uid).then(d=>d[opts_tag]);
}

function get_next_question_uid(uid){
	return load_question_body(uid).then(d=>d[next_tag]);
}
