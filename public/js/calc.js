var btns = document.getElementsByClassName('defBtn');
var opsBtns = document.getElementsByClassName('opsBtn');
var ac = document.getElementById('ac');
var ce = document.getElementById('ce');
var fPoint = document.getElementById('floatPoint');
var resStr = '';
var result;



ac.addEventListener('click',function(){
    document.getElementById('resLabel').innerHTML=0;
});
ce.addEventListener('click',function(){
  var resultLabel = document.getElementById('resLabel').innerHTML;
   if(resultLabel==0){return;} document.getElementById('resLabel').innerHTML=resultLabel.slice(0,resultLabel.length-1);
if(document.getElementById('resLabel').innerHTML==''){
document.getElementById('resLabel').innerHTML=0;
}
});

function addFloatPoint(){
              var resultLabel = document.getElementById('resLabel').innerHTML;
if(isNaN(resultLabel.charAt(resultLabel.length-1))){
      document.getElementById('resLabel').innerHTML+='0.';
  fPoint.removeEventListener('click',addFloatPoint);

     }
 else{

    document.getElementById('resLabel').innerHTML+=fPoint.innerHTML;
 
  fPoint.removeEventListener('click',addFloatPoint);
 }
}


for(var i =0; i<btns.length;i++){
       (function(){
        var y = i;
        btns[y].addEventListener('click',function(){
        if(document.getElementById('resLabel').innerHTML=='0'){
           document.getElementById('resLabel').innerHTML='';
        document.getElementById('resLabel').innerHTML=btns[y].innerHTML;
        }
        else{
document.getElementById('resLabel').innerHTML+=btns[y].innerHTML;
        }
      });
    })();
}
       
for(var j =0; j < opsBtns.length; j++){
      (function(){
      var q = j;
        opsBtns[q].addEventListener('click',function(){
          var resultLabel = document.getElementById('resLabel').innerHTML;
          if(resultLabel.charAt(resultLabel.length-1) == opsBtns[q].innerHTML)
              {return;}
          else if(resultLabel.charAt(resultLabel.length-1) == '.'){
                                    document.getElementById('resLabel').innerHTML+=opsBtns[q].innerHTML;
          fPoint.addEventListener('click',addFloatPoint);


          }
          else if(isNaN(resultLabel.charAt(resultLabel.length-1))){
              document.getElementById('resLabel').innerHTML=resultLabel.slice(0,resultLabel.length-1)+opsBtns[q].innerHTML;
          }
        else{
                        document.getElementById('resLabel').innerHTML+=opsBtns[q].innerHTML;
          fPoint.addEventListener('click',addFloatPoint);
        }
      });
      })();
 }

 fPoint.addEventListener('click',addFloatPoint);

       
// var result = document.getElementById("resLabel").innerHTML;
var resultBtn=document.getElementById('equal');
resultBtn.addEventListener('click',function(){
  var result = eval(document.getElementById('resLabel').innerHTML);
  document.getElementById('resLabel').innerHTML=result;
  });
// console.log(result);
