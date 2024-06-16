import { useEffect } from "react";
import Loading from "../Loading/Loading";
import "./App.scss";

const App = () => {
    useEffect(() => {
    }, [])

    return (
        <div>
            <div className="name"></div>
            { loading? <Loading/> 
                : 
                <Card title="Currency Converter" subtitle="2024-06-13">
                    <div className="children">
                        <div className="converter">
                            <span>FromT</span>
                        </div>  
                        <div className="exchange-icon">
                            <button>&#x21C4;</button> 
                        </div>
                        <div className="converter">
                            <span>ToT</span>
                        </div>    
                    </div>
                </Card>
            }
        </div>
    )
}

export default App
