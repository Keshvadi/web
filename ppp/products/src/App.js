import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function SearchBar({ filterText, isStockOnly, onFilterTextChange, onIsStockOnlyChange }) {
  return (
    <>
      <form>
        <input type="text" value={filterText} placeholder="Search ..." onChange={(e) => onFilterTextChange(e.target.value)}/><br />
        <label><input type="checkbox" checked={isStockOnly} onChange={(e) => onIsStockOnlyChange(e.target.checked)} /> {' '} Only show products in stock</label>
      </form>
    </>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <>
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    </>
  );
}
function ProductRow({ product }) {
  let name = product.name;
  if (!product.stocked)
    name = <span style={{ color: 'red' }}>{product.name}</span>;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
}

function ProductTable({ products, filterText, isStockOnly }) {
  const rows = [];
  let lastCategory = null;
  products.forEach(product => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
      return;
    if (isStockOnly && !product.stocked)
      return;
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [isStockOnly, setStockOnly] = useState(false);

  return (
    <>
      <SearchBar filterText={filterText} isStockOnly={isStockOnly} onFilterTextChange={setFilterText} onIsStockOnlyChange={setStockOnly}/>
      <ProductTable products={products} filterText={filterText} isStockOnly={isStockOnly} />
    </>
  );
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <FilterableProductTable products={products} />
      {/* </header> */}
    </div>
  );
}

const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];
export default App;

