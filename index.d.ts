import { Transform } from 'redux-persist';

type Config = {
  whitelist?: string[],
  repositoryKey?: string,
}

export default function createReduxFetchTransform<State, Raw>(config: Config): Transform<State, Raw>;
