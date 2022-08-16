const base_url = "https://provinces.open-api.vn"
const province_url = "/api/?depth=2"
const DISTRICT_API = "https://provinces.open-api.vn/api/p/";
const WARD_API = "https://provinces.open-api.vn/api/d/";
export const getCity = async () => {
    try {
        let reqOptions = {
            url: base_url + province_url,
            method: "GET"
        };
        return axios.request(reqOptions);
    } catch (err) {
        console.log(err)
    }
}
export const getDistrict = async (code) => {
    try {
        return axios.get(DISTRICT_API + code + "?depth=2")
        
    } catch (err) {
        console.log(err)
    }
}
export const getWard = async (code) => {
    try {
        return axios.get(WARD_API + code + "?depth=2")
        
    } catch (err) {
        console.log(err)
    }
}