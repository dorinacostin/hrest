import { useState, useEffect } from "react";
import axios from "axios";
import { CurrencyRateType } from "./type";

export const useApiXML = (url: string) => {
    const [rates, setRates] = useState<CurrencyRateType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, { responseType: "text" });
                const parser = new DOMParser();
                const xml = parser.parseFromString(response.data, "text/xml");
                const extractedRates: CurrencyRateType[] = Array.from(xml.querySelectorAll("Cube[currency]")).map(cube => {
                    const currency = cube.getAttribute("currency") || "";
                    const rate = parseFloat(cube.getAttribute("rate") || "0");
                    const symbol = cube.getAttribute("symbol") || "";
                    return { currency, rate, symbol };
                });

                setRates(extractedRates);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch or parse XML data", error);
                setError("Failed to fetch or parse XML data");
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { rates, loading, error };
};