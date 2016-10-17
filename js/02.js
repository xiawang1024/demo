// window.onload=function(){
// 	var  p1=document.getElementById('link');
// 	p1.onclick=function(){
// 		alert("hello");
// 	}
// }
window.onload=function(){
	// var handler=function(event){
	// 	var e=event||window.event;
	// 	alert(event.type+"  "+event.target.nodeName+event.eventPhase);
	// }
	// var EventUtil={
	// 	addHandler:function(element,type,handler){
	// 		if(element.addEventListener){
	// 			element.addEventListener(type,handler,false);
	// 		}else if(element.attachEvent){
	// 			element.attachEvent("on"+type,handler);
	// 		}else {
	// 			element["on"+type]=handler;
	// 		}
	// 	},
	// 	removeHandler:function(element,type,handler){
	// 		if(element.removeEventListener){
	// 			element.removeEventListener(type,handler,false);
	// 		}else if(element.detachEvent){
	// 			element.detachEvent("on"+type,handler);
	// 		}else {
	// 			element["on"+type]=null;
	// 		}
	// 	}
	// }
	// var p=document.getElementById("link");
	// EventUtil.addHandler(p,"click",handler,false);
	var p=document.getElementById('link');
	// p.onclick=function(event){
	// 	alert(this===event.target);
	// 	event.stopPropagation();
	// }
	var handler=function(event){
		alert(event.srcElement);
	}
	p.attachEvent("onclick",handler);
}