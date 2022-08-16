import { getCity, getDistrict, getWard } from "./api.js";
const createOption = ( {name, code} ) => {
    const option = document.createElement('option');
    option.value = code;
    option.text = name;
    return option;
}
const resetOption = (placeholder) => {
    const option = document.createElement('option');
    option.text = placeholder;
    return option
}
const cityEl = document.querySelector('.city');
const districtEl = document.querySelector('.larger-province');
const wardEl = document.querySelector('.smaller-province')
const loadAddress = async function() {
    try {
        const {data} = await getCity();
        const options = data.map(createOption);
        cityEl.append(...options)
    } catch (err) {
        console.log(err)
    }
}
cityEl.addEventListener('change', async (e) => {
    districtEl.innerHTML = "";
    districtEl.appendChild(resetOption("Quận/Huyện"))
    wardEl.innerHTML = "";
    wardEl.appendChild(resetOption("Phường/Xã"))
    const districtCode = e.target.value
    try {
        const {data} = await getDistrict(districtCode);
        const options = data.districts.map(createOption);
        districtEl.append(...options)
    } catch (err) {
        console.log(err)
    }
})
districtEl.addEventListener('change', async (e) => {
    wardEl.innerHTML = "";
    wardEl.appendChild(resetOption("Phường/Xã"))
    const wardCode = e.target.value
    try {
        const {data} = await getWard(wardCode);
        const options = data.wards.map(createOption);
        wardEl.append(...options)
    } catch (err) {
        console.log(err)
    }
})  
loadAddress();