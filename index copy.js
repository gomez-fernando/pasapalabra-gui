const letters = [

  { letter: "a", word: ["abadía", "abandonar", "abecedario"], definition: ["Templo o monasterio que gobierna un abad o una abadesa.", "Dejar solo, sin atención, sin cuidados a una persona, un animal o una cosa.", "Conjunto de letras de un idioma ordenadas por orden alfabético."], status: 0},

  { letter: "b", word: ["babor", "bacteria", "balón"], definition: ["Parte izquierda de un barco.", "Organismo muy pequeño que a veces produce enfermedades.", "Pelota grande llena de aire que sirve para jugar y practicar deportes."], status: 0},

  { letter: "c", word: ["caña", "cabello", "cadena"], definition: ["Tallo hueco de las plantas.", "Conjunto de pelos de la cabeza de una persona.", "Conjunto de anillas o piezas de metal unidas."], status: 0},

  { letter: "d", word: ["débil", "debate", "decidir"], definition: ["Persona o cosa que tiene poca fuerza o poca resistencia.", "Discusión o intercambio de opiniones entre varias personas sobre un tema.", "Tomar una decisión."], status: 0},

  { letter: "e", word: ["educación", "efectivo", "eficacia"], definition: ["Conjunto de conocimientos, habilidades y valores que las personas aprenden a lo largo de su vida.", "Dinero en metálico. Monedas y billetes.", "Capacidad de lograr el resultado que deseamos después de realizar una acción."], status: 0},

  { letter: "f", word: ["fabada", "fachada", "dactible"], definition: ["Comida típica de Asturias que está hecha con fabas, chorizo, tocino y morcilla.", "Parte exterior de un edificio.", " Posible o que puede hacerse realidad."], status: 0},

  { letter: "g", word: ["gabardina", "galleta", "gargantilla"], definition: ["Prenda de vestir impermeable. Es larga y cubre desde el cuello hasta las rodillas.", "Dulce que está hecho con harina, azúcar y huevo de formas diferetes y cocido en el horno.", "Collar corto. Suele ser ajustado alrededor del cuello."], status: 0},

  { letter: "h", word: ["habilidad", "habitación", "hablar"], definition: ["Cualidad de la persona que puede hacer cosas bien y con mucha facilidad.", "Parte de una vivienda o edificio que está separada de las demás por paredes.", "Comunicarse con alguien generalmente a través de palabras."], status: 0},

  { letter: "i", word: ["icono", "idea", "iglesia"], status: 0, definition: ["Dibujo que tiene un parecido con el objeto que representa.", "Imagen o representación de algo o alguien en la mente.", "Edificio al que las personas van a escuchar misa, a rezar o a celebrar actos religiosos."]},

  { letter: "j", word: ["jabalina", "jabón", "jactarse"], definition: ["Vara parecida a una lanza utilizada en competiciones deportivas.'Producto que sirve para lavar.", "Hablar bien de uno mismo, presumir o alardear de uno mismo por algo."], status: 0},

  { letter: "k", word: ["karate", "kilómetro", "kiwi"], definition: ["Arte marcial japonés que consiste en dar golpes secos con los pies, los codos y el borde de la mano.", "Medida que sirve para medir la distancia entre dos lugares.", "Fruta con forma de huevo, de piel peluda de color marrón y carne comestible verde."], status: 0},

  { letter: "l", word: ["laberinto", "laboratorio", "lactosa"], status: 0, definition: ["Lugar construido con muchas calles o pasillos que se cruzan y en el que es muy difícil orientarse.", "Lugar en el que se hacen experimentos y trabajos generalmente relacionados con la ciencia.", "Azúcar que tiene la leche de forma natural."]},

  { letter: "m", word: ["maíz", "mañana", "madriguera"], definition: ["Planta de tallo largo y hojas grandes. La mazorca es la parte comestible de la planta.", "Día siguiente al de hoy.", "Cueva donde viven y se esconden algunos animales, como los conejos."], status: 0},

  { letter: "n", word: ["nacionalidad", "nadar", "negociar"], definition: ["Pertenencia de una persona a una nación.", "Avanzar en el agua moviendo el cuerpo y sin apoyos.", "Discutir las condiciones de un asunto o acuerdo."], status: 0},

  { letter: "ñ", word: ["ñoñería", "ñoño", "ñu"], status: 0, definition: ["Acción o palabra ñoña.", "Algo soso o con poca gracia.", " Animal mamífero d gran tamaño, con cabeza de toro. Tiene pelo pardo o gris y una larga cola."]},

  { letter: "o", word: ["obedecer", "oferta", "orar"], status: 0, definition: ["Hacer caso a lo que dice u ordena una ley o una persona.", "Venta de algo por un precio más barato de lo normal.", "Rezar, pedir o dar gracias a Dios."]},

  { letter: "p", word: ["paciencia", "padrón", "pavimento"], definition: ["Capacidad de aguantar situaciones desagradables, dolorosas, ofensivas o pesadas sin quejarse.", "Censo, lista de ciudadanos registrados en un pueblo o ciudad.", "Superficie lisa que cubre el suelo de calles y carreteras."], status: 0},

  { letter: "q", word: ["quebrar", "quimera", "quinteto"], definition: ["Romper algo de forma violenta.", "Cosa que alguien imagina que es posible o real, pero no lo es.", "Grupo de 5 personas o cosas."], status: 0},

  { letter: "r", word: ["raíz", "rabia", "racimo"], definition: ["Parte de la planta que crece bajo tierra. ", "Enfermedad que sufren algunos animales, como los perros, los murciélagos o los gatos.", "Conjunto de frutas que cuelgan de un solo tallo."], status: 0},

  { letter: "s", word: ["sabor", "sacacorchos", "símbolo"], definition: ["Cualidad de las sustancias o los alimentos que se nota a través del gusto en la lengua.", "Utensilio de metal que sirve para quitar los tapones de corcho a las botellas.", "Signo, dibujo u objeto que sirve para representar una idea."], status: 0},

  { letter: "t", word: ["tahona", "tambor", "tapa"], definition: ["Sitio donde los panaderos hacen el pan.", "Instrumento musical de percusión. Está formado por una caja cerrada con cuero tensado.", "Pieza que sirve para cerrar o cubrir un bote o una caja."], status: 0},

  { letter: "u", word: ["unicornio", "unificar", "urano"], definition: ["Animal imaginario parecido al caballo con un cuerno en la frente.", "Unir cosas que están separadas para lograr una sola.", "Séptimo planeta del sistema solar. Tiene un sistema de anillos a su alrededor y muchos satélites."], status: 0},

  { letter: "v", word: ["vacaciones", "valle", "verificar"], definition: ["Tiempo de descanso de una actividad habitual, como el trabajo o los estudios.", "Terreno llano que hay entre las montañas.", "CON LA V. Comprobar que algo es verdadero o exacto."], status: 0},

  { letter: "w", word: ["web", "whisky", "waterpolo"], definition: ["Red informática en la que hay mucha información repartida en páginas y sitios.", "Bebida alcohólica fuerte y de color marrón.", "Deporte de piscina en el que dos equipos tratan de marcar goles en la portería contraria."], status: 0},

  { letter: "x", word: ["xenofobia", "xerografía", "xilófono"], definition: ["Odio a los extranjeros o a las cosas de otros países.", "Proceso de copia de un texto o una imagen en papel mediante una máquina.", "Instrumento musical formado por listones de madera o metal de diferentes tamaños."], status: 0},
  
  { letter: "y", word: ["yacimiento", "yate", "yegua"], definition: ["Lugar en el que hay gran cantidad de un mineral, una roca o restos de antiguas culturas.", "Embarcación de recreo.", "Hembra del caballo."], status: 0},
  
  { letter: "z", word: ["zafiro", "zaga", "zanahoria"], definition: ["Piedra preciosa de color azul. Es tan valiosa como los diamantes.", "Parte posterior de algo. Por ejemplo de un coche.", "Planta con flores blancas y moradas. Tiene una raíz de color naranja que es comestible."], status: 0} 
];

