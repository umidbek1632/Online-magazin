let basket_json = [
    {
        'img':'ice-cream/01.png',
        'name':'Zolotoy',
        'price':15000,
        'count':3,
        'total price':45000
    },
    {
        'img':'chocolate/04.png',
        'name':'Kit Kat',
        'price':12000,
        'count':6,
        'total price':12000
    },
    {
        'img':'drink/03.png',
        'name':'coca-cola',
        'price':14000,
        'count':5,
        'total price':42000
    },
    {
        'img':'chocolate/13.png',
        'name':'Alpen Gold',
        'price':13000,
        'count':3,
        'total price':39000
    },
    {
        'img':'ice-cream/03.png',
        'name':'plumbir',
        'price':14000,
        'count':7,
        'total price':46000
    },
    {
        'img':'chocolate/03.png',
        'name':'plumbir',
        'price':17000,
        'count':3,
        'total price':46000
    },
    {
        'img':'drink/05.png',
        'name':'fanta',
        'price':18000,
        'count':9,
        'total price':46000
    },
    {
        'img':'ice-cream/07.png',
        'name':'plumbir',
        'price':11000,
        'count':8,
        'total price':46000
    }
]



let low_main = document.querySelector('.low-main')
for(let i = 0; i<=basket_json.length;i++){
    let div = document.createElement('div')
    div.classList.add('purchased-product-container')
    div.innerHTML = `
               <img src="../media/media/${basket_json[i]['img']}" alt="">
            <p>name: ${basket_json[i]['name']}</p>
            <p>price: ${basket_json[i]['price']}</p>
            <p class = "smth">count: ${basket_json[i]['count']}</p>
            <p class="total-price">total-price: ${basket_json[i]['total price']}</p>
                 <div class="navigation">
                <span class="plus">+</span>
                <span class="minus">-</span>
            </div>

    `
    low_main.appendChild(div)
}
let plus = document.querySelectorAll('.plus')
let smth = document.querySelectorAll('.smth')
let cnt = 0
let minus = document.querySelectorAll('.minus')
let product = document.querySelectorAll('.purchased-product-container')
let total = document.querySelectorAll('.total-price')
plus.forEach((item,num)=>{
    item.onclick =()=>{
      
        basket_json[num+1]['count'] =  basket_json[num+1]['count']+1
        smth[num].textContent = `count: ${basket_json[num+1]['count']}`
     
        basket_json[num+1]['total price'] =   basket_json[num+1]['total price']+  basket_json[num+1]['price']
        total[num].textContent = `total price: ${basket_json[num+1]['total price']}`
     
        
    }

})

minus.forEach((item1,num1)=>{
    item1.addEventListener('click', ()=>{
        basket_json[num1+1]['count'] = basket_json[num1+1]['count'] - 1
        smth[num1].textContent = `count: ${basket_json[num1+1]['count']}` 
        basket_json[num1+1]['total-price'] =  basket_json[num1+1]['total-price'] - basket_json[num1+1]['price']
        total[num1].textContent =    basket_json[num1+1]['total-price']
        if(basket_json[num1+1]['count'] == 0){
            product[num1].style.display = 'none'
        }

    })
})