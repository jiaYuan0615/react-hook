import { infoMessage } from "../util/message"
import "./Header.scss"

export default function Header({ goToRoute, toast, auth }) {
  const logout = () => {
    const message = infoMessage("執行登出", "登出成功")
    const callback = () => toast.current.show(message)
    goToRoute('/auth', callback)
  }

  return (
    <div className="header flex gap-x-3 justify-end w-full items-center">
      <div
        title='登出系統'
        onClick={logout}
        className="items-center logout flex px-2 gap-x-2"
      >
        <div className="font-bold">{auth?.name}</div>
        <div className="user-card font-bold">{auth?.card}</div>
        <div>登出系統</div>
      </div>
    </div>
  )
}