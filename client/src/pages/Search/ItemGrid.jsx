export default function ItemGrid({ name, image, rating, comment, author, onClick}) {
  //   console.log(image.split("'")[1]);
  return (
    <div onClick={onClick}>
      <div class="uk-card">
        <div class="uk-card-media-top uk-inline uk-light">
          <img
            class="uk-border-rounded-medium"
            src={image.split("'")[1]}
            alt="Course Title"
          />
          <div class="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
          <div class="uk-position-xsmall uk-position-top-right">
            <a
              href="#"
              class="uk-icon-button uk-like uk-position-z-index uk-position-relative"
              data-uk-icon="heart"
            ></a>
          </div>
        </div>
        <div>
          <h3 class="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
            {name}
          </h3>
          <div class="uk-text-xsmall uk-text-muted" data-uk-grid="">
            <div class="uk-width-auto uk-flex uk-flex-middle">
              <span
                class="uk-rating-filled"
                data-uk-icon="icon: star; ratio: 0.7"
              ></span>
              <span class="uk-margin-xsmall-left">{rating}</span>
              <span>({comment})</span>
            </div>
            <div class="uk-width-expand uk-text-right">by {author}</div>
          </div>
        </div>
        <a href="recipe.html" class="uk-position-cover"></a>
      </div>
    </div>
  );
}
