let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(element => {
    element.addEventListener('click',(b)=>{
        if(b.target.innerText == '='){
            try{
                string = string.replace(/x/g,'*')
                string = String(eval(string))
                inputBox.value = string;
            }
            catch{
                string = 'Error';
            }
        }
        else if(b.target.innerText == 'AC'){
            string = ''
            inputBox.value = string;
        }
        else if(b.target.innerText == 'Del'){
            string = string.substring(0,string.length-1)
            inputBox.value = string;
        }
        else if(b.target.innerText == 'plusMinus'){
            if(string){
                if(string[0] === '-'){
                    string = string.substring(1);
                }
                else{
                    string = '-' + string;
                }
            }
            inputBox.value = string;
        }
        else{
            string += b.target.innerText
            inputBox.value = string;
        }
    })
})