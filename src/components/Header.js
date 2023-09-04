import { infoMessage } from "../util/message"
import "./Header.scss"

export default function Header({ goToRoute, toast }) {
  const logout = () => {
    const message = infoMessage("執行登出", "登出成功")
    const callback = () => toast.current.show(message)
    goToRoute('/auth', callback)
  }

  return (
    <div className="header flex gap-x-3 justify-end w-full items-center">
      <div
        onClick={logout}
        className="items-center logout flex px-2 gap-x-2"
      >
        <span>Hello !</span>
        <div className="username font-bold">Developer</div>
        <div>Logout</div>
      </div>
    </div>
  )
}