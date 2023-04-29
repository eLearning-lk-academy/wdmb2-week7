
const inA = document.getElementById('inA');
const inB = document.getElementById('inB');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(e) {
    console.log(inA.value > inB.value);
    
    // if(inA.value > inB.value) {
    //     window.alert('A is greater than B');
    // }else{
    //     window.alert('B is greater than A');
    // }

    if(inA.value > inB.value) {
        window.alert('A is greater than B');
    }else if(inA.value == inB.value){
        window.alert('A is equal to B');
    }
    else {
        window.alert('B is greater than A');
    }
});

let a = 10;
let b = 20;
let c = 10;

// AND OR NOT
// && || !

if(a != b && a != c){
    console.log('A is not equal to B and C');
}

console.log( a>b && a>c)
console.log( a>b || b>c)

function truthy(){
    console.log('Truthy');
    return true;
}

function falsy(){
    console.log('Falsy');
    return false;
}
// AND operator
console.log('AND operator');
truthy() && truthy() && falsy() && falsy() ;
falsy() && truthy();

// OR operator
console.log('OR operator');
truthy() || falsy();
falsy() || truthy();

function checkOdd(num){
    if(num % 2 == 0){
        return false;
    }else{
        return true;
    }
}

if(checkOdd(11)){
    console.log('Odd');
}else{
    console.log('Even');
}