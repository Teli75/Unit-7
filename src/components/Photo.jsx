const Photo = (props) => (
  
      <li>
        <img
          src={`https://live.staticflickr.com/${props.photo.server}/${props.photo.id}_${props.photo.secret}.jpg`}
        />
      </li>

)

          //<!-- Not Found -->
        //   <li className="not-found">
        //     <h3>No Results Found</h3>
        //     <p>You search did not return any results. Please try again.</p>
        //   </li>
    
    


export default Photo;
