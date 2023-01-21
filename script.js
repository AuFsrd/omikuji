const tirageDiv = document.querySelector(".tirage")
const tirageBtn = document.querySelector("button")
const omikuji = document.querySelector(".omikuji")
const stick = document.querySelector(".stick")
const result = document.querySelector(".result")
const resultText = document.querySelector(".result-text")
const s1 = document.getElementById("s1")
const s2 = document.getElementById("s2")
const s3 = document.getElementById("s3")
const s4 = document.getElementById("s4")
const scroll = document.querySelector(".scroll")

tirageBtn.addEventListener("click", shake)
omikuji.addEventListener("click", shake)

function randomNb(min, max) {
  const UintArray = new Uint32Array(1)
  crypto.getRandomValues(UintArray)
  let nb = UintArray[0] / 4294967296
  return Math.floor(nb * (max - min + 1)) + min
}

let tirageDone = true;

function shake() {
  if (!tirageDone) {
    console.log("Le tirage n'est pas fini")
    return
  }

  tirageDone = false  
  omikuji.classList.add("shake")
  stick.classList.remove("hang")
  stick.classList.add("stickdown")
  tirageDiv.classList.add("closed")
  scroll.classList.add("scroll-closed")
  s1.classList.remove("bene", "male")
  s2.classList.remove("bene", "male")
  s3.classList.remove("bene", "male")
  s4.classList.remove("bene", "male")
  setTimeout(tirage, 2000)
}

function tirage() {
  tirageResult = randomNb(-1, 1)+randomNb(-1, 1)+randomNb(-1, 1)+randomNb(-1, 1)
  result.innerText = tirageResult
  resultText.innerHTML = resultGen(tirageResult)
  
  omikuji.classList.remove("shake")
  stick.classList.remove("stickdown")
  stick.classList.add("hang")
  tirageDiv.classList.remove("closed")
  scroll.classList.remove("scroll-closed")
  tirageDone = true;
}

function resultGen (result) {
  switch (result) {
    case -4:
      s1.classList.add("male")
      s2.classList.add("male")
      s3.classList.add("male")
      s4.classList.add("male")
      return '<p class="kanji">大凶</p><p class="outcome">Grande malédiction</p>'
    case -3:
      s1.classList.add("male")
      s2.classList.add("male")
      s3.classList.add("male")
      return '<p class="kanji">中凶</p><p class="outcome">Malédiction moyenne</p>'
    case -2:
      s1.classList.add("male")
      s2.classList.add("male")
      return '<p class="kanji">小凶</p><p class="outcome">Petite malédiction</p>'
    case -1:
      s1.classList.add("male")
      return '<p class="kanji">半凶</p><p class="outcome">Demi-malédiction</p>'
    case 0:
      return '<p class="kanji">無</p><p class="outcome">Rien ne se passe...</p>'
    case 1: 
      s1.classList.add("bene")
      return '<p class="kanji">半吉</p><p class="outcome">Demi-bénédiction</p>'
    case 2: 
      s1.classList.add("bene")
      s2.classList.add("bene")
      return '<p class="kanji">小吉</p><p class="outcome">Petite bénédiction</p>'
    case 3:
      s1.classList.add("bene")
      s2.classList.add("bene")
      s3.classList.add("bene")
      return '<p class="kanji">中吉</p><p class="outcome">Bénédiction moyenne</p>'
    case 4: 
      s1.classList.add("bene")
      s2.classList.add("bene")
      s3.classList.add("bene")
      s4.classList.add("bene")
      return '<p class="kanji">大吉</p><p class="outcome">Grande bénédiction</p>'
  }
}


// TO DO
// - Afficher le bon nombre de rayures