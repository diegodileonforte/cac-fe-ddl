// Validación de formulario

const form = document.getElementById('form')
const firstname = document.getElementById('name').value
const lastname = document.getElementById('lastname').value
const email = document.getElementById('email').value
const comment = document.getElementById('comment').value

form.addEventListener('submit', (e) => {

    const errorMsg = []

    if (firstname.value === '') {
        errorMsg.push('Ingresa tu nombre')
    }

    if (lastname.value === '') {
        errorMsg.push('Ingresa tu apellido')
    }

    (function ValidateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        } else {
            errorMsg.push('Dirección de email incorrecta')
        }
    })

    if (comment.value === '') {
        errorMsg.push('Ingresa una consulta o mensaje')
    }

    if (errorMsg.length > 0) {
        e.preventDefault()
        alert(errorMsg.join(', '))
    }
})