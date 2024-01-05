function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img

  const img = document.querySelector("#profile img")

  // subistituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/foto-light.png')
    img.setAttribute("alt","Foto de Vitor Silva, usando óculos e camisa azul, fundo azul neon",
    )
  } else {
    // se tiver sem o light mode, manter a imagem normal
    img.setAttribute("src", "./assets/foto-dark.png")
    img.setAttribute("alt","Foto de Vitor Silva, usando óculos e camisa azul, fundo azul neon",
    )
  }
}
