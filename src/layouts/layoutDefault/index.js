import { Link, Outlet } from "react-router-dom";
import "./layoutDefault.scss";
import CartMini from "../../combonents/cartMini";

function LayoutDefault() {
  return (
    <>
      <header className="header">
        <Link to={"/"} className="header__logo">Logo</Link>
        <CartMini />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">Nocopyright @ by trihuynhvjpprozzz</footer>
    </>
  )
}

export default LayoutDefault;