export type SelectType = {
    value: number,
    disabled?: boolean,
    options: CurrencyOptionType[],
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}

export type CurrencyOptionType = {
    rate: number;
    currency: string;
    symbol: string;
}