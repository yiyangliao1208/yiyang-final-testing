let imgList = {
    "carrie": [
        'images/Carrie/1.PNG',
        'images/Carrie/2.jpg',
        'images/Carrie/3.jpg',
        'images/Carrie/4.jpg',
        'images/Carrie/5.JPG',
        'images/Carrie/6.JPG',
        'images/Carrie/7.JPG',
        'images/Carrie/8.JPG',
        'images/Carrie/9.JPG',
        'images/Carrie/10.JPG',
        'images/Carrie/11.JPG',
        'images/Carrie/12.JPG',
        'images/Carrie/13.JPG',
        'images/Carrie/14.JPG',
        'images/Carrie/15.JPG',
        'images/Carrie/16.jpg',
        'images/Carrie/17.JPG',
        'images/Carrie/18.jpg',
        'images/Carrie/19.JPG',
        'images/Carrie/20.JPG',
        'images/Carrie/21.JPG',
        'images/Carrie/22.jpg',
        'images/Carrie/23.jpg',
        'images/Carrie/24.jpg',
        'images/Carrie/25.JPG',
    ],
    "charlotte": [
        'images/Charlotte/1.jpg',
        'images/Charlotte/2.JPG',
        'images/Charlotte/3.JPG',
        'images/Charlotte/4.JPG',
        'images/Charlotte/5.jpg',
        'images/Charlotte/6.jpg',
        'images/Charlotte/7.jpg',
        'images/Charlotte/8.jpg',
        'images/Charlotte/9.JPG',
        'images/Charlotte/10.JPG',
        'images/Charlotte/11.jpg',
        'images/Charlotte/12.jpg',
        'images/Charlotte/13.jpg',
        'images/Charlotte/14.JPG',
        'images/Charlotte/15.jpg',
        'images/Charlotte/16.JPG',
        'images/Charlotte/17.jpg',
        'images/Charlotte/18.jpg',
        'images/Charlotte/19.jpg',
        'images/Charlotte/20.jpg',
        'images/Charlotte/21.jpg',
        'images/Charlotte/22.jpg',
        'images/Charlotte/23.JPG',
        'images/Charlotte/24.JPG',
        'images/Charlotte/25.JPG'
    ],
    "miranda": [
        'images/Miranda/1.JPG',
        'images/Miranda/2.JPG',
        'images/Miranda/3.jpg',
        'images/Miranda/4.jpg',
        'images/Miranda/5.JPG',
        'images/Miranda/6.JPG',
        'images/Miranda/7.JPG',
        'images/Miranda/8.JPG',
        'images/Miranda/9.jpg',
        'images/Miranda/10.jpg',
        'images/Miranda/11.jpg',
        'images/Miranda/12.jpg',
        'images/Miranda/13.JPG',
        'images/Miranda/14.JPG',
        'images/Miranda/15.JPG',
        'images/Miranda/16.JPG',
        'images/Miranda/17.JPG',
        'images/Miranda/18.JPG',
        'images/Miranda/19.JPG',
        'images/Miranda/20.JPG',
        'images/Miranda/21.JPG',
        'images/Miranda/22.JPG',
        'images/Miranda/23.JPG',
        'images/Miranda/24.JPG',
        'images/Miranda/25.JPG'
    ],
    "samantha": [
        'images/Samantha/1.jpg',
        'images/Samantha/2.jpg',
        'images/Samantha/3.jpg',
        'images/Samantha/4.JPG',
        'images/Samantha/5.jpg',
        'images/Samantha/6.jpg',
        'images/Samantha/7.jpg',
        'images/Samantha/8.jpg',
        'images/Samantha/9.JPG',
        'images/Samantha/10.JPG',
        'images/Samantha/11.jpg',
        'images/Samantha/12.jpg',
        'images/Samantha/13.JPG',
        'images/Samantha/14.jpg',
        'images/Samantha/15.JPG',
        'images/Samantha/16.JPG',
        'images/Samantha/17.JPG',
        'images/Samantha/18.JPG',
        'images/Samantha/19.JPG',
        'images/Samantha/20.JPG',
        'images/Samantha/21.JPG',
        'images/Samantha/22.jpg',
        'images/Samantha/23.JPG',
        'images/Samantha/24.JPG',
        'images/Samantha/25.JPG'
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
