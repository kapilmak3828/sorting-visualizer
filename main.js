



var inp_as = document.getElementById('a_size') , array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");

console.log(array_size);

var butts_algos = document.querySelectorAll(".algos button");


var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";


//Array generation and updatation

inp_gen.addEventListener('click' ,generate_array);
inp_as.addEventListener("input" , update_array_size);


function generate_array()
{
    cont.innerHTML= "";

    for(var i =0;i<array_size;i++)
    {
        div_sizes[i] = Math.floor(Math.random()*0.5*(inp_as.max - inp_as.min)) + 10;  
        console.log(div_sizes[i]);
        divs[i] = document.createElement("div");
        console.log(divs);
        cont.appendChild(divs[i]);
        margin_size = 0.2;
        divs[i].style = `margin:0  ${margin_size}%; background-color:#0eafe0; width: ${(100/array_size-(2*margin_size))}% ; height: ${(div_sizes[i])}% `;
    }
    
}


function update_array_size(){
   
   array_size = inp_as.value;
   generate_array(); 
}

window.onload = update_array_size();


document.getElementById("btn").addEventListener('click' ,runalgo)

function disable_buttons()
{       
        this.disabled = true;   
        inp_as.disabled = true;
        inp_gen.disabled = true;
        inp_aspeed.disabled = true;

    
}

function runalgo()
{
    disable_buttons();

    switch(document.getElementById("algo").value)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();                                                
                        break;
        case "Quick":Quick();
                        break;
        case "Heap" :Heap();
                        break;                             
    }
}









