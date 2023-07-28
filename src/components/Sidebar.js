import _ from "lodash"
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

  const menu = [
    {
      route: '/product',
      name: '產品頁面',
      icon: 'pi pi-prime'
    },
    {
      route: '/shopping-cart',
      name: '購物車',
      icon: 'pi pi-shopping-cart'
    },
    {
      route: '/checkout',
      name: '結帳',
      icon: 'pi pi-wallet'
    }
  ]

  return (
    <div
      className={`sidebar py-2 text-stone-50 font-bold ${display ? 'hidden' : ''}`}
    >
      <div className="flex flex-col px-4 gap-y-4">
        {_.map(menu, (x, i) => {
          return (
            <div key={i} className="flex gap-x-5 items-center">
              <i className={x.icon} style={{ fontSize: '1rem' }} />
              <p
                className="cursor-pointer"
                onClick={() => goToRoute(x.route)}
              >{x.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}