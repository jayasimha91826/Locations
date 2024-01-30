import './imageItem.css'

const ImageItem=(props)=>
{
    const {item , finalArray}=props;
    const {id, name, imgUrl}=item;
    //console.log(finalArray,id);
    //console.log(prop);
    return ( 
        <div className='image_container'>
        <img className='image_size' src={imgUrl} alt="images"></img>
        <p>{name}</p>
        </div >
    

    );

}

export default ImageItem;