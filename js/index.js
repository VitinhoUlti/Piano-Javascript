let Game = {
  elementos: {
    ativo: document.getElementById("iaudio"),
    teclasBrancas: document.getElementsByClassName("teclabranca"),
    teclasPretas: document.getElementsByClassName("teclapreta"),
    teclas: document.getElementsByClassName("tecla"),
    main: document.querySelector("main")
  },
  valores: {
    volume: document.getElementById("ivolume").value
  },
  objetos: {
    audio: new Audio("Tunes")
  }
};

const playSom = (tecla) => {
    Game.objetos.audio.volume = Game.valores.volume*100
    Game.objetos.audio.src = `./Tunes/${tecla.toLowerCase()}.wav`
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

const EscondaTecla = () => {
  for (let i = 0; i < Game.elementos.teclas.length; i++) {
    const element = Game.elementos.teclas[i];
    element.classList.toggle("esconda")
  }
}

  Game.elementos.ativo.addEventListener("click", () => EscondaTecla())