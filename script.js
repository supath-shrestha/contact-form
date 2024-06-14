const formValidation = {}

function checkInput(element, value, error) {
    let pattern = /^\S+@\S+\.\S+$/;

    if (value.trim() === "") {
        element.style.borderColor = "hsl(0, 66%, 54%)";
        error.style.display = "block";
        return false
    } else if (element.id === "email" && !value.match(pattern)) {
        element.style.borderColor = "hsl(0, 66%, 54%)";
        error.style.display = "block"
        error.innerText = "Please enter a valid email address"
        return false
    } else {
        element.style.borderColor = "hsl(186, 15%, 59%)";
        error.style.display = "none";

        element.addEventListener("mouseover", () => {
            element.style.borderColor = "hsl(169, 82%, 27%)";
        })

        element.addEventListener("mouseout", () => {
            element.style.borderColor = "hsl(186, 15%, 59%)";
        })
        return true
    }
}

function handleSubmit() {
    let fname = document.querySelector("#fname");
    let lname = document.querySelector("#lname");
    let email = document.querySelector("#email");
    let generalEnquiry = document.querySelector("#generalEnquiry");
    let submitRequest = document.querySelector("#submitRequest");
    let message = document.querySelector("#message");
    let consent = document.querySelector("#consent");

    let fnameErr = document.querySelector("#fnameErr");
    let lnameErr = document.querySelector("#lnameErr");
    let emailErr = document.querySelector("#emailErr");
    let queryTypeErr = document.querySelector("#queryTypeErr");
    let messageErr = document.querySelector("#messageErr");
    let consentErr = document.querySelector("#consentErr");

    checkInput(fname, fname.value, fnameErr) ? formValidation['fname'] = true : formValidation['fname'] = false;
    checkInput(lname, lname.value, lnameErr) ? formValidation['lname'] = true : formValidation['lname'] = false;
    checkInput(email, email.value, emailErr) ? formValidation['email'] = true : formValidation['email'] = false;

    if (!generalEnquiry.checked && !submitRequest.checked) {
        queryTypeErr.style.display = "block"
        formValidation['queryType'] = false
    } else {
        queryTypeErr.style.display = "none"
        formValidation['queryType'] = true
    }

    checkInput(message, message.value, messageErr) ? formValidation['message'] = true : formValidation['message'] = false;

    if (!consent.checked) {
        consentErr.style.display = "block"
        formValidation['consent'] = false;
    } else {
        consentErr.style.display = "none"
        formValidation['consent'] = true;
    }
}


document.querySelector("#submitBtn").addEventListener('click', (e) => {
    e.preventDefault()

    let allValid = true

    handleSubmit()

    for (const key in formValidation) {
        if (Object.hasOwnProperty.call(formValidation, key)) {
            const isValid = formValidation[key];
            if (isValid === false) {
                allValid = false
                break
            }
        }
    }

    if (allValid) {
        document.querySelector("#form").reset()
        document.querySelector("#messageSentBox").style.display = "block"
    }
})



