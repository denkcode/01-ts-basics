// У цьому фрагменті коду є об'єкт product, який описує товар.

const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);

interface Product {
    readonly id: number,
    title: string,
    description?: string,
}
