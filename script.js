var listAnchorTags = document.querySelectorAll('.nav-menu a');
console.log(listAnchorTags);
var clearTok;
var sectionID;
function helperFunct(targetSect,targetBlock,topDist){
  targetBlock = targetSect.getBoundingClientRect();
  topDist = targetBlock.top;
  console.log("IS CONTACT ="+" "+sectionID);
  if(sectionID==="contact"){
    targetBlock = targetSect.getBoundingClientRect();
    topDist = targetBlock.top;
    if(topDist<=140){
      clearInterval(clearTok);
    }
    console.log(topDist);
    scrollBy(0,30);
  }
  else{
    targetBlock = targetSect.getBoundingClientRect();
    topDist = targetBlock.top;
    if(topDist<=0){
      clearInterval(clearTok);
    }
    console.log(topDist);
    scrollBy(0,30);
  }

}

for(var itr=0;itr<listAnchorTags.length;itr++){
  listAnchorTags[itr].addEventListener('click',function(e){
    e.preventDefault();
     sectionID = this.innerText.trim().toLowerCase();
console.log(sectionID);
    var  targetSect = document.getElementById(sectionID);
    console.log(targetSect);
    var targetBlock = targetSect.getBoundingClientRect();
    console.log(targetBlock);
    var topDist = targetBlock.top;
    clearTok = setInterval(helperFunct,50,targetSect,targetBlock,topDist);
  }                                   
  );
}

//Get the distance for the skill section from the top


var animationDone=false;
var skillSec = document.getElementById('skill-elements');
var skillItem = document.getElementsByClassName('skill-item');

function initializeBar(obj){
  console.log("Inside Hide");
  obj.style.width=0+"%"; 
}

for(let obj of skillItem){
   initializeBar(obj);
}
// function fillBar(obj){
//   console.log("Inside Nornal effect");
//   obj.classList.add('runningAnim'); 
//   var len = obj.getAttribute('data-width');      via CSS done
//   console.log("Adding styles");
//   obj.style.width = len;
// }

// Now fillBar via JS
function fillBar(obj){
   var targetWidth =  obj.getAttribute('data-width');
   var currentWidth=0;
   var closeTask = setInterval(function(){
         if(currentWidth>targetWidth){
            clearInterval(closeTask);
            return;
         }
         currentWidth++;
         obj.style.width=currentWidth+"%"; 
   },10) 
}
document.addEventListener('scroll',function(){
  var obj = skillSec.getBoundingClientRect();
  var topD = obj.top;
  console.log("Value "+topD);

  if(!animationDone && topD<=window.innerHeight){
          animationDone=true; 
          console.log("Code stared outside");

          for(var i=0;i<skillItem.length;i++){
               console.log("Code started inside");
              //  console.log("Code started inside");
               fillBar(skillItem[i]);
          }

  }
  else if(topD>window.innerHeight){
     animationDone = false;
     initializeBar(skillItem);
  }
});