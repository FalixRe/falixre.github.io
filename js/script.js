//this table should go to CSV or at least XML file for convienience
let localizationTable = {
  en: {
    sloop:"Sloop",
    ketch:"Ketch",
    brig:"Brig",
    skyJib: "Sky jib",
    flyingJib: "Flying jib",
    outerJib: "Outer jib",
    middleJib: "Middle jib",
    innerJib: "Inner jib",
    brigJib: "Jib",
    mainSkyStaysail: "Main sky staysail",
    mainRoyalStaysail: "Main royal staysail",
    mainTopgallantStaysail: "Main topgallant staysail",
    mainStaysail: "Main staysail",
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
    davit: "Davit", 
    bowsprit: "Bowsprit",
    dophinStriker: "Dophin striker",
    bobstay: "Bobstay",
    martingaleStay: "Martingale stay",
    foremast: "Foremast",
    foreCorseYard: "Fore course yard",
    lowerForeTopsailYard: "Lower fore topsail yard",
    upperForeTopsailYard: "Upper fore topsail yard",
    foreTopgallantYard: "Fore topgallant yard",
    foreRoyalYard: "Fore royal yard",
    foreSkyYard: "Fore sky yard",
    mast: "Mast",
    mainCourseYard: "Main course yard",
    lowerMainTopsailYard: "Lower main topsail yard",
    upperMainTopsailYard: "Upper main topsail yard",
    mainTopgallantYard: "Main topgallant yard",
    mainRoyalYard: "Main royal yard",
    mainSkyYard: "Main sky yard",
    mainMast: "Mainmast",
    mizzenMast: "Mizzen-mast",
    backstay: "Backstay",
    forestay: "Forestay",
    innerForestay: "Inner forestay",
    triaticstay: "Triatic stay",
    foreSkyStay: "Fore sky stay",
    foreFlyingStay: "Fore flying stay",
    foreRoyalStay: "Fore royal stay",
    foreTopgallantStay: "Fore topgallant stay",
    foreTopmastStay: "Fore topmast stay",
    brigForestay: "Forestay",
    mainTopmastStay: "Main topmast stay",
    mainTopgallantStay: "Main topgallant stay",
    mainRoyalStay: "Main royal stay",
    mainSkyStay:"Main sky stay",
    headStay: "Head stay",
    foreSky: "Fore sky",
    foreRoyal: "Fore royal",
    foreTopgallant: "Fore topgallant",
    upperForeTopsail: "Upper fore topsail",
    lowerForeTopsail: "Lower fore topsail",
    foreCourse: "Fore course",
    mainSky: "Main sky",
    mainRoyal: "Main royal",
    mainTopgallant: "Main topgallant",
    upperMainTopsail: "Upper main topsail",
    lowerMainTopsail: "Lower main topsail",
    mainCourse: "Main course",
    spanker: "Spanker",
    spankerBoom: "Spanker boom",
    spankerGaff: "Spanker gaff",
    aftstay: "Aftstay",
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
    skyJib: "Trumslatacz",
    flyingJib: "Latacz",
    outerJib: "Bombramkliwer",
    middleJib: "Bramkliwer",
    innerJib: "Stenkliwer",
    brigJib: "Kliwer",
    mainSkyStaysail: "Grotsztaksel",
    mainRoyalStaysail: "Grotbramsztaksel",
    mainTopgallantStaysail: "Grotbombramsztaksel",
    mainStaysail: "Grottrumsztaksel",
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
    davit: "Szlupbelki", 
    bowsprit: "Bukszpryt",
    dophinStriker: "Delfiniak",
    bobstay: "Watersztag",
    martingaleStay: "Sztag delfiniaka",
    foremast: "Fokmaszt",
    foreCorseYard: "Fokrej",
    lowerForeTopsailYard: "Dolna fokmarsreja",
    upperForeTopsailYard: "Górna fokmarsreja",
    foreTopgallantYard: "Fokbramreja",
    foreRoyalYard: "Fokbombramreja",
    foreSkyYard: "Foktrumsreja",
    mast: "Maszt",
    mainCourseYard: "Grotreja",
    lowerMainTopsailYard: "Dolna grotmarsreja",
    upperMainTopsailYard: "Górna grotmarsreja",
    mainTopgallantYard: "Grotbramreja",
    mainRoyalYard: "Grotbombramreja",
    mainSkyYard: "Grottrumsreja",
    mainMast: "Grotmaszt",
    mizzenMast: "Bezanmaszt",
    backstay: "Achtersztag",
    forestay: "Sztag/Topsztag",
    innerForestay: "Sztag",
    triaticstay: "Topensztag",
    foreSkyStay: "Sztag trumslatacza",
    foreFlyingStay: "Sztag latacza",
    foreRoyalStay: "Fokbombramsztag",
    foreTopgallantStay: "Fokbramsztag",
    foreTopmastStay: "Fokstensztag",
    brigForestay: "Foksztag",
    mainTopmastStay: "Grotstensztag",
    mainTopgallantStay: "Grotbramsztag",
    mainRoyalStay: "Grotbombramsztag",
    mainSkyStay:"Grottrumsztag",
    headStay: "Topensztag",
    foreSky: "Foktrumsel",
    foreRoyal: "Fokbombramsel",
    foreTopgallant: "Fokbramsel",
    upperForeTopsail: "Fokmarsel górny",
    lowerForeTopsail: "Fokmarsel dolny",
    foreCourse: "Fok",
    mainSky: "Grottrumsel",
    mainRoyal: "Grotbombramsel",
    mainTopgallant: "Grotbramsel",
    upperMainTopsail: "Grotmarsel górny",
    lowerMainTopsail: "Grotmarsel dolny",
    mainCourse: "Grot",
    spanker: "Sterżagiel",
    spankerBoom: "Bom sterżagla",
    spankerGaff: "Gafel sterżagla",
    aftstay: "Achtersztag",
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

/*
window.onload = function() {
  changeShiptypeAccordingToUrl(); //TODO: create
  changeLanguageAccordingToUrlOrConfig(); //TODO: separate it from urban porfolio project into different file
};
*/

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
