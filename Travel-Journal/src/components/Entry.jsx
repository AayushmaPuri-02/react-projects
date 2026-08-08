export default function Entry(props) {
    console.log("hello", props.list.country);
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img
                    className="main-image"
                    src={props.list.img.src}
                    alt={props.list.img.alt}
                />
            </div>

            <div className="info-container">
                <i className="fa-solid fa-location-dot"></i>

                <span className="country">
                    {props.list.country}
                </span>

                <a href={props.list.maps}>
                    View on Google Maps
                </a>

                <h2 className="entry-title">
                    {props.list.title}
                </h2>

                <p className="trip-dates">
                    {props.list.dates}
                </p>

                <p className="entry-text">
                    {props.list.text}
                </p>
            </div>
        </article>
    )
}