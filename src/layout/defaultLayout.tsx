import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import * as S from './styles'

export function DefaultLayout() {
  return (
    <S.Container>
      <Header />
      <Outlet />
    </S.Container>
  )
}
