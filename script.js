let input = document.getElementById('input')
let botao = document.getElementById('botao')
let video = document.getElementById('video')


botao.onclick = function () {

    console.log(input.value.replace('watch?v=', 'embed/'))

    video.src = input.value.replace('watch?v=', 'embed/')
    
}

