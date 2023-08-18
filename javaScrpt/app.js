
    //some selectors
let sideBar=document.querySelector('#SideBar')
let overlay=document.querySelector('.overlay')
let Cart=document.querySelector('.shoppingBag')
let productElements=document.querySelector('.elements')
let buyProducts=0;
let TotalPrice=0;
 //Array of objects that contain products with their description

let obj=[
    {
    image:'css/peachShirt.webp',
    productType:"Peach Shirt",
    orgionalPrice:"Rs 3,790",
    diccountPrice:"Rs 2,299",
    },
    {
    image:'css/CasualCoatMen1st.jpg',
    productType:"Men's Casual Cout",
    orgionalPrice:"Rs 6,790",
    diccountPrice:"Rs 4,299",
    },
    {
    image:'css/CasualCoatMen2nd.jpg',
    productType:"Men's Casual Cout",
    orgionalPrice:"Rs 4,790",
    diccountPrice:"Rs 3,299",
    },
    {
    image:'css/Bag01.jpg',
    productType:"Hand Bag",
    orgionalPrice:"Rs 3,790",
    diccountPrice:"Rs 2,299",
    },
    {
    image:'css/Bag02.jpg',
    productType:"Hand Bag",
    orgionalPrice:"Rs 2,790",
    diccountPrice:"Rs 1,299",
    },
    {
    image:'css/womenKameez.jpg',
    productType:"cotton shirts",
    orgionalPrice:"Rs 3,290",
    diccountPrice:"Rs 2,299",
    },
    {
    image:'css/shoes1st.jpg',
    productType:"men's Shoes",
    orgionalPrice:"Rs 3,290",
    diccountPrice:"Rs 2,299",
    },
    {
    image:"css/FawnWaiscoat.webp",     
    productType:"Fawn Waiscoat",
    orgionalPrice:"Rs 6,990",
    diccountPrice:"Rs 5,299",
    },
    {
        image:"css/collarPolo.webp",     
        productType:"Collor Polo",
        orgionalPrice:"Rs 3,290",
        diccountPrice:"Rs 2,199",
    },
    {
        image:"css/FootWear.webp",     
        productType:"FootWear",
        orgionalPrice:"Rs 1,590",
        diccountPrice:"Rs 1,099",
    },
    {
        image:"css/AfterDark.webp",     
        productType:"After Dark perfume for men",
        orgionalPrice:"Rs 7,290",
        diccountPrice:"Rs 6,299",
    },
    {
        image:"css/Blazer.webp",     
        productType:"Blazzer Perfume",
        orgionalPrice:"Rs 9,290",
        diccountPrice:"Rs 7,299",
    }
]








Cart.addEventListener('click',()=>{
    console.log('Cart clicked')
    sideBar.classList.toggle('active');
    sideBar.style.width='300px'
    sideBar.style.height='100vh'
    overlay.style.display = sideBar.classList.contains("active") ? "block" : "none";
    sideBar.addEventListener('click',(event)=>{
        event.stopPropagation()
    })
    let ContinueButton=document.getElementById('ContinueButton');
    ContinueButton.addEventListener('click',(event)=>{
        sideBar.classList.remove('active');
        overlay.style.display = sideBar.classList.contains("active") ? "block" : "none";
    })
})


//A function that returns price
    function actualPrice(HTMLTaker){
        let numericData=HTMLTaker.match(/\d+/g);
        numericData=numericData.join('')
        numericData=parseInt(numericData);
        return numericData;
    }







//Function for displaying carts
let shoppingBag=document.querySelector('#SideBar')
function displayCarts(imageData,simpleData,priceData){
    buyProducts++;
    setTimeout(()=>{
    document.getElementById('proInput').value=buyProducts;
    },1000)
    
    let insideDiv=document.createElement('div');
    insideDiv.classList.add('side')
    insideDiv.innerHTML=`
        <div id="cartBox">
          <img src=${imageData.src} alt="">
          <p>${simpleData.innerHTML} <br><span>${priceData.innerHTML}</span></p>
          <i class="bi bi-x cross"></i>
        </div>
    `
     let innerHTML = `${priceData.innerHTML}`;
    const numericValue=actualPrice(innerHTML)
    TotalPrice=TotalPrice+numericValue;
    document.getElementById('priceInput').value=TotalPrice

    shoppingBag.appendChild(insideDiv);
   let cross=insideDiv.querySelector('.cross')
    cross.addEventListener('click',()=>{
        let innerPart=insideDiv.querySelector('span');
        console.log(innerPart)
        let numeric=actualPrice(innerPart.innerHTML)
        TotalPrice=TotalPrice-numericValue;
        document.getElementById('priceInput').value=TotalPrice
        insideDiv.remove();
        document.getElementById('proInput').value=--buyProducts;
    })
}













function productDisplayFun(productInfo){
    let insideElement=document.createElement('div');
    insideElement.classList.add('products');
    insideElement.innerHTML=`
    <img src=${productInfo.image} alt="image" class="productImages">
        <div class="itemName">
          <h5>${productInfo.productType}</h5>
          <span class="lineThrough">${productInfo.orgionalPrice}</span>
          <span>${productInfo.diccountPrice}</span><br>
          <button type="button" class="fa-sharp" ><span class="button_text">Add to Cart</span></button>
          <div class="sizes">
            <h6>XS</h6>
            <h6>S </h6>
            <h6>M </h6>
            <h6>L </h6>
          </div>
        </div>
    `
    productElements.appendChild(insideElement)
}
obj.forEach((product)=>{
    productDisplayFun(product);
})
let btn=document.querySelectorAll('.fa-sharp');
btn.forEach((Element)=>{
    Element.addEventListener('click',()=>{
        Element.classList.add('button--loading')
        setTimeout(()=>{
         Element.classList.remove('button--loading')
        },1000)
    })
})


let bagIcon=document.querySelectorAll('.fa-sharp')
bagIcon.forEach((Element)=>{
    Element.addEventListener('click',function(){
        let Imagedata=Element.closest('.products')
        Imagedata=Imagedata.querySelector(':first-child')
        let simpleData=Element.closest('.itemName')
        let price=simpleData.querySelector(':nth-child(3)')
        simpleData=simpleData.querySelector(':first-child')
        displayCarts(Imagedata,simpleData,price)
    })
})

//implementation of search function 

function search(productName,InputKey){
    productName=productName.toLowerCase()
    InputKey=InputKey.toLowerCase();
    let productIndex=0
    for(let i=0;i<InputKey.length;i++){
        if(productName[productIndex]===InputKey[i]){
            productIndex++;
        }
        if(productIndex==InputKey.length){
            return true;
        }
    }
    return false;
}




//Adding a functionality to search a product
let searchProduct=document.querySelector('#searchProduct')
let searchButton=document.querySelector('#searchButton')
const product=document.querySelectorAll('.products')
searchButton.addEventListener('click',()=>{
        let val=searchProduct.value;
        product.forEach((Element)=>{
        let item=Element.querySelector('.itemName').firstElementChild.textContent
        let shouldDisplay=search(item,val)
        if(shouldDisplay){
        Element.style.display='block';
        }
        else{
        Element.style.display='none'; 
        }
        
        })
})
searchProduct.addEventListener('keyup',(event)=>{
    console.log('hello')
    if(event.keyCode===8 && document.querySelector('#searchProduct').value===''){
        console.log('pressed')
        product.forEach((Element)=>{
            Element.style.display='block';
        })
    }
})
