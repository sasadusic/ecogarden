const nav = document.getElementById('nav')
const hamburger = document.getElementById('hamburger')
const navLinks = document.querySelectorAll('.nav-link')
const lightColor = '#ececec'
const darkColor = '#2e2e2e'

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    if(windowWidth > 992){

        
        let scrollRatio = Math.min(scrollY / windowHeight, 1)
        nav.style.backgroundColor = `rgba(24, 78, 77, ${scrollRatio})`
        
        if(scrollRatio > .5){
            nav.style.color = lightColor
            navLinks.forEach(link => link.style.color = lightColor)
        }
        else{
            nav.style.color = darkColor
            navLinks.forEach(link => link.style.color = darkColor)
            
        }
    }
})
hamburger.onclick = () => {
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
}