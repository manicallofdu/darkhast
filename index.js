let soal = document.getElementById("soal")
let yes = document.getElementById("yes")
let no = document.getElementById("no")
let tedad = 0

soal.textContent = "😌میتونم به یه قرار دعوتتون کنم؟"

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

    if (tedad >= 2) {
        soal.textContent = "😒اذیت نکن دیگه"
    }
    if (tedad >= 3) {
        soal.textContent = "😡داری عصبیم میکنی"
    }
    if (tedad >= 5) {
        no.style.display = "none"
        soal.textContent = "😏دوباره میپرسم ، میای بیرون؟"
        yes.style.width = "200px"
        yes.style.marginRight = "-100px"
    }
}

yes.addEventListener("click", function () {
    yes.style.width = "200px"
    yes.style.marginRight = "-100px"
    no.style.display = "none"
    soal.textContent = "(; انتخاب خوبی بود"

    yes.style.color = "black"
    yes.style.fontSize = "30px"
    yes.value = "5"
    setTimeout(function () { yes.value = "4" }, 1000)
    setTimeout(function () { yes.value = "3" }, 2000)
    setTimeout(function () { yes.value = "2" }, 3000)
    setTimeout(function () { yes.value = "1" }, 4000)
    setTimeout(function () { yes.value = "0" }, 5000)

    setTimeout(function () { window.location.href = "https://web.bale.ai/chat?uid=1889602121"; }, 5500)
})

no.addEventListener("mouseover", function () {
    harekat()
})
no.addEventListener("click", function () {
    harekat()
})
