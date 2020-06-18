import Glide from '@glidejs/glide';
import CookiesEuBanner from '../node_modules/cookies-eu-banner/dist/cookies-eu-banner';

new Glide('.glide', {
  type: 'carousel',
  perView: 1,
  breakpoints: {
    768: { perView: 1 },
    1280: { perView: 2 },
    2600: { perView: 3 },
  },
}).mount();

new CookiesEuBanner(function () {});
