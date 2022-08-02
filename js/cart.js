const cartList = document.querySelector('.list-items');

window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.item-content');

        const productInfo = {
            id: card.dataset.id,
            title: card.querySelector('.item-name').innerText,
        };

        console.log(productInfo);

        const cartItemHTML = `<li data-id=${productInfo.id}>
                                <article class="list-item">
                                    <p class="list-item__text">${productInfo.title}</p>
                                    <button class="list-item__btn"><img src="./assets/icons/icon_%20cross.png" alt="close btn"></button>
                                </article>
                            </li>`

        cartList.insertAdjacentHTML('beforeend', cartItemHTML);
    }
})