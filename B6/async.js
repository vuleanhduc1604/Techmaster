// Async

function dimuabohuc() {
    return new Promise((resolve, reject) => {
        console.log('Di mua bo huc');

        setTimeout(() => {
            if (Math.round(Math.random())) {
                resolve('Bo huc')
            } else {
                reject('Het bo huc')
            }
        }, 2000);
    });
};

async function actions() {
    try {
        const value = await dimuabohuc();

        console.log('Uong bo huc')
    } catch (error) {
        try {
            const value = await dimuabohuc();

            console.log('Uong bo huc')
        } catch (error) {
            console.log('Bo di')
        }
    }
}

actions();

// AJAX