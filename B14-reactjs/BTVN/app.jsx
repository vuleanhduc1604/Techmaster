const Music = ({ review, onPrev, onNext }) => {
    const minuteConverter = (num) => {
        const minute = Math.floor(num/60);
        const seconds = num - minute*60;
        return (
            <p>{minute}:{seconds}</p>
        )
    }
    const [index, setIndex] = React.useState(0);
    const playPause = () => {
        if (index == 0) {
            setIndex(index + 1)
            return (<span>Play</span>)
        } else {
            setIndex(index - 1)
            return (<span>=</span>)
        }
    }
    return (
        <div className="music-card">
            <div className="music">
                <div className="author">
                    <div className="author-avatar">
                        <img src={review.avatar} alt={review.name} />
                    </div>
                </div>

                <div className="content">
                    <p>{review.content}</p>
                </div>
            </div>

            <div className="controls">
                <button className="btn-prev" onClick={onPrev}>
                    Prev
                </button>
                <button className="btn-play">Play</button>
                <button className="btn-next" onClick={onNext}>
                    Next
                </button>
                <div className="time-wrapper">
                    <p className="time">{minuteConverter(review.length)}</p>
                </div>
            </div>
            <div className="controls-right">
                <i class="fa-solid fa-volume-high"></i>
                <div className="volume-bar"></div>
                <i class="fa-solid fa-music"></i>
            </div>
        </div>
    );
};

const App = () => {
    const [index, setIndex] = React.useState(0);

    const reviews = [
        {
            id: "f78ff93a2f6723ba714b938d",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/971.jpg",
            name: "Jorge Farrell",
            author: "sth",
            length: 150
        },
        {
            id: "b39e485adf7eac8ef7ccdb7a",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/784.jpg",
            name: "Mrs. Rickey Ritchie",
            job: "Lead Functionality Consultant",
            author: "sth",
            length: 100
        },
        {
            id: "f78ff93a2f6723ba714b938d",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/971.jpg",
            name: "Jorge Farrell",
            author: "sth",
            length: 135
        },
        {
            id: "b39e485adf7eac8ef7ccdb7a",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/784.jpg",
            name: "Mrs. Rickey Ritchie",
            job: "Lead Functionality Consultant",
            author: "sth",
            length: 200
        },
    ];

    const handleNext = () => {
        if (index == reviews.length - 1) setIndex(0);
        else setIndex(index + 1);
    };

    const handlePrev = () => {
        if (index == 0) setIndex(reviews.length - 1);
        else setIndex(index - 1);
    };

    const review = reviews[index];

    return (
        <div className="section-reviews">

            <Music review={review} onPrev={handlePrev} onNext={handleNext} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);