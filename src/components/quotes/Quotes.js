import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

const Quotes = ({ filteredQuotes, category, categories, onCategoryChange, addToFavorites }) => {
    return (
    <section className="all-quotes">
        <div className="quotes wrapper">
          <div className="category-header">
            <h2 className="category-header">Pick Your Favorite Quotes Below</h2>
          <p>Browse through your collection of quotes</p>
            <CategoryForm categories={categories} category={category} onCategoryChange={onCategoryChange} />
          </div>
          {filteredQuotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} addToFavorites={addToFavorites} />
        ))}
        </div>
    </section>
    );
}

export default Quotes;