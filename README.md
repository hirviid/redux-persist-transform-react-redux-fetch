## redux-persist-transform-react-redux-fetch

#### Install
```
yarn add redux-persist-transform-react-redux-fetch

npm i -S redux-persist-transform-react-redux-fetch
```

#### Usage
```js
import createReduxFetchTransform from 'redux-persist-transform-react-redux-fetch';

const reduxFetchTransform = createReduxFetchTransform({
  whitelist: ['user'],
});

persistStore(store, { transforms: [reduxFetchTransform] })
