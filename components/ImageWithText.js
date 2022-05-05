const TextOnTopOfImage = ({text , imgElement}) => {
    return (
        <div className="text-on-top-of-image">
            {imgElement}
            <div className='centered'>
                <h1 className='[font-size:100px;]'>{text}</h1>
            </div>
        </div>
    )
}

export default TextOnTopOfImage