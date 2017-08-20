import React, {Component} from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';


class ProductTable extends Component {
    render() {
        let rows = [];
        let lastCategory = null;

        this.props.product.map(prod => {
            if((prod.name.indexOf(this.props.filterText) === -1) || (!prod.stocked && this.props.inStockOnly)) {
                return;
            }

            if(prod.category !== lastCategory) {
                rows.push(<ProductCategoryRow category = {prod.category}  key={prod.category} />);
                console.log("category", prod.category);
            }

            rows.push(<ProductRow product = {prod} key={prod.name} />);
            console.log("name", prod.name);

            lastCategory = prod.category;

        });

        return(
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;