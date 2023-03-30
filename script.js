eye_icon=document.getElementsByClassName('eye-icon')[0];
eye_icon.addEventListener('click',(e)=>{
    if(e.target.attributes.src.nodeValue=='eye.png'){
        e.target.src="hidden.png";
        document.getElementById('pass').type="text";


    }else{
        e.target.src="eye.png";
        document.getElementById('pass').type="password";
    }
})