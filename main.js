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
function getKeywords() {
    var keywords = [];
    var keyList = document.querySelector('.column.on-small-12.on-medium-12.on-large-6.details-right-panel');
    var x = document.querySelectorAll('#details-keywords span a.badge.badge--default.badge--large');
    for (var i = 0; i < x.length; i++) {
        keywords.push(x[i].innerText.trim());
    }
    var newKeys = keywords.join(', ');
    var keydiv = document.createElement("div");
    keydiv.style.paddingBottom = "2rem";
    var keyTitle = document.createElement("p");
    keyTitle.innerText = "Keywords:";
    keydiv.innerText = newKeys;
    keyTitle.style.fontWeight = "bold";
    keydiv.prepend(keyTitle);
    var keysDiv = document.querySelector('[data-t="keywords-section"]');
    keysDiv.prepend(keydiv);
}

getKeywords();
