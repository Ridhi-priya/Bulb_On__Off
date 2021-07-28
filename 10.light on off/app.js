var count = 0;
document.getElementById('light').onclick = function(){
    chngimg(count);
    count++;
}

function chngimg(count) {
    let img=document.getElementById("image1");
    count%2==0 ? img.src = "./images/on.jpg" : img.src = "./images/off.jpg";
}