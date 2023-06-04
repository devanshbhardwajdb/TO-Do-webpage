let addbtn = document.querySelector('.btn1');
let input = document.getElementById('part2');



function remove() {
    this.parentElement.remove();
}

addbtn.addEventListener('click', add);

function add() {


    

 

    if ((document.getElementById('box1').value != "") && (document.getElementById('box2').value != "")) {
        let para1 = document.createElement('p');
        para1.innerHTML = document.getElementById('box1').value;

        let para2 = document.createElement('p');
        para2.innerHTML = document.getElementById('box2').value;

        let btn = document.createElement('button');
        btn.className = "btn2";
        btn.innerHTML = "x";
        btn.addEventListener('click', remove);

        let flex = document.createElement("div");
        flex.className = "details";


        input.appendChild(flex);
        flex.appendChild(para1);
        flex.appendChild(para2);
        flex.appendChild(btn);
    }
    let t = document.getElementById('box1');
    let des = document.getElementById('box2');

    t.value="";
    des.value="";

    
}
