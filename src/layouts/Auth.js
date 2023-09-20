import { Card } from 'primereact/card';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './Auth.scss'
import LoginForm from '../components/Form/LoginForm'

export default function Auth({ goToRoute, toast }) {
  const dispatch = useDispatch()
  const { pathname } = useLocation();
  const [currentRoute] = _.compact(pathname.split('/'))

  function POST_Login(payload, callback) {
    dispatch({ type: 'POST_Login', payload, callback })
  }

  useEffect(() => {
    if (currentRoute) document.title = '會員登入'
  }, [pathname])


  const handleSubmit = (payload) => {
    const callback = (params) => {
      toast.current.show(params);
      dispatch({ type: 'GET_AuthInfo' })
      goToRoute('/product')
    }

    POST_Login(payload, callback)
  }

  return (
    <div className="auth">
      <div className="cover"></div>
      <Card className="login" title="會員登入">
        <LoginForm handleSubmit={(value) => handleSubmit(value)} />
      </Card>
    </div>
  )
}