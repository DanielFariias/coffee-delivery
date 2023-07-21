import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <header>header</header>
      <Outlet />
    </div>
  )
}
