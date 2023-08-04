import { styled } from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};

  padding: 1.25rem 1.5rem;
  width: 16rem;

  border-radius: 6px 36px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-top: -50px;
    position: relative;
  }
`

export const Tabs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  flex-wrap: wrap;

  span {
    background-color: ${({ theme }) => theme.colors['product-yellow-light']};
    color: ${({ theme }) => theme.colors['product-yellow-dark']};
    font-size: ${({ theme }) => theme.textSizes['components-tag']};
    font-weight: bold;
    line-height: 130%;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`

export const Title = styled.h2`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.textSizes['title-s']};
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors['base-subtitle']};
`

export const Description = styled.p`
  margin-top: 0.5rem;
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors['base-label']};
  text-align: center;
`

export const Footer = styled.span`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem;
    }
  }
`

export const Price = styled.span`
  span {
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
    color: ${({ theme }) => theme.colors['base-text']};
    margin-right: 0.25rem;
  }

  strong {
    font-size: ${({ theme }) => theme.textSizes['title-m']};
  }
`

export const AddCartWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors['product-purple-dark']};
    color: ${({ theme }) => theme.colors['base-card']};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.colors['product-purple']};
    }
  }
`