let lettersForRound = [];
let indexLetters = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let time = 240;
const resetTime = time;
let startButton = document.querySelector('#start');
let model = letters[0];

const generateRound = () =>  letters.forEach((el) => {
  let getRandom = Math.floor(Math.random() * el.definition.length);
  lettersForRound.push({letter: el.letter, word: el.word[getRandom], definition: el.definition[getRandom], status: el.status});    
});

const start = () => {
  generateRound();
  startButton.addEventListener('click', newQuestion);
  startButton.addEventListener('click', countDown);
  startButton.addEventListener('click', () => {startButton.remove()});

}

const newQuestion = () => {
  if(lettersForRound[indexLetters].status === 0){
    let writeQuestion = document.createElement('p');
    writeQuestion.textContent = lettersForRound[indexLetters].definition;

    let responseInput = document.createElement('input');
    responseInput.setAttribute('id', 'answer');
    responseInput.classList.add('placeholder');

    let responseButton = document.createElement('button');
    responseButton.setAttribute('id', 'responseButton');
    responseButton.textContent = 'OK';
    responseButton.classList.add('inputsQuestion');

    let exitButton = document.createElement('button');
    exitButton.setAttribute('id', 'exitButton');
    exitButton.textContent = 'TERMINAR PARTIDA';
    exitButton.classList.add('inputsQuestion');

    let definition = document.querySelector('#definitions');
    definition.appendChild(writeQuestion);
    definition.appendChild(responseInput);
    definition.appendChild(responseButton);
    definition.appendChild(exitButton);
    
    responseButton.addEventListener('click', evalResponse);
    exitButton.addEventListener('click',exit);
    responseInput.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
          event.preventDefault();
          responseButton.click();
      }
    });       
  } else{
      indexLetters++;

      if(indexLetters <= (lettersForRound.length - 1)){
          newQuestion();
      }else{
          newRound();
      }
  }

  if(indexLetters <= (lettersForRound.length - 1)){
      document.querySelector('#answer').focus(); 

  }
}

