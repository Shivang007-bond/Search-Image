import './ImageList.css' ;
import ImageShow from "./ImageShow";

function ImageList({ image }) {

  const renderedImages = image.map((images) => {
    return <ImageShow images ={images} />;
  });

  return <div className="img-list">{renderedImages}</div>;
}

export default ImageList;
