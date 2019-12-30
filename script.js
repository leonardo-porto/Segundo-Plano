let input = document.getElementById('input')
let botao = document.getElementById('botao')
let video = document.getElementById('video')


botao.onclick = function () {

    

    video.src = input.value.replace('.com', '.com/embed/')
    
}

