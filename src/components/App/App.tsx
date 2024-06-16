import { useEffect, useState, ChangeEvent } from "react";
import { useApiXML } from "../../hooks/useApiXML";
import Card from "../Card/Card";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Loading from "../Loading/Loading";
import "./App.scss";

const App = () => {
    const { rates, loading, error } = useApiXML("/eurofxref-daily.xml");
    const [fromCurrency, setFromCurrency] = useState({currency: "EUR", rate: 1});
    const [fromAmount, setFromAmount] = useState(1);
    const [toCurrency, setToCurrency] = useState({currency: "USD", rate: 1});
    const [toAmount, setToAmount] = useState(1);

    useEffect(() => {
        const selectedCurrency = rates.find(item => item.currency === "USD");
        if(selectedCurrency){
            setToAmount(selectedCurrency?.rate)
            setToCurrency(selectedCurrency)
        }
    }, [rates])

    const setFromInput = (event: ChangeEvent<HTMLInputElement>) => {
        const updateCurrency = Number(event.target.value) * Number(toCurrency.rate);
        setFromAmount(Number(event.target.value));
        setToAmount(updateCurrency);
    }

    const setToInput = (event: ChangeEvent<HTMLInputElement>) => {
        const updateInput = Number(event.target.value) / Number(toCurrency.rate);
        setFromAmount(updateInput);
        setToAmount(Number(event.target.value));
    }

    const setFromOption = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedRate = parseFloat(event.target.value);
        const selectedCurrency = rates.find(item => item.rate === selectedRate);
        if (selectedCurrency) {
            setToCurrency(selectedCurrency)
        }
        const updateCurrency = Number(event.target.value) * Number(fromAmount)
        setToAmount(updateCurrency)
    }

    if(error){
        console.error(error);
    }
    
    return (
        <div>
            <div className="name"></div>
            { loading? <Loading/> 
                : 
                <Card title="Currency Converter" subtitle="2024-06-13">
                    <div className="children">
                        <div className="converter">
                            <span>From</span>
                            <Select disabled={true} 
                                value={fromCurrency.rate} 
                                onChange={(event: any) => setFromCurrency(event.target.value)} 
                                options={[{
                                    currency: "EUR", rate: 1,
                                    symbol: ""
                                }]} 
                            />
                            <Input onChange={setFromInput} value={fromAmount}/>
                        </div>  
                        <div className="exchange-icon">
                            <button>&#x21C4;</button> 
                        </div>
                        <div className="converter">
                            <span>To</span>
                            <Select value={toCurrency.rate} 
                                onChange={setFromOption} 
                                options={rates} 
                            />
                            <Input onChange={setToInput} value={toAmount}/>
                        </div>  
                    </div>
                </Card>
            }
        </div>
    )
}

export default App
