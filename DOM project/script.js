let AllElem = document.querySelectorAll(".elem");
let AllFullElems = document.querySelectorAll('.fullElem')

AllElem.forEach(function (elem) {
    elem.addEventListener('click', function () {
        AllFullElems[elem.id].style.display = 'block'
    })
})