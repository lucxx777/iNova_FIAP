const progressCircle = document.querySelector('.progress-circle');
const percentageText = document.querySelector('.percentage');

// Neste exemplo, o círculo de progresso completa 70% após 1 segundo.
setTimeout(() => {
 const progress = 70;
 const offset = 339.292 - (339.292 * progress) / 100;
 percentageText.textContent = progress + '%';
 progressCircle.querySelector('.progress-ring__circle').style.strokeDashoffset = offset;
}, 1000);

$('.coiso').on('click', function() {
    let txt = $('.nomeCa').text();
    $('.ncurso').text(txt);
    const a = document.querySelector('#button-curso');
    a.href = '/cursosprogramacao/aula0.html'
})

$('.coisa').on('click', function() {
    let txt = $('.nomeCb').text();
    $('.ncurso').text(txt);
    const a = document.querySelector('#button-curso');
    a.href = '/cursosdesign/aula0.html'
})

$('.coise').on('click', function() {
    let txt = $('.nomeCc').text();
    $('.ncurso').text(txt);
    const a = document.querySelector('#button-curso');
    a.href = '/cursosfullstack/aula0.html'
})