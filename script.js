const menuIcon = document.getElementById("menu-icon")
const navBar = document.querySelector(".navbar")

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navBar.classList.toggle("active")
}

const section = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".header nav a")

window.onscroll = () => {
    section.forEach((sec) => {
        let top = window.scrollY      //  Current scroll position
         let offset = sec.offsetTop - 150     // Section ka position check karta hai, 150px pehle se adjust karne ke liye 
        let height = sec.offsetHeight   // Section ki height ko store karta hai
        let id = sec.getAttribute("id")

        if (top > offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active")
                document.querySelector(`.navbar a[href="#${id}"]`).classList.add('active')
            })
        }
    })

    let header = document.querySelector(".header")
    header.classList.toggle("sticky", window.scrollY > 20)

    menuIcon.classList.remove("bx-x")
    navBar.classList.remove("active")
}

const darkmodeIcon = document.querySelector("#darkmode-icon")

darkmodeIcon.onclick = () => {
    darkmodeIcon.classList.toggle("bx-sun")
    document.body.classList.toggle("dark-mode")

}

ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal(".home-content, .heading", { origin: 'top' })

ScrollReveal().reveal(".home-img img  ", { origin: 'bottom' })

ScrollReveal().reveal(".home-content h1 , .about-img img ", { origin: 'left' })

ScrollReveal().reveal(".home-content h3 , .home-content p , .about-content ", { origin: 'right' })


ScrollReveal().reveal('.home-img img', { origin: 'right' });