const evalResponse = () => {
  let responseInput = document.querySelector('#answer');
  let wordSave = responseInput.value;
  let wordList = lettersForRound[indexLetters].word;
  let letter = document.querySelector(`#l-${lettersForRound[indexLetters].letter}`);
  let delDefinition = document.querySelector('#definitions');

  if(wordSave.toLowerCase() === wordList){
    letter.classList.add("turnGreen");
    rightAnswers++;
    delDefinition.innerHTML = '';
    lettersForRound[indexLetters].status = 1;
  }else if(wordSave.toLowerCase() === 'pasapalabra'){
    delDefinition.innerHTML = '';
    lettersForRound[indexLetters].status = 0;
  }else if(wordSave.toLowerCase() !== wordList ){
    letter.classList.add("turnRed");
    wrongAnswers++;
    delDefinition.innerHTML = `La respuesta correcta es: ${wordList}.`;
    lettersForRound[indexLetters].status = -1;
  }

  indexLetters++;

  if(indexLetters <= (lettersForRound.length - 1)){
    newQuestion();
  }else{
      newRound();
  }
};
const exit = () => {
  clearInterval(timing);
  let showRightAnswers = document.querySelector('#definitions');
  showRightAnswers.innerHTML = '';

  let writeResults = document.createElement('p');
  let writeTime = document.createElement('p');
  let playAgain = document.createElement('responseButton');

  writeResults.textContent = `Letras acertadas: ${rightAnswers}`;

  if(time === -1){
    alert("Se ha agotado el tiempo :(")
  }else{
    let tx1;
    (time === 1)
    ? tx1 = `segundo`
    : tx1 = `segundos`;

    writeTime.textContent = `Tiempo restante: ${time + 1} ${tx1}.`;
  }

  playAgain.textContent = 'JUGAR OTRA VEZ';
  playAgain.classList.add('placeholder');

  showRightAnswers.appendChild(writeResults);
  showRightAnswers.appendChild(writeTime);
  showRightAnswers.appendChild(playAgain);

  playAgain.addEventListener('click', () => {
    let div = document.querySelector('#definitions');
    div.textContent = '';
  });

  rightAnswers = 0;
  wrongAnswers = 0;
  playAgain.addEventListener('click', reStart);
}

const newRound = () => {
if((rightAnswers + wrongAnswers) === letters.length){
  exit();
} else {
    indexLetters = 0;
    let newLetForR = [];

    lettersForRound.forEach((el) => {
      if(el.status === 0){
      newLetForR.push({letter: el.letter, word: el.word, definition: el.definition, status: el.status}); 
      }
    });

    lettersForRound = newLetForR;

    newQuestion();
}
};

const reStart = () => {
  lettersForRound = [];
  generateRound();

  let letters = document.querySelectorAll('.letter');

  letters.forEach((el) => {
    el.classList.remove('turnGreen');
    el.classList.remove('turnRed');
  })

  time = resetTime;
  indexLetters = 0;
  rightAnswers = 0;
  countDown();
  newQuestion();
}

const countDown = () => {
  let countDown = document.querySelector('#countdown');
  timing = setInterval(() => {
    countDown.innerHTML = time;
    time--;
    if(time === -1){
        clearInterval(timing);
        exit();
    }
  },1000);
};

start();
