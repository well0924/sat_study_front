// ProductList.tsx
import { CircularProgress, Grid } from "@mui/material";
import { ProductItem } from ".";
import useAsync from "../../hooks/useAsync";
import { NotFoundPage } from "../../pages";
import { getProducts } from "../../utils/api";
import { ProductType } from "../../types";

const ProductList = () => {
  const { loading, data } = useAsync<ProductType[]>(getProducts);

  if (loading) return <CircularProgress />;
  if (!data) return <NotFoundPage />;

  return (
    <Grid container spacing={3}>
      {data.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProductList;
