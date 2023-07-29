import { styled } from 'styled-components'

import introBackground from '../../../../assets/introBackgroud.svg'

export const Container = styled.div`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${introBackground})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors['base-background']};
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
  }

  & > p {
    margin-top: 1rem;

    font-size: ${({ theme }) => theme.textSizes['text-regular-l']};
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const HighlightList = styled.ul`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem 2.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: nowrap;

    span {
      font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
      font-family: ${({ theme }) => theme.fonts.regular};
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`

type IHighlightIconColors =
  | 'product-yellow-dark'
  | 'base-text'
  | 'product-yellow'
  | 'product-purple'

interface IHighlightIconProps {
  bgColor: IHighlightIconColors
}

export const HighlightIcon = styled.div<IHighlightIconProps>`
  height: 2rem;
  width: 2rem;
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors['base-white']};
  border-radius: 50%;
`
