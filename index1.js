
function aboutMe(){ 
    $.get("/users/1/about-me",function(data, status){console.log(data);
    console.log(status)});
   }
 function postAlert(){
    $.post("/newpost",function(data, status){
       alert("Posted on your timeline");});
    }