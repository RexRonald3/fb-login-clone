let FirstName_input=document.querySelector(".FirstName_input");
let SurName_input=document.querySelector(".SurName_input");
let female_radio=document.querySelector(".female_radio");
let male_radio=document.querySelector(".male_radio");
let custom_radio=document.querySelector(".custom_radio");
let NumberOrEmail_Input=document.querySelector(".NumberOrEmail_Input");
let password_Input=document.querySelector(".password_Input");




function SignUpButton(event){
    event.preventDefault();
    document.querySelector("#SurName_error").style.display="flex";
    document.querySelector("#FirstName_error").style.display="flex";
    document.querySelector("#DOB_error").style.display="flex";
    document.querySelector("#gender_error").style.display="flex";
    document.querySelector("#NumberOrEmail_error").style.display="flex";
    document.querySelector("#Password_error").style.display="flex";
    if(!FirstName_input.Value){
        console.log("hello");
    }

}
function OpenLoginPage(){
    document.querySelector(".Card").style.display="none";
    document.querySelector(".LoginCard").style.display="inline-block";

}