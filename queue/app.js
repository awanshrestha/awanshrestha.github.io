let array = [];

function loadList(){
    document.querySelector('div.list').innerHTML="";
    for(let i=0;i<array.length;i++){
        let elem = document.createElement('span');
        elem.innerText=array[i];
        document.querySelector('.list').appendChild(elem);
    }
}
function enqueue(){
    let text = document.querySelector('input').value;
    if(text===""){
        return;
    }
    if(text!==""){
        array.push(text);
    }
    loadList();
}
function dequeue(){
    if(array.length===0){
        return;
    }
    document.getElementById('arr').children[0].style="transition: all 0.9s; opacity:0";
    setTimeout(function(){
        array.shift();
        loadList();
    },1000)
    
}
function size(){
    document.getElementById('size-box').innerHTML = array.length;
}

function isEmpty(){
    if(array.length==0){
        document.getElementById('empty-box').innerHTML = "Yes";
    }
    else{
        document.getElementById('empty-box').innerHTML = "No";
    }
}

function front(){
    if(array.length==1){
        document.getElementById('arr').children[0].style="background-color:red";
        return;
    }
    if(array.length==0){
        return;
    }
   document.getElementById('arr').firstChild.style = "background:red;" ;
   document.getElementById('arr').lastChild.style = "background:#000000;" ;
}

function rear(){
    if(array.length==1){
        document.getElementById('arr').children[0].style="background-color:red";
        console.log("h");
        return;
    }
    if(array.length==0){
        return;
    }
    document.getElementById('arr').lastChild.style = "background:red;" ;
    document.getElementById('arr').firstChild.style = "background:#000000;" ;
 }

loadList();

var input = document.getElementById("textfield");
input.select();