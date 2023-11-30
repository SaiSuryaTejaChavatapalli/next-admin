//@ts-nocheck
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { deleteProduct } from "../lib/actions";
import Image from "next/image";
import noAvatar from "@/public/no-avatar.png";
import { Button } from "@/components/ui/button";

export function ProductsTable({ rowData }) {
  console.log("RowData in products", rowData);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Color</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rowData.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Image
                  src={product.img || noAvatar}
                  alt="img"
                  width={"40"}
                  height={"40"}
                  className="rounded-full object-cover"
                />
                <span>{product.title}</span>
              </div>
            </TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.createdAt?.toString().slice(4, 16)}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{product.size}</TableCell>
            <TableCell>{product.color}</TableCell>

            <TableCell>
              <div className="flex gap-2 ">
                <Link href={`/dashboard/products/${product.id}`}>
                  <Button>View</Button>
                </Link>
                <form action={deleteProduct}>
                  <input name="id" value={product.id} hidden />
                  <Button type="submit" variant={"destructive"}>
                    Delete
                  </Button>
                </form>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
