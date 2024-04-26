const bt1=document.getElementById('bt1');
const bt2=document.getElementById('bt2');
const bt3=document.getElementById('bt3');
const lab1=document.getElementById('lab1');
let count=0;

bt3.onclick= function(){
    count++;
    lab1.textContent= count;
}

bt1.onclick= function(){
    count--;
    lab1.textContent= count;
}
bt2.onclick= function(){
    count=0;
    lab1.textContent= count;
}