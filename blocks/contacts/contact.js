function services(item){
    const mainPic = item.parentElement.parentElement.parentElement.querySelector('.contact-services__main-img')
    const thisPic = item.querySelector('img')
    item.parentElement.parentElement.parentElement.querySelector('.contact-services__btn').firstChild.textContent = item.dataset.name;
    item.parentElement.parentElement.parentElement.querySelector('.contact-services__btn').dataset.name = item.dataset.name;
    mainPic.src = thisPic.src;
}
function services_path(item){
    if(item.dataset.name == "Маникюр/педикюр"){
        item.href = '/blocks/services/manic.html'
    }
    else if(item.dataset.name == "Мэйкап"){
        item.href = '/blocks/services/makeup.html'
    }
    else if(item.dataset.name == "Солярий"){
        item.href = '/blocks/services/solar.html'
    }
    else if(item.dataset.name == "Парикхмахерская"){
        item.href = '/blocks/services/barber.html'
    }
}