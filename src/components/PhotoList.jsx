import Photo from "./Photo";


const PhotoList = ({title, data }) => {



  if (!data) {
    return null;
  }

  const results = data;
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
      <h2>Images Of: {title} </h2>
      <ul>{photos}</ul>
    </div>
  );
};

export default PhotoList;
