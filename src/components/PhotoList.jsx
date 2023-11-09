import Photo from './Photo';


const PhotoList = ({data, title}) => {

    if (!data) {
        return null;
    }
    
    const results = data;
    let photos;

    //map over array from api to return a Photo component for each object
    photos = results.map(photo => (
    <Photo 
        key= {photo.id}
        farm={photo.farm}
        server={photo.server}
        secret={photo.secret}
        owner={photo.owner}
    />
    ));



  return (
    <div className="photo-container">
        <h2>Images Of: {title} </h2>
        <ul>
            { photos }
        </ul>
    </div>
)
  }



export default PhotoList;
