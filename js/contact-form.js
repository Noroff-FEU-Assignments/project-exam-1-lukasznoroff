window.addEventListener("DOMContentLoaded", ()=>{
    const form = document.querySelector(".contact-form");
    const inputName = form.querySelector(".name");
    const inputEmail= form.querySelector(".email");
    const inputSubject = form.querySelector(".subject");
    const messageEl = form.querySelector(".message");

    form.addEventListener("submit", (ev)=>{
        ev.preventDefault();
        const errors = {};
        if(inputName.value.length < 6){
            errors["name"] = "name should be more than 5 letters";
        }

        if(!emailIsValid(inputEmail.value)){
            errors["email"] = "please provide valid email ";
        }

            // TODO po ponownym wyslaniu czyscic komunikaty

        if(Object.keys(errors).length){
            for(let error in errors) {
                const field = form.querySelector(`.${error}`);

                const errorEl = document.createElement("p");
                errorEl.classList.add("msg-err");
                errorEl.innerHTML = errors[error];
                field.insertAdjacentElement("afterend", errorEl);
                console.log(error);
                
            }
        }
        
    })
})