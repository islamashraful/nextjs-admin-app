import Image from "next/image";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

import styles from "@/app/ui/dashboard/products/products.module.css";

const products = [
  {
    id: 1,
    title: "Product 1",
    desc: "Description of Product 1",
    price: 19.99,
    createdAt: new Date("2024-02-10"),
    stock: 10,
  },
  {
    id: 2,
    title: "Product 2",
    desc: "Description of Product 2",
    price: 29.99,
    createdAt: new Date("2024-02-09"),
    stock: 15,
  },
  {
    id: 3,
    title: "Product 3",
    desc: "Description of Product 3",
    price: 24.99,
    createdAt: new Date("2024-02-08"),
    stock: 5,
  },
  {
    id: 4,
    title: "Product 4",
    desc: "Description of Product 4",
    price: 39.99,
    createdAt: new Date("2024-02-07"),
    stock: 20,
  },
];

const Products = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>

                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={100} />
    </div>
  );
};

export default Products;
