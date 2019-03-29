import { createTransform } from 'redux-persist';
import immutable from 'seamless-immutable';

const createReduxFetchTransform = ({ whitelist = [], repositoryKey = 'repository' }) => {
  return createTransform(
    (inboundState, key) => {
      if (key !== repositoryKey) {
        return inboundState;
      }
      return inboundState.without((r, resourceName) => !whitelist.includes(resourceName));
    },
    (outboundState, key) => {
      return key === repositoryKey ? immutable.from(outboundState) : outboundState;
    }
  );
};

export default createReduxFetchTransform;
