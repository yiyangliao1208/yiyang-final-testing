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