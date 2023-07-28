import logo from '../logo.svg';
import './Home.scss';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
      </header>
    </div>
  )
}