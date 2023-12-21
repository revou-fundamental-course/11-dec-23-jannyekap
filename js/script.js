function getName() { 
    let name = prompt("Hi, What is your name ?", "Yoga");
    document.getElementById("name").innerHTML = name;
 }

 function smoothScroll(id) { 
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior : 'smooth'
        });
    }
  }

function toggleMenu() {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('show');
}

function clearErrorMessage() { 
    const errorMessage = document.querySelectorAll('.error-message');
    errorMessage.forEach(function (element){
        element.textContent = '';
    });
 }

 function displayErrorMessage(elementId, message) { 
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.color = 'red';
  }

function validateForm() { 
    const fullName = document.getElementById('fullName');
    const birthDate = document.getElementById('birthDate');
    const gender = document.querySelectorAll('input[name="gender"]');
    const messages = document.getElementById('messages');

    clearErrorMessage();

    //cek jika input text nama kosong
    if (fullName.value.trim() === '') {
        displayErrorMessage('textInputError','Name cannot be empty');
        fullName.focus();
        return false;
    }

    // cek apakah tanggal sudah dipilih
    if (birthDate.value === '') {
        displayErrorMessage('dateInputError', 'Date of birth has not been selected');
        birthDate.focus();
        return false;
    }

    // cek apakah option sudah dipilih
    if (!Array.from(gender).some(option => option.checked)) {
        displayErrorMessage('radioGroupError', 'Gender has not been selected');
        return false;
    }

    // cek apakah textarea kosong
    if (messages.value.trim() === '') {
        displayErrorMessage('textareaInputError', 'Message cannot be empty');
        messages.focus();
        return false;
    }

    return true;
 }

function getValueFromForm(currTime, name, birthDate, gender, messages) {
    document.getElementById('currTime').innerHTML = currTime;
    document.getElementById('getFullName').innerHTML = name;
    document.getElementById('getBirthDate').innerHTML = birthDate;
    document.getElementById('getGender').innerHTML = gender;
    document.getElementById('getMessages').innerHTML = messages;
}

function submitForm() { 
    if (validateForm()) {
        const currTime = new Date();
        const name = document.getElementById('fullName').value;
        const birthDate = document.getElementById('birthDate').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('messages').value;

        getValueFromForm(currTime, name, birthDate, gender, message);
    }
}

const currYear = new Date().getFullYear();
document.getElementById('currYear').innerText = currYear;



// Javascript for Profile page

//slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const translationValue = -currentIndex * 100 + '%';
  document.getElementById('slider').style.transform = `translateX(${translationValue})`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}
// Optionally, add automatic slide change
setInterval(nextSlide, 5000); // Change slide every 5 seconds