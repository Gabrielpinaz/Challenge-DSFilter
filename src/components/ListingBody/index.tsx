import "./styles.css"
import CardFilter from "../CardFilter";
import CardListing from "../CardListing";
import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import * as productService from "../../services/product-service";
import Header from "../Header";
import { ContextProductCount } from "../../utils/context-product";

type MinMax = {
  min: number;
  max: number;
}

export default function ListingBody() {

    const [product, setProduct] = useState<ProductDTO[]>([]);
    
    const { setContextProductCount } = useContext(ContextProductCount);

    const [minMax, setMinMax] = useState<MinMax>({
      min: 0,
      max: Number.MAX_VALUE
    });

    useEffect(() => {
      setProduct(productService.findByPrice(minMax.min, minMax.max));
      setContextProductCount(productService.findByPrice(minMax.min, minMax.max).length);
    }, [minMax]);

    function handleFilter(min: number, max: number) {
      setMinMax({...minMax, min: min, max: max});
    }
  
    return (
      <> 
        <main>
          <section id="filter-section">
            <CardFilter onFilter={handleFilter} />
            <div className="dsf-card-listing-container container mt20 mb20">
              {
                product.map((product) => (
                  <CardListing key={product.id} product={product} />
                ))
              }
          
            </div>
          </section>
        </main> 
      </>
    );
}
