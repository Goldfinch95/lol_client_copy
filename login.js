const inputTextUser = document.getElementById("input__text-user");
const inputTextPassword = document.getElementById("input__text-password");
const btnFacebook = document.getElementById("login__facebook");
const btnGoogle = document.getElementById("login__google");
const btnApple = document.getElementById("login__apple");
const btnXbox = document.getElementById("login__xbox")
const btnSend = document.getElementById("button__send");
const btnRecovery = document.getElementById("btn_recovery");
const btnSignUp = document.getElementById("btn_signup");



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

btnFacebook.addEventListener("click",()=>{
    window.location.href = "https://www.facebook.com/login.php?skip_api_login=1&api_key=344190606773871&kid_directed_site=0&app_id=344190606773871&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv13.0%2Fdialog%2Foauth%3Fclient_id%3D344190606773871%26redirect_uri%3Dhttps%253A%252F%252Fauthenticate.riotgames.com%252Fredirects%252Ffacebook%26state%3D1e74b97e23b6dd2020b972ff971f62bb79ab712bb018137c78ed87b39228%26scope%3Demail%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D14b6807c-24b7-4917-ad3f-3408fd85f8f9%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fauthenticate.riotgames.com%2Fredirects%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D1e74b97e23b6dd2020b972ff971f62bb79ab712bb018137c78ed87b39228%23_%3D_&display=page&locale=es_LA&pl_dbl=0";
})

btnGoogle.addEventListener("click",()=>{
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?access_type=online&scope=openid%20profile%20email&state=c9d681da3a9b4179c9304abf111af2706cedbecafaf34d6b87041a9b7463&prompt=select_account&response_type=code&client_id=187685766663-ct6bdnthcq6jlllecpg1guhthoc7i8vv.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fauthenticate.riotgames.com%2Fredirects%2Fgoogle&service=lso&o2v=2&flowName=GeneralOAuthFlow";
})

btnApple.addEventListener("click",()=>{
    window.location.href = "https://appleid.apple.com/auth/authorize?response_type=code%20id_token&response_mode=form_post&client_id=com.riotgames.authenticator.prod.client&redirect_uri=https%3A%2F%2Fauthenticate.riotgames.com%2Fredirects%2Fapple&scope=name%20email&nonce=12413990174b53ce41bd2aed9aae8d91f335f6f51871bf49ce324c488f0a&state=7abc7e5450a7042d485959ce28e758b1646de33e6436e39a9d72c490a56c";
})

btnXbox.addEventListener("click",()=>{
    window.location.href = "https://login.live.com/oauth20_authorize.srf?client_id=a2e930dd-746b-4a29-aa3e-23c2c1cdd78d&scope=openid+email+xboxlive.signin+xboxlive.offline_access&redirect_uri=https%3a%2f%2fauthenticate.riotgames.com%2fredirects%2fxbox&response_type=code&state=84bc1c53a93ace614896fde9ab7dba53612ff749c4703ba780b2da98d623&prompt=select_account&uaid=4d563421ed5e4448b3ec069f67bff6b6&msproxy=1&issuer=mso&tenant=consumers&ui_locales=es-419&epct=PAQABAAEAAAD--DLA3VO7QrddgJg7Wevrt0waRMzI0K0j2noapVgz9CsfzQk425w7xH8UVIltAdyO85VYQt3VDiJa2GotDQjO2jp385wTOxulgGXXuUcHd2VVSmr2rADbh9I9B-wH4VfmzXCQXQ0Oa35KLr-0UxSIw4_gUHmLN-kv7XHsqSVygeboSQpRqF6ZrU7QT139dh-qDwP-_5MYltAaT_uE1j9KcQqblwa-F2UDC9pj9Szv2SAA&jshs=0#";
})

btnRecovery.addEventListener("click", ()=>{
    window.location.href = "https://recovery.riotgames.com/es?region=LA1"
})

btnSignUp.addEventListener("click", ()=>{
    window.location.href = "https://signup.leagueoflegends.com/es-ar/signup/index#/"
})
