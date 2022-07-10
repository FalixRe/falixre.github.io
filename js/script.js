//this table should go to CSV or at least XML file for convienience
let localizationTable = {
  en: {
    sloop:"Sloop",
	  mainSail:"Main sail",
    mainSheet: "Main sheet",
    mainHalyard: "Main halyard",
	  jib:"Jib",
    jibSheet: "Jib sheet",
    jibHalyard: "Jib Halyard",
    boom: "Boom",
    boomVang: "Boom vang",
    bilge: "Bilge",
    keel: "Keel",
    rudder: "Rudder",
    hull: "Hull",
    mast: "Mast",
    backstay: "Backstay",
    forestay: "Forestay",
    superstructure: "Superstructure",
    portlight: "Portlight",
	  hoverOver:"Hover over boat element",
    partNameLabel: "Part name"
  },
  pl: {
    sloop:"Slup",
	  mainSail:"Grot",
    mainSheet: "Talia",
    mainHalyard: "Fał grota",
	  jib:"Fok",
    jibSheet: "Szot foka",
    jibHalyard: "Fał foka",
    boom: "Bom",
    boomVang: "Obciągacz bomu",
    bilge: "Dno (zęza)",
    keel: "Kil",
    rudder: "Płetwa sterowa",
    hull: "Kadłub",
    mast: "Maszt",
    backstay: "Achtersztag",
    forestay: "Sztag",
    superstructure: "Nadbudówka",
    portlight: "Bulaj",
	  hoverOver:"Najedź kursorem na element",
    partNameLabel: "Nazwa części"
  }
}

function localizeWord(word) {
  return (localizationTable[document.getElementById('language').value][word]);
}

function localizeAll() {
  for (element of (document.querySelectorAll('[data-localizationName]'))) {
    element.innerHTML = localizeWord(element.getAttribute('data-localizationName'));
  }
}

window.onload =  localizeAll();


function updatePart(boatPart) {
  let localizedName = localizeWord(boatPart.id);
  if(localizedName != undefined) {
    document.getElementById('partName').innerHTML = localizeWord(boatPart.id);
  }
}

function clearSail() {
  document.getElementById('partName').innerHTML = localizeWord("hoverOver");
}