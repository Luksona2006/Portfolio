// FORM
let form = document.querySelector('form');

function handleClick(e) {
    let popUp = document.getElementById('popUp');
    let blurDiv = document.getElementById('blur')
    let validate = true;
    e.preventDefault();
    form.querySelectorAll('input').forEach(element => {
        if(element.style.border === '1px solid #D70040' || element.value === '') {
            validate = false;
            element.parentElement.querySelector('label').style.color = '#D70040'
            element.style.border = '1px solid #D70040'
        } 
    })
    
    if(form.querySelector('textarea').value === '') {
        validate = false
        form.querySelector('textarea').parentElement.querySelector('label').style.color = '#D70040'
        form.querySelector('textarea').style.border = '1px solid #D70040'
    }

    if(validate) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        blurDiv.style.display = 'block'
        setTimeout(() => {
            blurDiv.style.opacity = '0.4'
        }, 0);
        setTimeout(() => {
            popUp.style.opacity = '1';
            popUp.style.top = `8px`;
        }, 400);
    
        setTimeout(() => {
            blurDiv.style.opacity = '0'
            popUp.style.opacity = '0';
            popUp.style.top = `-8px`;
        }, 3600);
    
        setTimeout(() => {
            blurDiv.style.display = 'none'
        }, 4000)
        

        let name = `${document.getElementById('name').value} ${document.getElementById('surname').value}`
        var params = {
            from_name: name,
            email_id: document.getElementById('email').value,
            number: document.getElementById('number').value,
            message: document.getElementById('message').value
        }
        
        emailjs.send('service_cqip1ms', 'template_ammxsrh', params)

        form.querySelectorAll('input').forEach(element => {
            element.value = ''
        })

        form.querySelector('textarea').value = ''
    }
}

function checkValue(e) {
    let currentInput = e.currentTarget
    if(currentInput.value === '') {
        currentInput.parentElement.querySelector('label').style.color = '#D70040'
        currentInput.style.border = '1px solid #D70040';
    } else {
        if(currentInput.value !== '') {
            currentInput.style.border = '1px solid rgba(49, 49, 49, 0.945)';
            currentInput.parentElement.querySelector('label').style.color = '#2B2B2B'
        }
    }
}

for(let i = 0; i < form.querySelectorAll('input').length; i++) {
    form.querySelectorAll('input')[i].addEventListener('keyup', checkValue)
}

form.querySelector('textarea').addEventListener('keyup', checkValue)

form.addEventListener('submit', handleClick)

// MENU

let showMenu = document.getElementById('showMenu');
let hideMenu = document.getElementById('hideMenu');
let navLinks = document.getElementById('navLinks');

function showmenu() {
    navLinks.style.display = "block"
    setTimeout(() => {
        navLinks.style.left = "50%";
        navLinks.style.opacity = "1";
    }, 200);
}
function hidemenu() {
    navLinks.style.left = "-100%";
    navLinks.style.opacity = "0";
    setTimeout(() => {
        navLinks.style.display = "none"
    }, 500);
}

showMenu.addEventListener('click', showmenu)
hideMenu.addEventListener('click', hidemenu)

// NAVIGATION CLICK

function linkClick() {
    if(window.innerWidth <= 980) {
        navLinks.style.left = "-100%";
        navLinks.style.opacity = "0";
        setTimeout(() => {
            navLinks.style.display = "none"
        }, 1000);
    }
}

document.querySelector('nav').querySelectorAll('li').forEach(element => {
    element.addEventListener('click', linkClick)
});