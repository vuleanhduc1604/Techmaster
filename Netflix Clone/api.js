const api_key = "09ddf3380d3a68cce95ff8ea0e3dc6ad"
const base_url = "https://api.themoviedb.org/3" 
const popular_url = "/discover/movie?sort_by=popularity.desc"
const img_url = "https://image.tmdb.org/t/p/w500"
const kid_url = "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"
const drama_this_year_url = "/discover/movie?with_genres=18&primary_release_year=2022"
const comedies_ferrell_url = '/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc'
const best_drama_url = "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10"
const createRequestToken = "/authentication/token/new"
const authenticateRequestToken_url = "https://www.themoviedb.org/authenticate/"
const createsession_url = "/authentication/session/new"
// Get Film Data
export const getAPI = async (url) => {

    try {
        let reqOptions = {
            url: base_url + url + "&api_key=" + api_key,
            method: "GET",
        };
        console.log(axios.request(reqOptions));
        return axios.request(reqOptions);

    } catch (err) {
        console.log(err);
    }
};  
// Create Div Film 
const createDiv = async({backdrop_path}, category) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add(`${category}-item`)
    const img = document.createElement('img');
    img.src = `${img_url}${backdrop_path}`
    wrapper.appendChild(img);
    if (img.src == "https://image.tmdb.org/t/p/w500null") {
        wrapper.style.display = 'none';
    }
    const wrappers = document.querySelector(`.${category}`);
    wrappers.appendChild(wrapper);
    return wrapper;
}
// Render Film Data
const renderAPI= async(eg_url, categories) => {
    try {
        const {data} = await getAPI(eg_url);
        data.results.forEach(element => {
            createDiv(element, categories)
        });
        $(`.${categories}`).slick({
            slidesToShow: 5,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ],
            infinite: true, 
            prevArrow:"<button type='button' class='slick-prev pull-left button-invis text-white'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right button-invis text-white'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
        });
    } catch (err) {
        console.log(err)
    }
}
renderAPI(popular_url, 'popular');
renderAPI(kid_url, 'kid');
renderAPI(drama_this_year_url,'drama-this-year');
renderAPI(best_drama_url, 'best-drama');
renderAPI(comedies_ferrell_url, 'ferrell-comedies')
document.querySelector('.dropdown').addEventListener('click', () => {
    document.querySelector('.dropdown-content').classList.toggle('d-block')
})       

// Request new Token
const createnewRequestToken = async () => {
    try {
        let reqOptions = {
            url: base_url + createRequestToken + "?api_key=" + api_key,
            method: "GET",
        }
        return axios.request(reqOptions)
    } catch (err) {
        console.log(err)
    }
}
// Redirect page to authenticate token
const redirectToAuthentication = async() => {
    try {
        const {data} = await createnewRequestToken();
        const request_token = data.request_token;
        localStorage.setItem("request_token", request_token);
        window.location.href = authenticateRequestToken_url + request_token + "?redirect_to=http://127.0.0.1:5500/Netflix%20Clone/index.html";
    } catch (err) {
        console.log(err)
    }
}
// Create session ID
const createsessionID = async() => {
    try {
        const requesttoken = localStorage.getItem("request_token");
        let reqOptions = {
            url: base_url + createsession_url + "?api_key=" + api_key,
            method: "POST",
            request_token: requesttoken
        }
       return axios.request(reqOptions);
    } catch (err) {
        console.log(err)
    }
};
const fetchsessionID = async() => {
    try {
        const {data} = await createsessionID();
        const session_id = data.session_id;
        localStorage.setItem("session_id", session_id);
        console.log(session_id)
    } catch (err) {
        console.log(err)
    }
}

// Check if session ID is available
if (localStorage.getItem("session_id") === null) {
    if (localStorage.getItem("request_token") === null) {
        redirectToAuthentication();
    } else {
        fetchsessionID();
    }
}