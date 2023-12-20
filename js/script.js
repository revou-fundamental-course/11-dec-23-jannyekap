function getName() { 
    let name = prompt("Hai, Siapa nama Anda ?", "Yoga");
    document.getElementById("name").innerHTML = name;
 }


function toggleMenu() {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('show');
}

function getValueFromForm(currTime, name, birthDate, gender, messages) {
    document.getElementById('currTime').innerHTML = currTime;
    document.getElementById('getFullName').innerHTML = name;
    document.getElementById('getBirthDate').innerHTML = birthDate;
    document.getElementById('getGender').innerHTML = gender;
    document.getElementById('getMessages').innerHTML = messages;
}

function validateForm() { 
    const currTime = new Date();
    const name = document.forms['message-form']['fullName'].value;
    const birthDate = document.forms['message-form']['birthDate'].value;
    const gender = document.forms['message-form']['gender'].value;
    const messages = document.forms['message-form']['messages'].value;

    //Validasi input
    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada data yang kosong");
        return false;
    }

    getValueFromForm(currTime, name, birthDate, gender, messages);
    return false;

}

var currYear = new Date().getFullYear();
document.getElementById('currYear').innerText = currYear;