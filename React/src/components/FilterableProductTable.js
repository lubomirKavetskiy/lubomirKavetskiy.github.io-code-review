import React, {Component} from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: '',
            inStockOnly: 'false'
        };

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(filterTex, inStockOnl) {
        this.setState({
            filterText: filterTex,
            inStockOnly: inStockOnl,
        });

        console.log('==', filterTex, inStockOnl);
    }

    render() {
        const {products} = this.props;

        return(
            <div>
                <SearchBar
                    filterText = {this.state.filterText}
                    inStockOnly = {this.state.inStockOnly}
                    onUserInput={this.handleUserInput}
                />
                <ProductTable
                    product = {products}
                    filterText = {this.state.filterText}
                    inStockOnly = {this.state.inStockOnly}
                    onUserInput={this.handleUserInput}
                />
            </div>
        );
    }
}

export default FilterableProductTable;