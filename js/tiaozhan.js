
window.onload=function(){
	var box=document.getElementById('divselect'),
	    title=box.getElementsByTagName('cite')[0],
	    menu=box.getElementsByTagName('ul')[0],
	    as=box.getElementsByTagName('a'),
        index=-1;
   
    // 点击三角时
    title.onclick=function(event){
      // 执行脚本
      var e=eventUtil.getEvent(event);
      menu.style.display="block";
      eventUtil.stopPropagation(e);
      document.onkeydown=keyDown;
    }  
    
   // 滑过滑过、离开、点击每个选项时
      // 执行脚本
    for(var i=0,l=as.length;i<l;i++){
    as[i].onmouseover=function(num){  //立即执行函数
          return function(event){       //闭包保存mouseover时的index
            index=num; 
          for(var j=0;j<as.length;j++){  //清空键盘事件保留的backgroundColor
            as[j].style.backgroundColor="#FFF";
          } 
          var e=eventUtil.getEvent(event);
          this.style.backgroundColor="#678";
        };
      }(i);
      as[i].onmouseout=function(){
        this.style.backgroundColor="#fff";
      }
      as[i].onclick=function(event){
        title.innerHTML=this.innerHTML;
      }
    }
      function keyDown(event){ 
        var e=eventUtil.getEvent(event);
        if(e.keyCode==40){
          index++;console.log(index);
          if(index>4){index=0;}
        }
        if(e.keyCode==38){
          index--;
          if(index<0){index=4;}
        }
        for(var i=0;i<as.length;i++){
            as[i].style.backgroundColor="#FFF";
          }
        as[index].style.backgroundColor="#678";
        if(e.keyCode==13){
           title.innerHTML=as[index].innerHTML;
           for(var i=0;i<as.length;i++){
            as[i].style.backgroundColor="#FFF";
          }
           menu.style.display="none";
           index=-1;
        }
      }
     // 点击页面空白处时
       // 执行脚本
    document.onclick=function(){
      menu.style.display="none";
    }
 }
