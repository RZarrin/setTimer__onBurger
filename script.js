let product = {
    plainBurger: {
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 300,
        amount: 0,
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        },
    },
    freshBurger: {
        name: 'Гамбургер FRESH',
        price: 20500,
        kcall: 700,
        amount: 0,
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        },
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 1100,
        amount: 0,
        get SUMM() {
            return this.price * this.amount
        },
        get KCALL() {
            return this.kcall * this.amount
        },
    },
}

let extraProduct = {
    doubleMayonnaise: {
        name: 'Двойной майонез',
        price: 3000,
        kcall:100
    },
    lettuce: {
        name: 'Салатный лист',
        price: 4000,
        kcall:20
    },
    cheese: {
        name: 'Сыр',
        price: 5000,
        kcall:120
    },
}

let btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
    checkExtraProduct = document.querySelectorAll('.main__product-checkbox'),
    addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptOut = document.querySelector('.receipt__window-out'),
    payBtn = document.querySelector('.receipt__window-btn');
    
btnPlusOrMinus.forEach((btn) => {
    btn.addEventListener('click', function () {
        plusOrMinus(this)
    })
})

function plusOrMinus(element) {
    //closest() - подключается близжайшему заданому родительскому элементу
    //getAttribute('id') - берет значение указанного атрибута () можно подключится к картинке src
    
    let parentId = element.closest('.main__product').getAttribute('id')
    let output = element.closest('.main__product').querySelector('.main__product-num')
    let price = element.closest('.main__product').querySelector('.main__product-price span')
    let kcall = element.closest('.main__product').querySelector('.main__product-kcall span')
    
    if(element.getAttribute('data-symbol') == '+') {
        product[parentId].amount++
    }else if (element.getAttribute('data-symbol') == '-' && product[parentId].amount > 0) {
        product[parentId].amount--
    }
    
    output.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].SUMM
    kcall.innerHTML = product[parentId].KCALL
}

let timer;
let x = 0;
countdown();
function countdown(){
  document.querySelector('.header__timer-extra').innerHTML = x;
  x++;
  if (x == 101){
    clearTimeout(timer);
  }
  else if (x >= 50){
    timer = setTimeout(countdown, 800);
  }
  else{
    timer = setTimeout(countdown, 300);
  }
}