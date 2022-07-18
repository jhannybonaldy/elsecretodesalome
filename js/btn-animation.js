const btn = document.getElementsByClassName("content__button");
var pos = 0;
var i = 0;
var max=50;
var inter = setInterval(move, 20)

var pY = 10;        // Valor inicil del pading en el eje Y
var px = 25;        // Valor inicil del pading en el eje X
var mB = 30;        // Valor inicil del margin-bottom
var fS = 15;        // Valor inicial del font-size

function move(){
    if((pos >=0) && (pos < max) && (i==0))
    {
        pos += 1;
        btn[0].style.padding = `${pY+=0.1}px ${px+=0.1}px `;
        btn[0].style.fontSize = `${px+=0.01}px `;
        btn[0].style.marginBottom = `${mB-=0.2}px `;

        if(pos>=max){
            i=1;
        }
    }else if((pos >0) && (pos <= max) && (i==1))
    {
        pos += -1;
        btn[0].style.padding = `${pY-=0.1}px ${px-=0.1}px `;
        btn[0].style.fontSize = `${px-=0.01}px `;
        btn[0].style.marginBottom = `${mB+=0.2}px `;

        if(pos==0){
            i=0;
        }
    }
}