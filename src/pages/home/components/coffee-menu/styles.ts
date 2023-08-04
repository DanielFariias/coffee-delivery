import { styled } from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 2rem;
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.textSizes['title-l']};
  line-height: 130%;
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors['base-subtitle']};
`

export const CardList = styled.div`
  margin-top: 3.375rem;
  display: flex;
  gap: 4rem 2rem;
  flex-wrap: wrap;
  align-items: center;
`
