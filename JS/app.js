
const findPhone = (phoneName) => {
    fetch('https://openapi.programming-hero.com/api/phones?search=${phoneName}.data')
        .then(res => res.json())
        .then(phone => console.log(phone))
};

const searchPhone = () => {
    const phoneNameText = document.getElementById('input-filed');
    findPhone(phoneNameText.value);
}