import { styled } from 'styled-components'

import introBackground from '../../../../assets/introBackgroud.svg'
import { rgba } from 'polished'

export const Container = styled.div`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${introBackground}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${rgba(theme.colors['base-background'], 0.2)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80rem;
  height: 34rem;

  img {
    width: 476px;
    height: 360px;
  }
`

export const DescriptionSection = styled.section`
  width: 36.75rem;

  h1 {
    font-size: ${({ theme }) => theme.textSizes['title-xl']};
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors['base-title']};
    line-height: 130%;
  }

  & > p {
    margin-top: 1rem;

    font-size: ${({ theme }) => theme.textSizes['text-regular-l']};
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors['base-subtitle']};
    line-height: 130%;
  }
`
