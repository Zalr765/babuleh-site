const header_nav = document.querySelectorAll('.header-menu__list--item');
const fadeIn = (el, timeout, display) => {
    el.style.opacity = 0;
    el.style.display = display || 'block';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
      el.style.opacity = 1;
    }, 10);
}
const fadeOut = (el, timeout) => {
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;
  
    setTimeout(() => {
      el.style.opacity = 0;
    }, timeout);
}


header_nav.forEach((item)=>{
     item.querySelector('a').addEventListener("mouseover", (e)=>{
        // item.querySelector('img').style.opacity= '1';
        fadeIn(item.querySelector('img'), 500, 'block')
        
    })
    item.querySelector('a').addEventListener("mouseout", (e)=>{
        if(e.target.parent == item.querySelector('.header-menu__list--active'))
        {
            fadeOut(item.querySelector('img'), 500)
        }
    })
})