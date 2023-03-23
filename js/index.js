//Формула Герона (с проверкой в консоли)
let n1 = document.querySelector(`#g1`)
let n2 = document.querySelector(`#g2`)
let n3 = document.querySelector(`#g3`)
let button1 = document.querySelector(`#button1`)
let answer1 = document.querySelector(`.answer1`)
let answer2 = document.querySelector(`.answer2`)

button1.addEventListener(`click`, function(){
    let a1 = n1.value
    let a2 = n2.value
    let a3 = n3.value

    let p1 = (Number(a1) + Number(a2) + Number(a3))/2
    let m1 = Math.sqrt(p1*(p1-a1)*(p1-a2)*(p1-a3))
    answer2.innerHTML = ` `
    answer2.innerHTML = m1

    answer1.innerHTML = ` `
    answer1.innerHTML = `Корень из: ` + p1*(p1-a1)*(p1-a2)*(p1-a3)

    console.log(m1)
    console.log(a1)
    console.log(a2)
    console.log(a3)
    console.log(p1)
});

//Теорема Пифагора
let n11 = document.querySelector(`#g11`)
let n22 = document.querySelector(`#g22`)
let button2 = document.querySelector(`#button2`)
let answer11 = document.querySelector(`.answer11`)
let answer22 = document.querySelector(`.answer22`)

button2.addEventListener(`click`, function(){
    let a11 = n11.value
    let a22 = n22.value

    let m11 = Math.sqrt(Number(a11)*Number(a11) + Number(a22)*Number(a22))
    answer22.innerHTML = ` `
    answer22.innerHTML = m11

    answer11.innerHTML = ` `
    answer11.innerHTML = `Корень из: ` + Number(Number(a11)*Number(a11) + Number(a22)*Number(a22))
});

// Обратная теореме Пифагора
let n111 = document.querySelector(`#g111`)
let n222 = document.querySelector(`#g222`)
let button3 = document.querySelector(`#button3`)
let answer111 = document.querySelector(`.answer111`)
let answer222 = document.querySelector(`.answer222`)

button3.addEventListener(`click`, function(){
    let a111 = n111.value
    let a222 = n222.value

    let m111 = Math.sqrt(Number(a222)*Number(a222) - Number(a111)*Number(a111))
    answer222.innerHTML = ` `
    answer222.innerHTML = m111

    answer111.innerHTML = ` `
    answer111.innerHTML = `Корень из: ` + Number(Number(a222)*Number(a222) - Number(a111)*Number(a111))
});

//Дискриминант
let n1111 = document.querySelector(`#g1111`)
let n2222 = document.querySelector(`#g2222`)
let n3333 = document.querySelector(`#g3333`)
let button4 = document.querySelector(`#button4`)
let answer1111 = document.querySelector(`.answer1111`)
let answer2222 = document.querySelector(`.answer2222`)

button4.addEventListener(`click`, function(){
    let a1111 = n1111.value
    let a2222 = n2222.value
    let a3333 = n3333.value

    let m1111 = Number(a2222)*Number(a2222) - 4*Number(a1111)*Number(a3333)
    if(m1111 < 0){
        answer1111.innerHTML = ` `
        answer1111.innerHTML = m1111 + ` (Нет действительных корней)`
    } else {
        answer1111.innerHTML = ` `
        answer1111.innerHTML = m1111
    }
});

let closeAdd = document.querySelector(`#close-add`)
let add2 = document.querySelector(`.add2`)

closeAdd.addEventListener(`click`, function(){
    add2.classList.add(`add-lock`)
});