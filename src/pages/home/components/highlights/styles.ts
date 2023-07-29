import { styled } from 'styled-components'

export const HighlightList = styled.ul`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1.6rem 2.5rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
      font-family: ${({ theme }) => theme.fonts.regular};
      color: ${({ theme }) => theme.colors['base-text']};
      line-height: 130%;
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
  min-width: 2rem;
  min-height: 2rem;
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors['base-white']};
  border-radius: 50%;
`
