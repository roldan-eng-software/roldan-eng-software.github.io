export function formatCurrency(value: number, currency: string = 'BRL'): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function parsePriceString(priceStr: string): number {
  const numericStr = priceStr.replace(/[^0-9]/g, '')
  return parseInt(numericStr, 10) || 0
}
