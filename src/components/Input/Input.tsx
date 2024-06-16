import { InputType } from "./type"

const Input = ({ value, onChange }: InputType) => {
    return (
        <input role="input" type="number" min="0" value={value} onChange={onChange}  />
    )
}
export default Input