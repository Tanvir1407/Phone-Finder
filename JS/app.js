
const findPhone = (phoneName) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneName}`)
        .then(res => res.json())
        .then(phone => displayPhone(phone.data))
};

const searchPhone = () => {
    const phoneNameText = document.getElementById('input-filed');
    findPhone(phoneNameText.value);
    phoneNameText.value = '';
}

const displayPhone = (phoneInfo) => {
    const showPhone = document.getElementById('show-phone');
    showPhone.textContent = '';
    phoneInfo.forEach(phone => {
        console.log(phone);
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
                    <button class="details-btn">Details</button>
                </div>
            </div>
        `
        showPhone.appendChild(div);
    })
}