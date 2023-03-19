var displays = document.getElementById("display");
var btns= document.getElementsByClassName("btn");
var operand1 = null;
var operator = null;
var operand2 = null;


for(var i=0; i<btns.length; i++){
    btns[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        console.log(value);
        if(value=='+'){
            operator = '+';
            operand1 = parseFloat(displays.innerText);
            displays.innerText='';//to clear the screen or displays.textContent='';
        }
        else if(value=='-'){
            if(displays.innerText==""){
                displays.textContent += value;
            }
            else{
                operator = '-';
                operand1 = parseFloat(displays.innerText);
                displays.innerText='';
            }
        }
        else if(value=='*'){
            operator = '*';
            operand1 = parseFloat(displays.innerText);
            displays.innerText='';
        }
        else if(value=='/'){
            operator = '/';
            operand1 = parseFloat(displays.innerText);
            displays.innerText='';
            
        }
        else if(value=='%'){
            operator = '%';
            operand1 = parseFloat(displays.innerText);
            displays.innerText='';
        }
        else if(value=='='){
            operand2 = parseFloat(displays.innerText);
            displays.innerText='';
            var ans = eval(operand1 + " " + operator + " " + operand2);
            // if(ans==NaN){
            //     displays.innerText = 'UNDEFINED';
            // }
            // else{
                displays.innerText = ans;
            // }
        }
        else if(value=='DEL'){
            var text = displays.textContent;
            var updatedText = text.substring(0, text.length-1);
            displays.textContent = updatedText;
        }
        else if(value=='AC'){
            displays.innerText='';
            operator=null;
            operand1=null;
            operand2=null;
        }
        else{
            displays.textContent += value;
        }
    });
    
}
