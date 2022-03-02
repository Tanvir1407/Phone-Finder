
//Get phones through API 
const findPhone = (phoneName) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`)
        .then(res => res.json())
        .then(phone => displayPhone(phone.data))
};

// Get user value by input field 
const searchPhone = () => {
    const phoneNameText = document.getElementById('input-filed');
    findPhone(phoneNameText.value);
    phoneNameText.value;
    phoneNameText.value = '';
}

//Display all phone that has been found through API
const displayPhone = (phoneInfo) => {
    const showPhone = document.getElementById('show-phone');
    showPhone.textContent = '';
    // display error massage
    if (phoneInfo.length == 0 ) {
        const div = document.createElement('div');
        div.innerHTML = `
            <h1 class="error-head">404</h1>
            <p class="error-text">Enter The Name of a valied Brand </p>
        `
        showPhone.appendChild(div);
    }
    else {
        for(phone of phoneInfo.slice(0,20)) {
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('col-12');
        div.classList.add('col-md-6');
        div.innerHTML = `
            <div class="card">
                <div class="text-center">
                    <img src="${phone.image}">
                </div>
                <h3 class="text-center phone-name">${phone.phone_name}</h3>
                <div class="text-box">
                    <p class="brand-name">${phone.brand}</p>
                    <button  onclick="buttonClicked('${phone.slug}')" class="details-btn">Details</button>
                </div>
            </div>
        `
        showPhone.appendChild(div);
      }
    } 
}


//Click card details button and get all information by API
const buttonClicked = phoneId => {
    fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
        .then(res => res.json())
        .then(data => phoneDetails(data))
}

// display phone details
const phoneDetails = data => {
    const conatiner = document.getElementById('phone-details');
    conatiner.textContent = '';
    const div = document.createElement('div');
    div.classList.add('row')
    div.classList.add('details-containar')
    let release;
    if (data.data.releaseDate == "") {
        release = 'No release date  found';
    }
    else {
        release = `${data.data.releaseDate}`
    }
    div.innerHTML = `
        <div class="col-md-6 col-12">
            <img class="features-img" src="${data.data.image}">
        </div>
        <div class="col-md-6 col-12">
            <h3>Name: ${data.data.name}</h3>
            <h5>Release Date: ${release}</h5>
            <p><span class="details-tag">Memory:</span> ${data.data.mainFeatures.memory}</p>
            <p><span class="details-tag">Display:</span> ${data.data.mainFeatures.displaySize}</p>
            <p><span class="details-tag">Chipset:</span> ${data.data.mainFeatures.chipSet}</p>
            <p><span class="details-tag">GPS:</span> ${data.data.others.GPS}</p>
            <p><span class="details-tag">NFC:</span> ${data.data.others.NFC}</p>
            <p><span class="details-tag">Bluetooth:</span> ${data.data.others.Bluetooth}</p>
            <p><span class="details-tag">Radio:</span> ${data.data.others.Radio}</p>
            <p><span class="details-tag">WLAN:</span> ${data.data.others.WLAN}</p>
            <p><span class="details-tag">Sensors:</span> ${data.data.mainFeatures.sensors}</p>
            <p></p>
        </div>
        
    `
    conatiner.appendChild(div);
}


