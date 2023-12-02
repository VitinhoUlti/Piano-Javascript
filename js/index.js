let Game = {
  elementos: {
    ativo: document.getElementById("iaudio"),
    teclasBrancas: document.getElementsByClassName("teclabranca"),
    teclasPretas: document.getElementsByClassName("teclapreta"),
    teclas: document.getElementsByClassName("tecla")
  },
  valores: {
    
  },
  objetos: {
    audio: new Audio("Tunes")
  }
};

const playSom = (tecla) => {
    Game.objetos.audio.src = `../Tunes/${tecla}.wav`
    Game.objetos.audio.play()
}

for (let i = 0; i < Game.elementos.teclas.length; i++) {
    const element = Game.elementos.teclas[i];
    element.addEventListener("click", () => playSom(element.textContent));
    document.addEventListener("keypress", function (e) {
      if (e.key == element.textContent.toLowerCase()) {
        playSom(element.textContent);
      }
    });
}