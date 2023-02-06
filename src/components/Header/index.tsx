import { useContext } from "react";
import { ContextProductCount } from "../../utils/context-product";
import "./styles.css"

export default function Header() {

    const { contextProductCount } = useContext(ContextProductCount);

    return (
        <header>
            <nav className="container">
                <h1>DSFilter</h1>
                <div className="dsf-count-products">{contextProductCount} produto(s)</div>
            </nav>
        </header>
    );
}