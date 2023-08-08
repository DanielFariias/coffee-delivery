export const formatPricer = (price: number) => {
  return price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}
