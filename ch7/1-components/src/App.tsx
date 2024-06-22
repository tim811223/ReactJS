import 'bulma/css/bulma.min.css';
import { SpyFamily } from './SpyFamily';
import roles from './roles.json';

export const App = () => {
  return (
    <>
      <SpyFamily roles={roles} />
    </>
  );
};
