function animate(tagId,alfa,step){
 div = document.getElementById(tagId);
 var items = new Array();

 for(c=i=0;i<div.childNodes.length;i++){
  if (div.childNodes[i].tagName=="IMG"){
   items[c] = div.childNodes[i];
   c++;
  }
 }
 last = items[items.length-1];
 next = items[items.length-2];

 last.style.opacity= alfa/100;
 last.style.filter= "progid:DXImageTransform.Microsoft.Alpha(opacity="+alfa+")";
 last.style.filter= "alpha(opacity="+alfa+")";

 if ((alfa-step)>0){
  
   setTimeout("animate('"+tagId+"',"+(alfa-step)+","+step+");",50);
 }else{
  
  next.style.opacity= 1;
  next.style.filter= "progid:DXImageTransform.Microsoft.Alpha(opacity=100)";
  next.style.filter= "alpha(opacity=100)";
  
  tmp = last;
  div.removeChild(last);
  div.insertBefore(tmp,items[0]);
  tmp.style.opacity= 1;
  tmp.style.filter= "progid:DXImageTransform.Microsoft.Alpha(opacity=100)";
  tmp.style.filter= "alpha(opacity=100)";

  setTimeout( "slideShow('"+tagId+"')", 4500 );
 }
}

function slideShow(tagId){
 div = document.getElementById('slideShowBox');
 if (div.style.visibility!="visible"){
      div.style.visibility = "visible";
 }
 items = div.getElementsByTagName('img');
 if (items.length>0){
  animate(tagId,100,5);
 }
}

setTimeout( "slideShow('slideShowBox');",5000 );