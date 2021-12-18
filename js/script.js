let localizationTable = {
  en: {
    sloop:"Sloop"
  },
  pl: {
    sloop:"Slup"
  }
}

function localizeWord(language, word) {
  return (localizationTable[document.getElementById('language').value][word]);
}

function localizeAll() {
  for (element of (document.querySelectorAll('[data-localizationName]'))) {
    element.innerHTML = localizeWord('pl',element.getAttribute('data-localizationName'));
  }
}

window.onload =  localizeAll();


function updateSail(sailName) {
  document.getElementById('sailName').innerHTML = sailName;
}

function clearSail() {
  document.getElementById('sailName').innerHTML = "Hover over element";
}