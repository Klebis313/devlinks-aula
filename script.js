function toogleMode() {
  const CONTEUDO = document.body
  CONTEUDO.classList.toggle("light")

  let avatar = CONTEUDO.querySelector("div#main header img")

  if (CONTEUDO.classList.contains("light")) {
    avatar.setAttribute("src", "./assets/avatar.jpg")
  } else {
    avatar.setAttribute("src", "./assets/avatar light.jpg")
  }
}
