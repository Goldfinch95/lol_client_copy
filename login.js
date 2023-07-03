const inputTextUser = document.getElementById("input__text-user");
const inputTextPassword = document.getElementById("input__text-password");
const btnSend = document.getElementById("button__send");


const getInputsValues = ()=>{
    const inputUserValue = inputTextUser.value
    const inputPasswordValue = inputTextPassword.value
    return {inputUserValue,inputPasswordValue}
}

const verifyAccount = (inputUserValue,inputPasswordValue) =>{
    if(inputUserValue == 'Goldfinch' && inputPasswordValue == '123456'){
        window.location.href = "account.html";
    }
    else{
        console.log('cuenta incorrecta');
    }
}

btnSend.addEventListener("click", ()=>{
    const {inputUserValue, inputPasswordValue} = getInputsValues();
    verifyAccount(inputUserValue, inputPasswordValue);
})
