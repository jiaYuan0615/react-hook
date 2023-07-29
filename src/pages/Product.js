import { useSelector } from 'react-redux';

import Card from '../components/Card';

export default function Product() {
  const { isMobile } = useSelector((state) => state.global);

  const name = 'React is awesome';

  return (
    <>
      <div className="font-bold">
        Product
        {isMobile ? 'Mobile' : 'Desktop'}
      </div>
      <Card name={name} />
    </>
  );
}
