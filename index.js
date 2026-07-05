let soal = document.getElementById("soal")
let yes = document.getElementById("yes")
let no = document.getElementById("no")
let tedad = 0

soal.textContent = "Will you come out with me?"

function harekat() {
    console.log(tedad)
    tedad += 1

    let parent = document.querySelector(".pasokh")

    let parentWidth = parent.clientWidth
    let parentHeight = parent.clientHeight

    let noWidth = no.offsetWidth
    let noHeight = no.offsetHeight

    let maxX = parentWidth - noWidth
    let maxY = parentHeight - noHeight

    let x = Math.random() * maxX
    let y = Math.random() * maxY

    no.style.left = x + "px"
    no.style.top = y + "px"

    if (tedad >= 4) {
        soal.textContent = "COME ON LET ME GO...."
    }
    if (tedad >= 8) {
        soal.textContent = "YOU ARE MAKING ME ANGRY😡"
    }
    if (tedad >= 16) {
        no.style.display = "none"
        soal.textContent = "I ask again, will you come out with me?😏"
        yes.style.width = "200px"
        yes.style.marginRight = "-100px"
    }
}

yes.addEventListener("click", function () {
    yes.style.width = "200px"
    yes.style.marginRight = "-100px"
    no.style.display = "none"
    soal.textContent = "GOOD CHOICE ;)"

    yes.style.color = "black"
    yes.style.fontSize = "30px"
    yes.value = "5"
    setTimeout(function () { yes.value = "4" }, 1000)
    setTimeout(function () { yes.value = "3" }, 2000)
    setTimeout(function () { yes.value = "2" }, 3000)
    setTimeout(function () { yes.value = "1" }, 4000)
    setTimeout(function () { yes.value = "0" }, 5000)

    setTimeout(function () { window.location.href = "https://web.bale.ai/chat?uid=1882000158"; }, 5500)
})

no.addEventListener("mouseover", function () {
    harekat()
})
no.addEventListener("click", function () {
    harekat()
})
