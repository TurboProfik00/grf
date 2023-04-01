//Создание рекламы
let add2 = document.querySelector(`#add2`)

    random = Math.floor(Math.random() * (4 - 1)) + 1;

    console.log(random)

    if(random == 1){
        add2.innerHTML = 
            `<div class="margin add splash ">
            <h2>РЕКЛАМА!</h2>
            <img class="img-add2" src="assets/add1.jpg" alt="add">
            <p>Шампунь Жумайсынба, скажи перхоти Аллах-атбар! Покупайте!</p>
            <button id="close-add">ЗАКРЫТЬ</button>
            </div>`
        } else if(random == 2){
        add2.innerHTML =
            `<div class="margin add splash ">
            <h2>РЕКЛАМА!</h2>
            <img class="img-add2" src="assets/add2.jpg" alt="add">
            <p>Ешь! Пей! Жуй! Шампунь Жумайсынба! Покупайте!</p>
            <button id="close-add">ЗАКРЫТЬ</button>
            </div>`
        } else if(random == 3){
        add2.innerHTML =
            `<div class="margin add splash ">
            <h2>РЕКЛАМА!</h2>
            <img class="img-add22" src="assets/add3.jpg" alt="add">
            <p>Большой Банк - ББ. Мы вас точно не обманем! Берите кредиты под 160% годовых!</p>
            <button id="close-add">ЗАКРЫТЬ</button>
            </div>`
        }
        


//Закрытие рекламы
let closeAdd = document.querySelector(`#close-add`)

closeAdd.addEventListener(`click`, function(){
    add2.classList.add(`add-lock`)
});

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

//Корни квадратного уравнения
let n11111 = document.querySelector(`#g11111`)
let n22222 = document.querySelector(`#g22222`)
let n33333 = document.querySelector(`#g33333`)
let button5 = document.querySelector(`#button5`)
let answer11111 = document.querySelector(`.answer11111`)
let answer22222 = document.querySelector(`.answer22222`)

button5.addEventListener(`click`, function(){
    let a11111 = n11111.value
    let a22222 = n22222.value
    let a33333 = n33333.value

    let m11111 = (Number(a22222)*-1 + Math.sqrt(a33333))/2*Number(a11111)
    let m22222 = (Number(a22222)*-1 - Math.sqrt(a33333))/2*Number(a11111)

    answer11111.innerHTML = ` `
    answer11111.innerHTML = m11111

    answer22222.innerHTML = ` `
    answer22222.innerHTML = m22222
});

// Площадь паралеллограмма
let n111111 = document.querySelector(`#g111111`)
let n222222 = document.querySelector(`#g222222`)
let button6 = document.querySelector(`#button6`)
let answer111111 = document.querySelector(`.answer111111`)

button6.addEventListener(`click`, function(){
    let a111111 = n111111.value
    let a222222 = n222222.value

    let m111111 = a111111*a222222

    answer111111.innerHTML = ` `
    answer111111.innerHTML = `S = ` + Number(m111111)
});

// Площадь прямоугольного треугольника
let n1111111 = document.querySelector(`#g1111111`)
let n2222222 = document.querySelector(`#g2222222`)
let button7 = document.querySelector(`#button7`)
let answer1111111 = document.querySelector(`.answer1111111`)

button7.addEventListener(`click`, function(){
    let a1111111 = n1111111.value
    let a2222222 = n2222222.value

    let m1111111 = Number(a1111111*a2222222)/2

    answer1111111.innerHTML = ` `
    answer1111111.innerHTML = `S = ` + Number(m1111111)
});

// Площадь треугольника
let n11111111 = document.querySelector(`#g11111111`)
let n22222222 = document.querySelector(`#g22222222`)
let button8 = document.querySelector(`#button8`)
let answer11111111 = document.querySelector(`.answer11111111`)

button8.addEventListener(`click`, function(){
    let a11111111 = n11111111.value
    let a22222222 = n22222222.value

    let m11111111 = Number(a11111111*a22222222)/2

    answer11111111.innerHTML = ` `
    answer11111111.innerHTML = `S = ` + Number(m11111111)
});
