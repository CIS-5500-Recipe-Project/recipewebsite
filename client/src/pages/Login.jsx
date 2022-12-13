import Topbar from "../components/Topbar";

export default function Login() {
  return (
    <div>
      <Topbar />
      <div class="uk-grid-collapse" data-uk-grid="">
         <div
          class="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center"
          data-uk-height-viewport=""
        >
         <div class="uk-width-3-4@s">
             <div class="uk-text-center uk-margin-bottom">
              <a class="uk-logo uk-text-primary uk-text-bold">
                Fantastic
              </a>
            </div>
            <div class="uk-text-center uk-margin-medium-bottom">
              <h1 class="uk-h2 uk-letter-spacing-small">Sign In to Fantastic</h1>
            </div>
            <form class="uk-text-center">
              <div class="uk-width-1-1 uk-margin">
                <label class="uk-form-label" for="email">
                  Email
                </label>
                <input
                  id="email"
                  class="uk-input uk-form-large uk-border-pill uk-text-center"
                  type="email"
                  placeholder="tom@company.com"
                />
              </div>
              <div class="uk-width-1-1 uk-margin">
                <label class="uk-form-label" for="password">
                  Password
                </label>
                <input
                  id="password"
                  class="uk-input uk-form-large uk-border-pill uk-text-center"
                  type="password"
                  placeholder="Min 8 characters"
                />
              </div>
              <div class="uk-width-1-1 uk-text-center">
                <button class="uk-button uk-button-primary uk-button-large">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          class="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center uk-light"
          data-uk-height-viewport=""
        >
          <div
            class="uk-background-cover uk-background-norepeat uk-background-blend-overlay uk-background-overlay uk-border-rounded-large uk-width-1-1 uk-height-xlarge uk-flex uk-flex-middle uk-flex-center"
            style={{backgroundImage: 'url(https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwY29va2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80)'}}>
            <div class="uk-padding-large">
              <div class="uk-text-center">
                <h2 class="uk-letter-spacing-small">Hello There, Join Us</h2>
              </div>
              <div class="uk-margin-top uk-margin-medium-bottom uk-text-center">
                <p>
                  Enter your personal details and join the cooking community
                </p>
              </div>
              <div class="uk-width-1-1 uk-text-center">
                <a
                  class="uk-button uk-button-primary uk-button-large"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}
