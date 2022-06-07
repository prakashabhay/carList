export type ProductType = {
    id: string;
    modelName: string;
    bodyType: string;
    modelType: string;
    imageUrl: string;
}
export type ProductListProps = {
    cars: ProductType[]|null;
  };