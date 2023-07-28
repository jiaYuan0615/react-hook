import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Checkout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goToRoute = (path) => {
    dispatch({
      type: 'PUSH_GoToRoute',
      navigate,
      path
    })
  }

  return (
    <>
      <div className="font-bold">Checkout</div>
      <button onClick={() => goToRoute('/product')}>購物</button>
    </>
  )
}