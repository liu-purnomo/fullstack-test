import ProductForm from "../components/ProductForm";

function EditProduct() {
  return (
    <>
      <div className="hero">
        <h1>Create New Product</h1>
        <div>
          <ProductForm />
        </div>
      </div>
    </>
  );
}

export default EditProduct;