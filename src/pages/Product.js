import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Card from '../components/Card';

export default function Product() {
  const { isMobile } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToRoute = (path) => {
    dispatch({
      type: 'PUSH_GoToRoute',
      navigate,
      path,
    });
  };

  const name = 'React is awesome';

  return (
    <>
      <div className="font-bold">
        Product
        {' '}
        {isMobile ? 'Mobile' : 'Desktop'}
      </div>
      <Card name={name} />
      <button onClick={() => goToRoute('/checkout')}>結帳</button>
    </>
  );
}
