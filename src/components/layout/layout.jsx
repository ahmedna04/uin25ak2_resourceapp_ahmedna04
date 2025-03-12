import { Outlet } from 'react-router-dom';
import Nav from '../nav/nav';

function Layout() {
  return (
    <div className="layout-container">
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;