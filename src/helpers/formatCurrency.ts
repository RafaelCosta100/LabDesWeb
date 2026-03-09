export const formatCurrency = (value: number): string => {
const formattedCurrency = value.toLocaleString("pt-br",{
    style:"currency",
    currency:'BRL',
});
return formattedCurrency
};