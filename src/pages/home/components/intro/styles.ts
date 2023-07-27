import { styled } from 'styled-components'

import introBackground from '../../../../assets/introBackgroud.svg'

export const Container = styled.div`
  width: 100%;
  height: 65rem;
  background: ${() => `url(${introBackground})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
