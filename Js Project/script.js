console.log("hello");

//we have make 6 div class statically, but now we make only one div class inside main tag and generate multiple using dynamic behaviourof js using queryselector

let main = document.querySelector('main')


async function loadProducts() {
    let res = await fetch('https://dummyjson.com/products')
    let data = await res.json()
    console.log(data.products);

    data.products.forEach(function(product) { // this will run loop in products  section and create data dynamically
        let cards = `<div class="w-[32%] p-4 flex-nowrap shrink-0 overflow-hidden rounded-lg bg-white">
        <img class="w-full rounded-lg" src="${product.thumbnail}" alt="">
        <h2 class="font-semibold text-semibold">${product.title}</h2>
        <p class="text-gray-600">Cateogry : ${product.cateogry}</p>
        <h6 class="text-purple-700 font-semibold text-xl">Price : ${product.price}</h6>
        <button class="bg-purple-600 px-4 py-2 rounded-lg">Buy Now</button>
    </div>`

        main.innerHTML += cards //like we want to send data inside main tag hence we used innerHTML, purana data aaya uske aage naya data aad karega  += ke karan varana = me sirf ek hi data show karega

    })
}
loadProducts()