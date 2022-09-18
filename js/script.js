//this table should go to CSV or at least XML file for convienience
let localizationTable = {
  en: {
    sloop:"Sloop",
    ketch:"Ketch",
    brig:"Brig",
	  mainSail:"Main sail",
    mainSheet: "Main sheet",
    mainHalyard: "Main halyard",
	  jib:"Jib",
    jibSheet: "Jib sheet",
    jibHalyard: "Jib Halyard",
    mizzen: "Mizzen",
    genoa: "Genoa",
    boom: "Boom",
    mizzenBoom: "Mizzen boom",
    boomVang: "Boom vang",
    bilge: "Bilge",
    keel: "Keel",
    rudder: "Rudder",
    propeller: "Propeller",
    hull: "Hull",
    mast: "Mast",
    mainMast: "Main-mast",
    mizzenMast: "Mizzen-mast",
    backstay: "Backstay",
    forestay: "Forestay",
    innerForestay: "Inner forestay",
    triaticstay: "Triatic stay",
    superstructure: "Superstructure",
    portlight: "Portlight",
    window: "Window",
	  hoverOver:"Hover over boat element",
	  Unknown:"Part name not known",
    partNameLabel: "Part name"
  },
  pl: {
    sloop:"Slup",
    ketch:"Kecz",
    brig:"Bryg",
	  mainSail:"Grot",
    mainSheet: "Talia",
    mainHalyard: "Fał grota",
	  jib:"Fok",
    jibSheet: "Szot foka",
    jibHalyard: "Fał foka",
    mizzen: "Bezan",
    genoa: "Genua",
    boom: "Bom",
    mizzenBoom: "Bom bezana",
    boomVang: "Obciągacz bomu",
    bilge: "Dno (zęza)",
    keel: "Kil",
    rudder: "Płetwa sterowa",
    propeller: "Śruba napędowa",
    hull: "Kadłub",
    mast: "Maszt",
    mainMast: "Grotmaszt",
    mizzenMast: "Bezanmaszt",
    backstay: "Achtersztag",
    forestay: "Sztag/Topsztag",
    innerForestay: "Sztag",
    triaticstay: "Topensztag",
    superstructure: "Nadbudówka",
    portlight: "Bulaj",
    window: "Okno",
	  hoverOver:"Najedź kursorem na element",
	  Unknown:"Nazwa elementu nie znana",
    partNameLabel: "Nazwa części"
  }
}

function localizeWord(elementId) {
  word = removeLstDigitsFromId(elementId);
  return (localizationTable[document.getElementById('language').value][word]);
}

function removeLstDigitsFromId(elementId) {
  let digitRegex = /\d+/;
  return elementId.split(digitRegex)[0];
}

function localizeAll() {
  for (element of (document.querySelectorAll('[data-localizationName]'))) {
    element.innerHTML = localizeWord(element.getAttribute('data-localizationName'));
  }
}

window.onload = () => {
  localizeAll();
  chooseShip("sloop");
};


function updatePart(boatPart) {
  let localizedName = localizeWord(boatPart.id);
  if(localizedName != undefined) {
    document.getElementById('partName').innerHTML = localizedName;
  }
  else {
    document.getElementById('partName').innerHTML = localizeWord("Unknown");
  }
}

function clearPartNameWindow() {
  document.getElementById('partName').innerHTML = localizeWord("hoverOver");
}

function chooseShip(shipType) {
  let ships = document.getElementsByClassName("ship");
  console.log(ships);
  if(ships) {
    for (let ship of ships) {
      if(ship.id == shipType) {
        ship.classList.add("choosen")
        shipTypeElement = document.getElementById('shipType')           //This could be a function (change name with localizaton)
        shipTypeElement.setAttribute('data-localizationName',ship.id);  //
        shipTypeElement.innerHTML = localizeWord(ship.id);              //
      } else {
        ship.classList.remove("choosen");
      }
    };
  }
}
