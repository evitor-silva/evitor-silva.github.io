
window.addEventListener('load', () => {
      document.querySelector('.loading-wrapper').style.display = 'none';
})

document.querySelector('.lista > li').addEventListener("click", ()=>{
      document.querySelector('.menu-mobile').classList.toggle("show")
})
document.querySelector('.menu-close').addEventListener("click", ()=>{
      document.querySelector('.menu-mobile').classList.toggle("show")
})

