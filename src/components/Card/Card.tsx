import { CardType } from "./type"
import "./Card.scss"

const Card = ({title, subtitle, children}: CardType ) => {
    return (
        <div className="card">
            <div className="title">
                {title}
               <span>{subtitle}</span>
            </div>
            {children}
        </div>
    )
}

export default Card