import ProductCarousel from "./ProductCarousel";
import {ProductItem} from './ProductItem'

import {ProductListProps} from '../utility/types'

export const ProductList: React.FC<ProductListProps> = ({ cars }) => {
  if(!cars){
    return null
  }
    return (
     <ProductCarousel>
      {cars?.map((item) => (
       <ProductItem key={item.id} {...item} />
    ))}
    </ProductCarousel>
    );
  };