// Code for shutterstock...
function getKeywords() {
    var keywords = [];
    var keyList = document.querySelectorAll('[data-automation*="Keyword"] a');
    for(var i=0; i < keyList.length; i++){
    keywords.push(keyList[i].innerText);
    }
    var keydiv = document.createElement("div");
    var keyTitle = document.createElement("p");
    keydiv.style.paddingBottom = "2rem";
    keyTitle.innerText = "Keywords:";
    var keysWithComma = keywords.join(', ');
    keydiv.innerText = keysWithComma;
    keyTitle.style.fontWeight = "bold";
    keydiv.prepend(keyTitle);
    var shutterDiv = document.querySelector('[data-automation="ExpandableKeywordsList"]')
    shutterDiv.prepend(keydiv);
}

getKeywords()


// ------- END OF SHUTTERSTOCK CODE! -------


// Code for adobestock...
window.onload = function(){
  setTimeout(clickOnButton, 500);
}

function clickOnButton() {
  document.querySelector('.js-keywords-see-all.badge.badge--default.badge--large.grey.nurse').click();
  getKeywords();
}

function getKeywords() {
    var keywords = [];
    var keyList = document.querySelector('.details-right-panel');
    var keydiv = document.createElement("div");
    var x = document.querySelectorAll('#details-keywords span a.badge.badge--default.badge--large');
    for (var i = 0; i < x.length; i++) {
        keywords.push(x[i].textContent);
    }
    console.log(keywords);
    var nospaceKeys = keywords.map(function(item){
	    return item.replace(/\s+/g,' ');
    });
    console.log(nospaceKeys);
    var uniqueKeys = [];
    nospaceKeys.forEach(function(c) {
      if (!uniqueKeys.includes(c)) {
        uniqueKeys.push(c);
      }
    });
    var uniqueKeysFinal = uniqueKeys.join(',');
    var uniqueKeysLast = uniqueKeysFinal.split(/[ ,]+/).join(', ');
    var slicedKeys = uniqueKeysLast.slice(1);
    var slicedLastComma = slicedKeys.slice(0, -2);
    console.log(slicedLastComma);
    keydiv.innerText = slicedLastComma;
    keyList.append(keydiv);
}


// ------- END OF ADOBE STOCK CODE! -------
