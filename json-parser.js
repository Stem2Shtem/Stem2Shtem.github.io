var json_body=null;
var target="https://stem2shtem.github.io/json-example.json";
var desc_tag = "desc";
var opts_tag = "opt";

const zip=(a,b)=>a.map((q,i)=>[q,b[i]]);

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

function get_question_opts_labels(uid){
	return get_question_opts(uid).then(k=>Object.keys(k));
}

function get_question_opts_targets(uid){
	return get_question_opts(uid).then(v=>Object.values(v));
}