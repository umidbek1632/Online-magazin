let plus = document.querySelectorAll('.plus')
let count = document.querySelectorAll('.count')
let minus = document.querySelectorAll('.minus')
let low_main = document.querySelector('.low-main')
plus.forEach((item,num) =>{
    item.addEventListener('click',()=>{
        
               
        count[num].value = parseInt(count[num].value)+1
        for(let i=0; i<=count[num].value;i++){
            let div = document.createElement('div')
            div.classList.add('purchased-product-container')
            div.innerHTML = `
                     <img src="../media/media/chocolate/03.png" alt="">
            <p>name: ice-cream</p>
            <p>price: 1500</p>
            <p>count: 3</p>
            <p>total-price: 45000</p>`
         
            low_main.appendChild(div)
            console.log(count[num].value)
        }
    
      
    })

})
minus.forEach((item,num)=>{
    item.addEventListener('click',()=>{
        count[num].value = count[num].value-1
        if(count[num].value <0){
            count[num].value = 0
        }
    })
   
})