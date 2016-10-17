
	var eventUtil={
		//添加句柄
		addHandler:function(element,type,handler){
			if(element.addEventListener){
				element.addEventListener(type,handler,false);
			}else if(element.attachEvent){
				element.attachEvent("on"+type,handler);
			}else{
				element['on'+type]=handler;
			}
		},
		//删除句柄
		removeHandler:function(element,type,handler){
			if(element.removeEventListener){
				element.removeEventListener(type,handler,false);
			}else if(element.detachEvent){
				element.detachEvent("on"+type,handler);
			}else{
				element['on'+type]=null;
			}
		},
		//获得事件对象
		getEvent:function(event){
			return event?event:window.event;
		},
		//获得事件目标
		getElement:function(event){
			return event.target||event.srcElement;
		},
		//获得事件类型
		getType:function(event){
			return event.type;
		},
		//跨浏览器取的字符编码
		getCharCode:function(event){
			if(typeof event.charCode=="number"){
				return event.charCode;
			}else{
				return event.keyCode;
			}
		},
		//取的选择的文本
		getSelectionText:function(ele){
			if(typeof ele.selectionStart=="number"){
			return ele.value.substring(ele.selectionStart,ele.selectionEnd);//IE8及以下不支持
			}else{
				return document.selection.createRange().text;
			}
		},
		//取的剪贴板text
		getClipboardText:function(event){
			var clipboardText=event.clipboardData||window.clipboardData;
			return clipboardText.getData("text");
		},
		//设置剪贴板text
		setClipboardText:function(event,value){
			if(event.clipboardData){
				return event.clipboardData.setData("text/palin",value);
			}else if(window.clipboardData){
				return window.clipboardData.setData("text",value);
			}
		},
		//阻止事件默认行为
		preventDefault:function(event){
			if(event.preventDefault){
				event.preventDefault();
			}else{
				event.returnValue=false;
			}
		},
		//阻止事件冒泡
		stopPropagation:function(event){
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble=true;
			}
		}
	}