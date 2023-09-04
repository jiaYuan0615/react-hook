import { Card } from 'primereact/card';
import { useLocation } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { useEffect, useRef } from 'react';

import './Auth.scss'
import LoginForm from '../components/Form/LoginForm'
import { successMessage } from '../util/message';

export default function Auth({ goToRoute, toast }) {
  const { pathname } = useLocation();
  const [currentRoute] = _.compact(pathname.split('/'))

  useEffect(() => {
    if (currentRoute) document.title = '會員登入'
  }, [pathname])

  const showInfo = () => {
    const message = successMessage("執行登入", "登入成功")
    toast.current.show(message);
  }

  const handleSubmit = (e) => {
    const callback = () => showInfo()
    goToRoute('/product', callback)
  }

  return (
    <div className="auth">
      <div className="cover"></div>
      <Card className="card" title="會員登入">
        <LoginForm
          handleSubmit={(value) => handleSubmit(value)}
        />
      </Card>
    </div>
  )
}