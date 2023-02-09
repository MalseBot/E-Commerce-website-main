
    let Pp1 =document.getElementById("Pp1");
    let Pp2 =document.getElementById("Pp2");
    let P1 =document.getElementById("page1");
    let P2 =document.getElementById("page2");

    let productSubmit=document.getElementById("productSubmit");

    let mainImg = document.getElementById("mainImg");
    let smalling =document.getElementsByClassName("smalling");

    let product=[
        {
            name : 'T-shirt',
            price : 78,
            inCart:1,
            totalCost:78
        }
    ]

    function pages1() {
    Pp1.classList.add("disabled")
    Pp2.classList.remove("disabled") 
    P2.classList.add("visually-hidden")
    P1.classList.remove("visually-hidden")
};
function pages2() {
    Pp2.classList.add("disabled")
    Pp1.classList.remove("disabled")
    P1.classList.add("visually-hidden")
    P2.classList.remove("visually-hidden")
};

// product details images


try {
    smalling[0].onclick= function clickImg(){
        mainImg.src=smalling[0].src;
    }
    smalling[1].onclick= function clickImg(){
        mainImg.src=smalling[1].src;
    }
    smalling[2].onclick= function clickImg(){
        mainImg.src=smalling[2].src;
    }
    smalling[3].onclick= function clickImg(){
        mainImg.src=smalling[3].src;
    }
} catch (error) {
    
};

function hideDets(){
    let proInfo = document.getElementById("proInfo");
    proInfo.classList.add("visually-hidden");
};

function revealDets() {
    let proInfo = document.getElementById("proInfo");
    proInfo.classList.remove("visually-hidden");
};

// shopping cart

if (productSubmit) {
    productSubmit.addEventListener('click',()=>{
 productNumbering();
});
}
function productNumbering() {
    let cartNumber =localStorage.getItem('cartNumber');

    cartNumber = parseInt( cartNumber);

    if ( cartNumber ) {
        localStorage.setItem('cartNumber', cartNumber + 1);
        document.getElementById('cartNumber').textContent = cartNumber + 1;
    } else{
        localStorage.setItem('cartNumber', 1);
        document.getElementById('cartNumber').textContent = 1;
    };
    setItem(product);
};

function onlaodCartNumber (){
let  cartNumber =localStorage.getItem('cartNumber');
if (cartNumber) {
    document.getElementById('cartNumber').textContent=cartNumber;
}else{
    document.getElementById('cartNumber').textContent=0;
}
};

function setItem(product) {
    let cartItem=localStorage.getItem('product');


    cartItem= JSON.parse(cartItem);

    if (cartItem != null) {
        product[0].inCart +=1;
    };

    product[0].totalCost=product[0].inCart * product[0].price;


    cartItem=product;

    localStorage.setItem('product',JSON.stringify(cartItem));
};
onlaodCartNumber();

// cart page

function cart() {
    let subTotal=document.getElementById('subTotal');
    let quantity=document.getElementById('quantity');
    let cartItem=localStorage.getItem('product');
    cartItem= JSON.parse(cartItem);
    localStorage.setItem('product',JSON.stringify(cartItem));
    if (subTotal) {
        subTotal.innerHTML=`${cartItem[0].totalCost}$`
    };
    if (quantity) {
        quantity.innerHTML=`${cartItem[0].inCart}`
    }
}
cart();