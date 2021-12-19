let localizationTable = {
  en: {
    sloop:"Sloop",
	mainSail:"Main sail",
	foreSail:"Fore sail",
	hoverOver:"Hover over element"
  },
  pl: {
    sloop:"Slup",
	mainSail:"Grot",
	foreSail:"Fok",
	hoverOver:"Najedź kursorem na element"
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


function updateSail(sailName) {
  document.getElementById('sailName').innerHTML = localizeWord(sailName);
}

function clearSail() {
  document.getElementById('sailName').innerHTML = localizeWord("hoverOver");
}