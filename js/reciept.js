if (location.search == '?location=reciept') {
  const getUser = JSON.parse(window.localStorage.getItem('user')); 
  console.log(getUser);

  let hideOrderform = document.querySelector('.form-main'); 
  hideOrderform.classList.add('hide');

  let targetHeader = document.querySelector('.header');
  const recieptWrapper = document.createElement('div');
  const recieptDiv = document.createElement('section');
  const recieptSecondDiv = document.createElement('ul');
  const recieptMainHeader = document.createElement('div');
  console.log(recieptDiv);

  recieptWrapper.classList.add('reciept-wrapper');
  recieptDiv.classList.add('reciept-div');
  recieptSecondDiv.classList.add('reciept-second-div');
  recieptMainHeader.style.fontSize = '25px';
  recieptMainHeader.style.backgroundColor = 'white';
  recieptMainHeader.style.color = 'rgb(27, 99, 255)';
  recieptMainHeader.style.display = 'flex';
  recieptMainHeader.style.flexDirection = 'column';
  recieptMainHeader.style.marginBottom = '20px';

  recieptMainHeader.style.textAlign = 'center';
  targetHeader.appendChild(recieptMainHeader);

  targetHeader.appendChild(recieptWrapper);
  recieptWrapper.appendChild(recieptDiv);
  recieptWrapper.appendChild(recieptSecondDiv);

  recieptMainHeader.innerHTML = `
  <i class="fa-solid fa-truck fa-2x"></i>
  <h2> Tack för din order, ${getUser.firstName}! </h2>
  `;

  recieptDiv.innerHTML = `
    <h3 class="reciept-deliverytext">Din order skickas inom 1-2 arbetsdagar.</h3>
    <p class="first-p"> Namn: ${getUser.firstName} </p>
    <p> Efternamn: ${getUser.lastName} </p>
    <p> Adress: ${getUser.adress} </p>
    <p> Postnummer: ${getUser.postalCode} </p>
    <p> Ort/stad: ${getUser.city} </p>
    <p> Email: ${getUser.email} </p>
    <p> Telefon: ${getUser.phone} </p>
    <p> Övriga Kommentarer: ${getUser.message}</p>
    </br>
    <div class="total-Amount">
    <p> Total summa: ${totalPriceOfProducts}:-</p>
    </div>
    `;

  recieptSecondDiv.innerHTML = `
    <h3> Du har beställt: </h3>
    
    `;
  function showProductsFromCart() {
    shoppingCartArray.forEach((product) => {
      recieptSecondDiv.innerHTML += `
      <li>
        <h4><strong>${product.name}</strong></h4>
        <p>x${product.amount}</p>
        <p class="recipe-bottom-product">${product.price} kr</p>
        </li>`;
    });
  }
  showProductsFromCart();
}
