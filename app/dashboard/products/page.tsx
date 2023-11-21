import Pagination from "@/app/_components/Pagination";
import { ProductsTable } from "@/app/_components/ProductsTable";
import SearchComp from "@/app/_components/SearchComp";
import { fetchProducts } from "@/app/lib/data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = async () => {
  const products = await fetchProducts();
  return (
    <div className=" p-5 rounded-lg mt-5">
      <div className="flex items-center justify-between">
        <SearchComp placeholder="Search for a product..." />
        <Link href={"/dashboard/products/add"}>
          <Button className="p-2 rounded-lg  text-white">Add New</Button>
        </Link>
      </div>

      <ProductsTable rowData={products} />
      <Pagination />
    </div>
  );
};

export default ProductsPage;
