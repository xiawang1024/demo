// //数组去重01
// function uniArray(arr){
// 	var hash={};
// 	var result=[];
// 	for(var i=0;i<arr.length;i++){
// 		if(!hash[typeof arr[i]+arr[i]]){
// 			result.push(arr[i]);
// 			hash[typeof arr[i]+arr[i]]=true;
// 		}
// 	}
// 	return result;
// }
// var arr=[1,2,3,5,8,1,3,4,"1"];
// //数组去重02
// function uniArray1(arr){
// 	var result=[];
// 	var flag;
// 	for(var i=0;i<arr.length;i++){
// 		flag=true;
// 		for(var j=0;j<result.length;j++){
// 			if (result[j]===arr[i]) {
// 				flag=false;
// 				break;
// 			}
// 		}
// 		if(flag){
// 			result.push(arr[i]);
// 		}
// 	}
// 	return result;
// }
// //数组去重03
// function uniArray2(arr){
// 	var temp=[];
// 	temp=arr.slice(0);
// 	for(var i=0;i<arr.length;i++){
// 		for(var j=i+1;j<temp.length;j++){
// 			if(temp[j]===arr[i]){
// 				temp.splice(j,1);
// 				j--;
// 			}
// 		}
// 	}
// 	return temp;
// }
//对字符串头尾进行空格字符的去除
// function trim(str){
// 	var pattern=/^\s*([\s\S]*?)\s*$/;
// 	str=str.match(pattern)[1];
// 	return str;
// }
// var str="    hi!  sdasd   ";
// alert(Math.floor(Math.random()*4+2))
// function makeFunc() {
//   var name = "Mozilla";
//   function displayName() {
//     alert(name);
//   }
//   return displayName;
// }

// var myFunc = makeFunc();
// myFunc();
window.onload=function(){
function fontSize(size){
	return function(){
		document.body.style.fontSize=size+"px";
	}
}
var fontSize12=fontSize(12);
var fontSize14=fontSize(14);
var fontSize16=fontSize(16);
document.getElementById('font-size-12').onclick=fontSize12;
document.getElementById('font-size-14').onclick=fontSize14;
document.getElementById('font-size-16').onclick=fontSize16;
};
// var x=10;
// function foo(){
// 	alert(x);
// }
// function bar(){
// 	var x=20;
// 	foo();
// }
// bar();
window.onload=function(){
 function abc(){
	alert('ok');
}
document.getElementById('link').onclick=abc;
}
//二分法查找有序数组
// function search(arr,dst){
// 	var low,mid,heig;
// 	low=0;heig=arr.length-1;
// 	while(low<=heig){
// 		mid=Math.floor((low+heig)/2);
// 		if(arr[mid]<dst){
// 			low=mid+1;
// 		}else if(arr[mid]>dst){
// 			heig=mid-1;
// 		}else{
// 			return mid;
// 		}
// 	}
// 	return -1;
// }
// var arr=[1,2,4,6,7,9,19,20,30,40,45];
// var number=[1,2,3,4,5,4,3,2,1];
// var everyNumber=number.every(function (item,index,arr) {
// 	return item<6;	// body...
// });
// var someNumer=number.some(function(item,index,arr){
// 	return item>4;
// });
// var filterNumber=number.filter(function(item,index,arr){
// 	return item>3;
// });
// number.forEach(function(item,index,arr){
// 	return item+3;
// });
// var sum=number.reduce(function(pre,item,index,arr){
// 	return  pre+item;
// });
//01类型检测
// function myType(param){
// 	if(typeof param==="object"){
// 		var type= Object.prototype.toString.call(param).slice(8,-1);
// 		if(type==="Object"){
// 			return type.toLowerCase();
// 		}else{
// 			return type;
// 		}
// 	}else{
// 		return typeof param;
// 	}
// }
// //二分法查找有序数组
// function search(arr,dst){
// 	var low,mid,heig;
// 	low=0;heig=arr.length-1;
// 	while(low<=heig){
// 		mid=Math.floor((low+heig)/2);
// 		if(arr[mid]<dst){
// 			low=mid+1;
// 		}else if(arr[mid]>dst){
// 			heig=mid-1;
// 		}else{
// 			return mid;
// 		}
// 	}
// 	return -1;
// }
// //03日期格式化
// function formatDate(date,pattern){
// 	var _year=date.getFullYear(),
// 		_month=(date.getMonth()+1)<10?'0'+(date.getMonth()+1):(date.getMonth()+1),
// 		_date=date.getDate()<10?'0'+date.getDate():date.getDate(),
// 		_hours=date.getHours()<10?'0'+date.getHours():date.getHours(),
// 		_minutes=date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes(),
// 		_seconds=date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
// 	switch(pattern){
// 		case "yyyy": return _year;
// 		case "yyyy-MM": return _year+'-'+_month;
// 		case "yyyy-MM-dd": return _year+'-'+_month+'-'+_date;
// 		case "yyyy-MM-dd HH": return _year+'-'+_month+'-'+_date+" "+_hours;
// 		case "yyyy-MM-dd HH:mm": return _year+'-'+_month+'-'+_date+" "+_hours+':'+_minutes;
// 		case "yyyy-MM-dd HH:mm:ss": return _year+'-'+_month+'-'+_date+" "+_hours+':'+_minutes+':'+_seconds;
// 	}
// }
// var date = new Date(2001, 9, 11, 8, 26, 8);
// console.log(	formatDate(date, "yyyy"));	//返回值： "2001"
// console.log(	formatDate(date, "yyyy-MM-dd"));	    //返回值： "2001-09-11"
// console.log(	formatDate(date, "yyyy-MM-dd HH"));	//	返回值： "2001-09-11 08"
// console.log(	formatDate(date, "yyyy-MM-dd HH:mm"));   // 返回值： "2001-09-11 08:26:08"

