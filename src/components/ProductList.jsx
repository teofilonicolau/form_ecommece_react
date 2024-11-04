import React, { useState } from 'react';
import './ProductList.css';

const ProductList = () => {
    // Lista de produtos com a propriedade inStock
    const products = [
        { id: 1, name: 'Camiseta', price: 29.99, inStock: true },
        { id: 2, name: 'Calça', price: 49.99, inStock: false },
        { id: 3, name: 'Boné', price: 19.99, inStock: true },
        { id: 4, name: 'Jaqueta', price: 99.99, inStock: false },
        { id: 5, name: 'Tênis', price: 89.99, inStock: true },
    ];

    // Estado para controlar se apenas produtos em estoque serao exibidos
    const [showInStockOnly, setShowInStockOnly] = useState(false);

    // Filtragem dos produtos com base no estado showInStockOnly
    const filteredProducts = showInStockOnly
        ? products.filter((product) => product.inStock)
        : products;

    return (
        <div className="product-list">
            <h1>Lista de Produtos</h1>
            {/* Botao para alternar entre mostrar todos ou apenas em estoque */}
            <button onClick={() => setShowInStockOnly(!showInStockOnly)}>
                {showInStockOnly ? 'Mostrar Todos' : 'Mostrar Apenas em Estoque'}
            </button>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        {product.name} - R${product.price.toFixed(2)}
                        {!product.inStock && <span className="out-of-stock"> (Sem Estoque)</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
