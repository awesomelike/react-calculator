import getRandomImage from '../util/api';

const initialState = {};

const imageReducer = (state, action) => new Promise((resolve) => {
  getRandomImage().then(({ urls, user }) => {
    switch (action.type) {
      case 'FETCH_IMAGE':
        resolve({ ...state, urls, user });
        break;
      default:
        resolve(state);
        break;
    }
  });
});

export { imageReducer as default };
