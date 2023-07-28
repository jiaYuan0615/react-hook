import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./Sidebar.scss"

export default function Sidebar({ display }) {
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
    <div
      className={`sidebar text-stone-50 font-bold ${display ? 'hidden' : ''}`}
    >
      <div className="flex flex-col px-4 gap-y-4">
        <div className="flex gap-x-3 items-center">
          <i className="pi pi-prime" style={{ fontSize: '1rem' }} />
          <p
            className="cursor-pointer"
            onClick={() => goToRoute('/product')}
          >產品頁面</p>
        </div>
        <div className="flex gap-x-3 items-center">
          <i className="pi pi-shopping-cart" style={{ fontSize: '1rem' }} />
          <p
            className="cursor-pointer"
            onClick={() => goToRoute('/checkout')}
          >購物車</p>
        </div>
      </div>
    </div>
  )
}