// window.onload=drag;
// function drag() {
//   var box=document.getElementById('box');
//   box.onmousedown=fnDown;
// }
// function fnDown(event){
//   var box=document.getElementById('box');
//   var w=event.clientX-box.offsetLeft,
//       h=event.clientY-box.offsetTop;
//   document.onmousemove=function(event){
//     var l=event.clientX-w,
//         t=event.clientY-h,
//         maxW=document.documentElement.clientWidth-box.offsetWidth,
//         maxH=document.documentElement.clientHeight-box.offsetHeight;
//         if(l<0){
//           l=0;
//         }else if(l>maxW){
//           l=maxW;
//         }
//         if (t<0) {
//           t=0;
//         }else if(t>maxH){
//           t=maxH;
//         }
//       box.style.left=l+"px";
//       box.style.top=t+"px";
//   }
//   document.onmouseup=function(){
//   document.onmousemove=null;
//   document.onmouseup=null;
  
// }
// }

// var classStr="class1 class2",
// tagStr="class1 class2 class3";

// function hasClass(tagStr,classStr){ 
// var arr=tagStr.className.split(/\s+/); //这个正则表达式是因为class可以有多个,判断是否包含 
// for (var i=0;i<arr.length;i++){ 
// if (arr[i]==classStr){ 
// return true ; 
// } 
// } 
// return false ; 
// } 
// hasClass(tagStr, classStr);
// window.onload=function(){
//   var box=document.getElementById('box'),
//       wrap=document.getElementById('wrap'),
//       box1=document.getElementById('box1');
//   eventUtil.addHandler(box,"mousedown",function(event){
//     var e=eventUtil.getEvent(event);
//     alert(e.clientX+","+e.clientY);
//     alert(e.pageX+","+e.pageY);
//     alert(e.screenX+","+e.screenY);
//   });
//   eventUtil.addHandler(wrap,"click",function(){
//     alert("我是body");
//   });
//   eventUtil.addHandler(box1,"click",function(){
//     alert("我是孩子");
//   })
// }
// window.onload=fn;
// function fn(){
//   var box=document.getElementById('box');
//   eventUtil.addHandler(box,"click",toBlue);
// }
// function toRed(event){
//   var e=eventUtil.getEvent(event),
//       box=document.getElementById('box');
//       box.className="red";
//       box.innerHTML="RED";
//   eventUtil.removeHandler(box,"click",toRed);
//   eventUtil.addHandler(box,"click",toBlue);
// }
// function toBlue(event){
//   var e=eventUtil.getEvent(event),
//       box=document.getElementById('box');
//       box.className="blue";
//       box.innerHTML="BLUE";
//   eventUtil.removeHandler(box,"click",toBlue);
//   eventUtil.addHandler(box,"click",toRed);
// }
// function largestOfFour(arr){
//   var result=[];
//   for(var i=0;i<arr.length;i++){
//     arr[i].sort();
//     result.push(arr[i][0]);
//   }
//   return result;
// }
// eventUtil.addHandler(window,"load",function(){
//   var fm=document.getElementById('form');
  // eventUtil.addHandler(fm,"submit",function(event){
  //   var e=eventUtil.getEvent(event);
  //   eventUtil.preventDefault(e);
  // });
  // var sub=document.getElementById("sub");
  // eventUtil.addHandler(sub,"click",function(event){
  //   fm.submit();
  // });
  // var btn=document.getElementById('btn');
  //  eventUtil.addHandler(btn,"click",function(event){
  //   fm.submit();
  // });
    // eventUtil.addHandler(document,"keydown",function(event){
    //   var e=eventUtil.getEvent(event);
    //   console.log(e.key);
    //   if(e.key=="Enter"){
    //     fm.submit();
    //   }
    //   });

// });
// eventUtil.addHandler(window,"load",function(){
//   var fm=document.getElementById("form");
//   var flag=false;
//   eventUtil.addHandler(fm,"submit",function(event){
//     console.log("a");
//     var e=eventUtil.getEvent(event);
//     eventUtil.preventDefault(e);
//     // document.getElementById("sub").disabled=true;
//     if(flag==true)return;
//    setTimeout(function(){fm.submit();console.log("b");},3000);
//     flag=true;
//   });
// });
//避免多次提交表单
// 
eventUtil.addHandler(window,"load",function(){
  var doc=document.documentElement;
  // eventUtil.addHandler(doc,"keypress",function(event){
  //   var charCode=eventUtil.getCharCode(event);
  //   if(!/\d/.test(String.fromCharCode(charCode))&&charCode>8){
  //     eventUtil.preventDefault(event);
  //   }
  // });
  // var form=document.forms[0];
  // var int=form.elements[0];
  // eventUtil.addHandler(int,"paste",function(event){
  //   var text=eventUtil.getClipboardText(event);
  //   if(/[^\d]/.test(text)){
  //     eventUtil.preventDefault(event);
  //   }
  // });
  var a1=document.getElementById("a1"),
      a2=document.getElementById("a2"),
      a3=document.getElementById("a3");
  eventUtil.addHandler(a1,"keyup",tabForward);
  eventUtil.addHandler(a2,"keyup",tabForward);
  eventUtil.addHandler(a3,"keyup",tabForward);
});
function tabForward(event){
  var evt=event||window.event;
  var target=evt.target||evt.srcElement;
  var form=target.form;
  if(target.value.length==target.maxLength){
    for(var i=0;i<form.length;i++){
      if(form.elements[i]==target){
        if(form.elements[i+1]){
          form.elements[i+1].focus();
          return ;
        }
      }
    }
  }
}