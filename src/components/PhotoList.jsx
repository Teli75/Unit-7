import Photo from './Photo';
import PropTypes from 'prop-types';

const PhotoList = ({data}) => {

    // if (!data) {
    //     return null;
    // }
    
    // const results = data;
    // let photos;

    // photos = results.map(photo => (
    // <Photo 
    //     key= {photo.id}
    // />
    // ));



  return (
    <div className="photo-container">
        <h2>Results</h2>
        <ul>
            {/* { photos } */}
        </ul>
    </div>
)
  }

  PhotoList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  }

export default PhotoList;
