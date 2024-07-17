var scorecnt =0;
cross=true;
document.onkeydown = function(e) 
{
    console.log(e.keyCode);
    if(e.keyCode==38)
        {
            dino=document.querySelector(".jerry");
            dino.classList.add("animateDino");
            setTimeout(()=>dino.classList.remove("animateDino"),700);


        }
    else if(e.keyCode==39)
            {
                
                dino=document.querySelector(".jerry");
                jx=parseInt(window.getComputedStyle(jerry,null).getPropertyValue("left"));
                jy=parseInt(window.getComputedStyle(jerry,null).getPropertyValue("bottom"));
                jerry.style.left= jx+100+"px";
            }
            else if(e.keyCode==37)
                {
                    
                    dino=document.querySelector(".jerry");
                    jx=parseInt(window.getComputedStyle(jerry,null).getPropertyValue("left"));
                    jy=parseInt(window.getComputedStyle(jerry,null).getPropertyValue("bottom"));
                    jerry.style.left= jx-100+"px";
                }
}
setInterval(()=>{
    gameOver =document.querySelector('.gameOver');
    tom=document.querySelector('.tom');
    jerry=document.querySelector('.jerry');
    jx=parseInt(window.getComputedStyle(jerry,null).getPropertyValue("left"));
    jy=parseInt(window.getComputedStyle(jerry,null).getPropertyValue("bottom"));
    tx=parseInt(window.getComputedStyle(tom,null).getPropertyValue("left"));
    ty=parseInt(window.getComputedStyle(tom,null).getPropertyValue("bottom"));
    dX = Math.abs(jx-tx);
    dY= Math.abs(jy-ty);
    console.log(dX,dY);
    if(dX<=50&&dY<50) 
            {
                gameOver.style.visibility="visible";
                tom.classList.remove("animateTom");
           
            }
    else if (dX<70&&cross)
            {
                scorecnt=scorecnt+1;
                updateScore(scorecnt);
                cross=false;
                setTimeout(()=>{cross=true;},1000);
                anidur = parseInt(window.getComputedStyle(tom,null).getPropertyValue('animation-duration'));
                if (anidur>2)
                
              {  newdur=anidur-0.1;
                // // tom.style.setPropertyValue('animation-duration',newdur);
                tom.style.animationDuration=newdur+"s";}
            }


},50);
function updateScore(scorecnt)
{
    score = document.querySelector('.score');
    score.innerHTML = "Score: " + scorecnt;
}