
const slides = document.querySelectorAll(".box");
console.log(slides);

slides.forEach(
    (slide,index)=>{
        slide.style.left =`${index *100}%`;
    }
)

function slideImage (){
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${count * 100}%)`
        }
    )
}
let count=0;
function display_index(){
    count =0;
    slideImage();
}
function display_about(){
    count =1;
    slideImage();
}
function display_resume(){
    count =2;
    slideImage();
}
function display_service(){
    count =3;
    slideImage();
}
function display_skills(){
    count =4;
    slideImage();
}
function display_project(){
    count =5;
    slideImage();
}
function display_testi(){
    count =6;
    slideImage();
}
function display_Contact(){
    count =7;
    slideImage();
}
function next(){
    count++;
    if(count<=7){
       slideImage(); 
    }
    else{
        count=0;
        slideImage();
    }
    
}



let disp_flag =1;
function none(){
    console.log(disp_flag);

    if (disp_flag==0){
        let x =document.getElementsByClassName("dsply");
        disp_flag=1;
    for(let i = 0 ; i<x.length;i++){
        x[i].style.cssText="display:inline";
        
    }
    
}
else{
    let x =document.getElementsByClassName("dsply");
        disp_flag=0;
        for(let i = 0 ; i<x.length;i++){
            x[i].style.cssText="display:none";
        }
    }

    
}

let testi_flag =0;
function nxt(){
    let x = document.getElementsByClassName("testi_card");
    x[testi_flag].style="display:none";
    testi_flag++;
    console.log(testi_flag);
    if(testi_flag==3){
        testi_flag=0;
        console.log("in if");
        console.log(testi_flag);
    }
    
    x[testi_flag].style="display:flex;";
    document.getElementById("numm").innerHTML=`0${testi_flag+1}/03`;
}

function prew(){
    let x = document.getElementsByClassName("testi_card");
    x[testi_flag].style="display:none";
    testi_flag--;
    if(testi_flag==-1){
        testi_flag=2;
    }
    x[testi_flag].style="display:flex;";
    document.getElementById("numm").innerHTML=`0${testi_flag+1}/03`;
}

  window.addEventListener("keyup", function(event) {
    if (event.key === "ArrowUp") {
    } else if (event.key === "ArrowLeft") {
        
        if(count==0){
            count=7;
            slideImage();
        }
        else{
            count--;
            slideImage();
        }
    } else if (event.key === "ArrowRight") {
        if(count==7){
            count=0;
            slideImage();
        }
        else{
            count++;
            slideImage();
        }
    }
  });
