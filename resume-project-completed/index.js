var navMenuAnchorTags=document.querySelectorAll(".nav-menu a");

for(var i=0;i<navMenuAnchorTags.length;i++){
   navMenuAnchorTags[i].addEventListener("click",function(event){
     event.preventDefault();
     var section=this.textContent.trim().toLowerCase();
     var sectionId=document.getElementById(section);
     var interval=setInterval(function(){
        let targetsectioncordinates=sectionId.getBoundingClientRect();
        if(targetsectioncordinates.top<=0){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,50);
     },20);
   });
}
let skillSection=document.getElementById("skills");
let skillCordinates=skillSection.getBoundingClientRect();
if(skillCordinates.top<=0){
   
}