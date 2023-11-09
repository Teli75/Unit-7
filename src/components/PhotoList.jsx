import Photo from "./Photo";

const PhotoList = (props) => {
  if (!props.data) {
    return null;
  }

  const results = props.data;
  let photos;

  //map over array from api to return a Photo component for each object
  photos = results.map((photo) => {
    console.log(photo);
    return (
      <Photo
        key={photo.id}
        photo={photo}
      />
    );
  });

  return (
    <div className="photo-container">
      <h2>Images Of: {props.title} </h2>
      <ul>{photos}</ul>
    </div>
  );
};

export default PhotoList;
