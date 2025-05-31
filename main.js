const nav = document.getElementById('nav')
const navLinks = document.querySelectorAll('.nav-link')
const lightColor = '#ececec'
const darkColor = '#2e2e2e'

window.addEventListener("scroll", () => {
    console.log('test')
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight

    let scrollRatio = Math.min(scrollY / windowHeight, 1)
    nav.style.backgroundColor = `rgba(1, 86, 29, ${scrollRatio})`

    if(scrollRatio > .5){
        nav.style.color = lightColor
        navLinks.forEach(link => link.style.color = lightColor)
    }
    else{
        nav.style.color = darkColor
        navLinks.forEach(link => link.style.color = darkColor)
        
    }
})