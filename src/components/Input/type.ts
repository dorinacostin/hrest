import { ChangeEvent} from "react"

export type InputType = {
    value: number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}