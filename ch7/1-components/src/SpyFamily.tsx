import { Anya } from './Anya';
import { Loid } from './Loid';
import { Yor } from './Yor';

//此Component為一個容器裝[Anya,Loid,Yor]
export const SpyFamily = () => {
  return (
    <>
      <Anya />
      <Loid />
      <Yor />
    </>
  );
};
