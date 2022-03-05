function getUpdateNumber(product,price,isIncresing){
    const productInput=document.getElementById(product+'-input')
    let productNumber=parseInt(productInput.value)
    if(isIncresing){
        productInput.value=productNumber+1
    }
    else if(productNumber>0){
        productInput.value=productNumber-1
    }
    productNumber=productInput.value
    
    const Price=document.getElementById(product+'-Price')
    Price.innerText=productNumber*price
   calculateTotal()
    
}

document.getElementById('phone-plus').addEventListener('click',function(){
   getUpdateNumber('phone',1219,true)   
})

document.getElementById('phone-minus').addEventListener('click',function(){
   getUpdateNumber('phone',1219,false)   
})

document.getElementById('case-minus').addEventListener('click',function(){
   getUpdateNumber('case',59,false)
})
document.getElementById('cPlus').addEventListener('click',function(){
   getUpdateNumber('case',59,true)
})
function getInput(product){
   const phoneInput=document.getElementById(product+'-input')
  const phoneNumber=parseInt(phoneInput.value)
  return phoneNumber
}
function calculateTotal(){
  const phoneTotal=getInput('phone')*1219
  const caseTotal=getInput('case')*59
  const subtotal=caseTotal+phoneTotal
  const tax=subtotal/10
  const totalPrice=subtotal+tax
  document.getElementById('subtotal').innerText=subtotal
  
  document.getElementById('tax').innerText=tax
  
  document.getElementById('total').innerText=totalPrice


  console.log(caseTotal)
  console.log(phoneTotal)
}



