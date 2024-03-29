window.addEventListener("DOMContentLoaded", ()=>{
    const form = document.querySelector(".contact-form");
    const inputName = form.querySelector(".name");
    const inputEmail= form.querySelector(".email");
    const inputSubject = form.querySelector(".subject");
    const messageEl = form.querySelector(".message");

    form.addEventListener("submit", (ev)=>{

        ev.preventDefault();
        resetErrorMsg();

        const errors = {};
        if(inputName.value.length < 6){
            errors["name"] = "Name should be more than 5 letters";
        }

        if(!emailIsValid(inputEmail.value)){
            errors["email"] = "Please provide valid email";
        }

        if(inputSubject.value.length < 15){
            errors["subject"] = "Subject should be more than 15 characters long";
        }

        if(messageEl.value.length < 25) {
            errors["message"] = "Message should be more than 25 characters long";
        }
            
        if(Object.keys(errors).length){
            for(let error in errors) {
                const field = form.querySelector(`.${error}`);
                const errorEl = document.createElement("p");
                errorEl.classList.add("msg-err");
                errorEl.innerHTML = errors[error];
                field.insertAdjacentElement("afterend", errorEl);
                // console.log(error);
            }
                
            }else {
            const confirmationEl = document.createElement("div");
            confirmationEl.classList.add("confirmation-box");
            confirmationEl.classList.add("email-success");
           
            confirmationEl.innerHTML = `
                                    <img src="/images/mail.svg">
                                    <h4 class="success-email-msg">Thank you your message has been send</h4>
            `;
            form.innerHTML = "";
            form.appendChild(confirmationEl);
        }
    })
    
    function resetErrorMsg(){
        const messages = form.querySelectorAll(".msg-err");

        for(let msg of messages){
            msg.remove();
        }
    }
})