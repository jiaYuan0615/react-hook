import _ from "lodash"
import { useLocation } from "react-router-dom"
import "./Sidebar.scss"
import menu from '../route'

export default function Sidebar({ display, goToRoute }) {
  const { pathname } = useLocation();
  const [currentRoute] = _.compact(pathname.split('/'))

  return (
    <div
      className={`sidebar text-stone-50 font-bold ${display ? 'hidden' : ''}`}
    >
      <div className="flex flex-col">
        {_.map(menu, (x, i) => {
          return (
            <div
              className={`flex gap-x-5 p-3 items-center link cursor-pointer ${currentRoute === x.route ? 'current' : ''}`}
              key={i}
              onClick={() => goToRoute(`/${x.route}`)}
            >
              <i className={x.icon} style={{ fontSize: '1rem' }} />
              <p>{x.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}