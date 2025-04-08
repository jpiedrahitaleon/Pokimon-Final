const pokemonesDisponibles = {
    pitachun: { ataque: 55, velocidad: 90,HP: 310, imagen: "../assets/img/pitachu-removebg-preview.png" },
    quemander: { ataque: 52, velocidad: 65,HP: 282, imagen: "../assets/img/merchander-removebg-preview.png" },
    bulbaloo: { ataque: 49, velocidad: 45, HP: 294,imagen: "../assets/img/bulbaloo2-removebg-preview.png" },
    escurrete: { ataque: 48, velocidad: 43,HP: 292, imagen: "../assets/img/Escurrete-removebg-preview.png" },
    eevee: { ataque: 55, velocidad: 55,  HP: 314, imagen: "../assets/img/evee-removebg-preview.png" },
  };
  
  function iniciarCombate() {
    const entrenador = localStorage.getItem("entrenadorSeleccionado");
    const pokemonUsuario = localStorage.getItem("pokemonSeleccionado");
  
    if (!entrenador || !pokemonUsuario) {
      alert("Selecciona un entrenador y un Pokémon antes de combatir.");
      window.location.href = "Entrenador.html";
      return;
    }
  
    const nombresPokemones = Object.keys(pokemonesDisponibles);
    const pokemonMaquina = nombresPokemones[Math.floor(Math.random() * nombresPokemones.length)];
  
    const statsUsuario = pokemonesDisponibles[pokemonUsuario.toLowerCase()];
    const statsMaquina = pokemonesDisponibles[pokemonMaquina.toLowerCase()];
  
    document.getElementById("entrenador-nombre").textContent = entrenador;
    document.getElementById("pokemon-usuario").textContent = pokemonUsuario;
    document.getElementById("img-usuario").src = statsUsuario.imagen;
  
    document.getElementById("pokemon-maquina").textContent = pokemonMaquina;
    document.getElementById("img-maquina").src = statsMaquina.imagen;
  
    const poderUsuario = statsUsuario.ataque + statsUsuario.velocidad;
    const poderMaquina = statsMaquina.ataque + statsMaquina.velocidad;
  
    let resultado = "¡Empate!";
    if (poderUsuario > poderMaquina) {
      resultado = "¡Ganaste!";
    } else if (poderUsuario < poderMaquina) {
      resultado = "Perdiste 😢";
    }
  
    document.getElementById("resultado").textContent = resultado;
  }
  
  window.onload = iniciarCombate;