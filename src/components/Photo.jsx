const Photo = (props) => (
  <>
    <li>

      <img

        src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`}
      />
    </li>

    {/* <!-- Not Found -->
          <li class="not-found">
            <h3>No Results Found</h3>
<p>You search did not return any results. Please try again.</p> */}
  </>
);

export default Photo;
