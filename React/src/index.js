import React, {Component} from 'react';
import {render} from 'react-dom';
import {PRODUCTS} from './ListProductsJSON';
import FilterableProductTable from './components/FilterableProductTable';
require('../CSS/app.scss');

render(
    <FilterableProductTable products={PRODUCTS}/>,
    document.getElementById('container')
);