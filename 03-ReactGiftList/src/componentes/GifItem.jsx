export const GifItem = ({title, url}) => {
    return (
        <div>
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    )
}
