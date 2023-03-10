var op1 = 0;
var op2 = 0;
var ans = '';
var exp = '';
var n1, n2;
var one = document.querySelector('.one')
var two = document.querySelector('.two')
var opera = document.querySelector('.op');
var opps = document.querySelectorAll('.opp');
var opp1 = document.querySelector('.op1');
var opp2 = document.querySelector('.op2');
var opp3 = document.querySelector('.op3');
var num1 = document.querySelector('.num1');
var num2 = document.querySelector('.num2');
var three = document.querySelector('.three');
var hamburger = document.querySelector('.hamburger');
var nav = document.querySelector('.nav-container')
var audio = document.getElementById('audio');
var addP = document.querySelector('.addPage');
var subP = document.querySelector('.subPage');
var multP = document.querySelector('.mulPage');
var divP = document.querySelector('.divPage');
var body = document.querySelector('.app-body');



window.onload = () => {
    
     
    expression();
 
    
    hamburger.addEventListener('click', () => {
        one.classList.toggle('right');
        two.classList.toggle('hide');
        three.classList.toggle('left')
        nav.classList.toggle('wid')
})

}


expression = () => {
    
    op1 = Math.floor(Math.random() * 10);
    op2 = Math.floor(Math.random() * 10);
    n1 = Math.floor(Math.random() * 13);
    n2 = Math.floor(Math.random() * 13);

    if(opera.textContent == '+')
        ans = eval(n1 + n2);
    else if(opera.textContent == '-')
        ans = eval(n1 - n2); 
    else if(opera.textContent == '÷'){
        ans = (eval(n1 / n2)).toFixed(1);
        if(ans === 'NaN' || ans === 'Infinity'){
            ans = 0
        }
    }
    else if(opera.textContent == '×')
        ans = eval(n1 * n2); 
    
    
  
    

    
    
    
 

    if(op1 == op2){
        op1 += 1
    }
    if(op1 == ans || op2 == ans ){
        op1 ++;
        op2 ++;
    }
    num1.textContent = n1;
    num2.textContent = n2;
    const allans = [ans, op1, op2];
    const swans = [];
    for (i = allans.length; i--;){
        console.log(swans.push(allans.splice(Math.floor(Math.random() * (i + 1)), 1)[0]))
    }
    console.log(swans)
    opp1.textContent = swans[0]
    opp2.textContent = swans[1]
    opp3.textContent = swans[2]
    
    opp1.addEventListener('click', () => {
        if(opp1.textContent == ans){
            expression();
            audio.pause();
        }

    })
    opp2.addEventListener('click', () => {
        if(opp2.textContent == ans){
            expression();
            audio.pause();
        }

    })
    opp3.addEventListener('click', () => {
        if(opp3.textContent == ans){
            expression();
            audio.pause();
        }

    })
}