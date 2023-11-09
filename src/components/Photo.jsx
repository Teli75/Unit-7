const Photo = (props) => (
  <>
    <li>
      {/* <img src={`https://${photo}.staticflickr.com/4334/37032996241_4c16a9b530.jpg`} alt="" /> */}
      <img
        src={`https://live.staticflickr.com/${props.server}/${props.key}_${props.secret}.jpg`}
      />
    </li>

    {/* <!-- Not Found -->
          <li class="not-found">
            <h3>No Results Found</h3>
<p>You search did not return any results. Please try again.</p> */}
  </>
);

export default Photo;
