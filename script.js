function showmsg(match1, match2) {
    alert(match1 + 'vs' + match2);
}

function compute(value1, value2, value3){
    alert(value1 + value2 + value3);
}

function msg(){
    let m = 'Hello';
    alert(m);
}

let h = 'Hello';

function msg2(){
    alert(h + 'world!');
}
function compare(){
    let comp = 5 < 1;
    alert(comp);
}

function age_checked(){
    let age = prompt("How old are you? ");
    alert(`You are ${age} years old`);
}

function text_confirm(){
    let val = confirm("Are you sure you want to proceed?");
    alert(val);
}

function condition(){
    let pass = prompt("Please enter password: ");
    if(pass == 1234) {
        alert('You are right');
    } else {
        alert('Luh, mali!');
    }
    
} 

function compareValue(){
    let a = prompt(`Enter value first value`);
    let b = prompt(`Enter value second value`);

    if(a > b){
        alert(`Value A is Higher`);
    } else if(a < b){
        alert(`Value B is Higher`);
    } else {
        alert(`Equal`);
    }
}