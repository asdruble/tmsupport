function SortByID(x,y) {
	return x.id - y.id; 
}
var cdlist = [];
var list = [];
document.querySelectorAll('[data-zippy-title="Custom Dimensions"] input.gtm-text-input').forEach(function(el){
	list.push(el.value);
});
for(var i=0; i<list.length; i++){
	cdlist.push({
		'id':list[i],
		'text':list[++i]
	})
}
cdlist.sort(SortByID);
list=[]
for(var i=0; i<cdlist.length; i++){
	list.push(cdlist[i].id);
	list.push(cdlist[i].text);
}
var i=0;
document.querySelectorAll('[data-zippy-title="Custom Dimensions"] input.gtm-text-input').forEach(function(el){
	el.value = list[i++];
	if ("createEvent" in document) {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);
    el.dispatchEvent(evt);
}
else el.fireEvent("onchange");
});

console.log(cdlist);
