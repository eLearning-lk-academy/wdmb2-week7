
const inA = document.getElementById('inA');
// const inB = document.getElementById('inB');
const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
    switch (inA.value) {
        case '1':
            alert('Nuwan');
            break;
        case '2':
            alert('Kasun');
            break;
        default:
            alert('No one');
            break;
    }
})