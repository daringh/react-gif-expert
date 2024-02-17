export const GifItem = ({title, url}) => {
    return (
        <div className={'card'}>
            <img src={url} alt={title}/>
            <p>{<title></title>}</p>
        </div>
    )
}