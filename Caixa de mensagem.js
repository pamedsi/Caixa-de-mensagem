let enviar = document.querySelector('.enviar')
enviar.addEventListener('click', function () {
  // Aqui eu criei a caixa de mensagem e os botões de enviar e editar:

  let mensagem = document.querySelector('textarea')

  // Vou deixar um if aqui pra o caso de o input estar vazio

  if (mensagem.value == '') {
  } else {
    let main = document.querySelector('main')

    let section = document.createElement('section')
    section.classList.add('mensagem')
    main.appendChild(section)

    let caixa_de_mensagem = document.createElement('div')
    caixa_de_mensagem.classList.add('caixa-da-mensagem')
    section.appendChild(caixa_de_mensagem)

    let texto = document.createElement('div')
    texto.classList.add('texto-da-mensagem-enviada')
    caixa_de_mensagem.appendChild(texto)

    let botoes = document.createElement('div')
    botoes.classList.add('botoes')
    section.appendChild(botoes)

    let editar = document.createElement('button')
    editar.classList.add('editar')
    editar.innerText = 'Editar'
    botoes.appendChild(editar)

    let excluir = document.createElement('button')
    excluir.classList.add('excluir')
    excluir.innerText = 'Excluir'
    botoes.appendChild(excluir)

    // Com eles criados, vou inserir o texto digitado embaixo, na caixa criada na linha 15 aqui do JS.
    // E também fazer o texto o input ser apagado a cada mensagem enviada.

    texto.innerText = mensagem.value
    mensagem.value = ''

    // Deixando o botão "Excluir" funcional
    excluir.addEventListener('click', function () {
      section.remove()
    })

    // Deixando o botão "Editar" funcional

    editar.value = 'editar'
    editar.addEventListener('click', function () {
      if (caixa_de_mensagem.contentEditable != 'true') {
        caixa_de_mensagem.contentEditable = 'true'
        // Deixando o botão verde quando for clicado
        editar.value = 'enviar'
        editar.style.backgroundColor = 'green'
        editar.style.color = 'white'
        editar.innerText = 'Enviar'
      } // Laranja de novo quando for clicado de novamente
      else {
        caixa_de_mensagem.contentEditable = 'false'
        editar.value = 'editar'
        editar.style.backgroundColor = 'darkorange'
        editar.style.color = 'black'
        editar.innerText = 'Editar'
      }
    })
  }
})

let ave = document.querySelector('.ave')
ave.addEventListener('click', function () {
  const audio = document.querySelector('audio')
  audio.play()
})
