let imgList = {
    "carrie": [
        'images/Carrie/1.PNG',
        'images/Carrie/2.jpg',
        'images/Carrie/3.jpg',
        'images/Carrie/4.jpg',
        'images/Carrie/5.jpg',
        'images/Carrie/6.jpg',
        'images/Carrie/7.jpg',
        'images/Carrie/8.jpg',
        'images/Carrie/9.jpg',
        'images/Carrie/10.jpg',
        'images/Carrie/11.jpg',
        'images/Carrie/12.jpg',
        'images/Carrie/13.jpg',
        'images/Carrie/14.jpg',
        'images/Carrie/15.jpg',
        'images/Carrie/16.jpg',
        'images/Carrie/17.jpg',
        'images/Carrie/18.jpg',
        'images/Carrie/19.jpg',
        'images/Carrie/20.jpg',
        'images/Carrie/21.jpg',
        'images/Carrie/22.jpg',
        'images/Carrie/23.jpg',
        'images/Carrie/24.jpg',
        'images/Carrie/25.jpg',
    ],
    "charlotte": [
        'images/Charlotte/1.jpg',
        'images/Charlotte/2.jpg',
        'images/Charlotte/3.jpg',
        'images/Charlotte/4.jpg',
        'images/Charlotte/5.jpg',
        'images/Charlotte/6.jpg',
        'images/Charlotte/7.jpg',
        'images/Charlotte/8.jpg',
        'images/Charlotte/9.jpg',
        'images/Charlotte/10.jpg',
        'images/Charlotte/11.jpg',
        'images/Charlotte/12.jpg',
        'images/Charlotte/13.jpg',
        'images/Charlotte/14.jpg',
        'images/Charlotte/15.jpg',
        'images/Charlotte/16.jpg',
        'images/Charlotte/17.jpg',
        'images/Charlotte/18.jpg',
        'images/Charlotte/19.jpg',
        'images/Charlotte/20.jpg',
        'images/Charlotte/21.jpg',
        'images/Charlotte/22.jpg',
        'images/Charlotte/23.jpg',
        'images/Charlotte/24.jpg',
        'images/Charlotte/25.jpg'
    ],
    "miranda": [
        'images/Miranda/1.jpg',
        'images/Miranda/2.jpg',
        'images/Miranda/3.jpg',
        'images/Miranda/4.jpg',
        'images/Miranda/5.jpg',
        'images/Miranda/6.jpg',
        'images/Miranda/7.jpg',
        'images/Miranda/8.jpg',
        'images/Miranda/9.jpg',
        'images/Miranda/10.jpg',
        'images/Miranda/11.jpg',
        'images/Miranda/12.jpg',
        'images/Miranda/13.jpg',
        'images/Miranda/14.jpg',
        'images/Miranda/15.jpg',
        'images/Miranda/16.jpg',
        'images/Miranda/17.jpg',
        'images/Miranda/18.jpg',
        'images/Miranda/19.jpg',
        'images/Miranda/20.jpg',
        'images/Miranda/21.jpg',
        'images/Miranda/22.jpg',
        'images/Miranda/23.jpg',
        'images/Miranda/24.jpg',
        'images/Miranda/25.jpg'
    ],
    "samantha": [
        'images/Samantha/1.jpg',
        'images/Samantha/2.jpg',
        'images/Samantha/3.jpg',
        'images/Samantha/4.jpg',
        'images/Samantha/5.jpg',
        'images/Samantha/6.jpg',
        'images/Samantha/7.jpg',
        'images/Samantha/8.jpg',
        'images/Samantha/9.jpg',
        'images/Samantha/10.jpg',
        'images/Samantha/11.jpg',
        'images/Samantha/12.jpg',
        'images/Samantha/13.jpg',
        'images/Samantha/14.jpg',
        'images/Samantha/15.jpg',
        'images/Samantha/16.jpg',
        'images/Samantha/17.jpg',
        'images/Samantha/18.jpg',
        'images/Samantha/19.jpg',
        'images/Samantha/20.jpg',
        'images/Samantha/21.jpg',
        'images/Samantha/22.jpg',
        'images/Samantha/23.jpg',
        'images/Samantha/24.jpg',
        'images/Samantha/25.jpg'
    ],
}
let indexText = 'carrie'
let menu_ = document.querySelectorAll(".menu_")

function createImg() {
    for(let i = 0; i < menu_.length; i++){
        menu_[i].classList.remove('active')
    }
    let img_list = document.querySelector(".img_list")
    let htmlDom = ``
    for(let i = 0; i < imgList[indexText].length; i++){
        htmlDom = htmlDom + `<img src="${imgList[indexText][i]}">`
    }
    img_list.innerHTML = htmlDom
}
for(let i = 0; i < menu_.length; i++){
    menu_[i].addEventListener('click',function () {
        switch (i) {
            case 0:
                indexText = 'carrie'
                break
            case 1:
                indexText = 'charlotte'
                break
            case 2:
                indexText = 'miranda'
                break
            case 3:
                indexText = 'samantha'
                break
        }
        createImg()
        this.classList.add('active')
    })
}
createImg()
menu_[0].classList.add('active')
