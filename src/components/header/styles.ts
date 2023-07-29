import { styled } from 'styled-components'

export const Container = styled.header`
  height: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors['base-background']};
`

export const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const BaseButton = styled.button`
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  padding: 0.625rem 0.5rem;
`

export const LocationButton = styled(BaseButton)`
  gap: 0.25rem;
  background-color: ${({ theme }) => theme.colors['product-purple-light']};
  color: ${({ theme }) => theme.colors['product-purple-dark']};
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  line-height: 1.3;
  border-radius: 6px;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  svg {
    color: ${({ theme }) => theme.colors['product-purple']};
    transition: color 0.2s ease-in-out;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['product-purple']};
    color: ${({ theme }) => theme.colors['product-purple-light']};

    svg {
      color: ${({ theme }) => theme.colors['product-purple-light']};
    }
  }
`

export const CartButtonSection = styled.div`
  position: relative;
`

export const CartButtonCounter = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${({ theme }) => theme.colors['product-yellow-dark']};
  color: ${({ theme }) => theme.colors['product-yellow-light']};
  font-size: ${({ theme }) => theme.textSizes['text-bold-s']};
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CartButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors['product-yellow-light']};
  color: ${({ theme }) => theme.colors['product-yellow-dark']};
  border-radius: 6px;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors['product-yellow-dark']};
    color: ${({ theme }) => theme.colors['product-yellow-light']};
  }
`
