const {hash} = window.location;
const message = atob(hash.replace("#",""));

console.log(message)
if(message){
    document.querySelector("#msg-form").classList.add("hide");
    document.querySelector("#msg-show").classList.remove("hide");

    document.querySelector('h1').innerHTML = message;
}

document.querySelector("form").addEventListener("submit", event => {
    //# Default behaviour of browser is to send form data to back-end server when we submit it.
    event.preventDefault();

    document.querySelector("#msg-form").classList.add("hide");
    document.querySelector("#link-form").classList.remove("hide");

    const input = document.querySelector("#msg-input");
    const encrypted = btoa(input.value);
    
    const linkInput = document.querySelector("#link-input");
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
    
})