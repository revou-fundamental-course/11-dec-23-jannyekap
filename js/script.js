function getName() { 
    let name = prompt("Hai, Siapa nama Anda ?", "Yoga");
    document.getElementById("name").innerHTML = name;
 }


function toggleMenu() {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('show');
}