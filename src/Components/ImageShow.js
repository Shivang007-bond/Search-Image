function ImageShow({ images }) {
  return <div>
    <img src={images.urls.small} alt={images.alt_description} />
  </div>;
}

export default ImageShow;
