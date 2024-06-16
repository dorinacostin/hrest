import { CurrencyOptionType, SelectType } from "./type";

const Select = ({disabled, value, onChange, options}: SelectType) => {
    return (
        <select role="select" disabled={disabled} value={value} onChange={onChange} >
            {options?.map((item: CurrencyOptionType ) => 
                <option key={item.rate} value={item.rate}>
                    {item.currency}
                </option>)}
        </select>
    )
}

export default Select