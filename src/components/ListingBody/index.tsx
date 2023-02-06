import "./styles.css"

import CardFilter from "../CardFilter";
import CardListing from "../CardListing";

export default function ListingBody() {
    return (
        <main>
          <section id="filter-section">
            <CardFilter />
            <CardListing />
          </section>
        </main> 
    );
}
