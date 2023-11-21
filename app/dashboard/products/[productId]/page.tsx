import { fetchProduct } from "@/app/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import noAvatar from "@/public/no-avatar.png";
import { updateProduct } from "@/app/lib/actions";
type UserPageProps = {
  params: {
    productId: string;
  };
};
const UserPage = async ({ params }: UserPageProps) => {
  const product = await fetchProduct(params.productId);

  return (
    <div className="flex gap-4">
      <div className="w-2/5">
        <Image
          src={product.img || noAvatar}
          alt="userImg"
          width={"200"}
          height={"200"}
          className="w-full h-80 object-cover"
        />
        <h1 className="text-2xl text-center mt-2 font-bold">{product.title}</h1>
      </div>
      <div className="flex flex-col w-3/5 gap-2">
        <form action={updateProduct}>
          <input type="hidden" name="id" value={product.id} />
          <div>
            <Label htmlFor="title">Title</Label>
            <Input type="text" name="title" placeholder={product.title} />
          </div>
          <div>
            <Label htmlFor="price">Price</Label>
            <Input type="text" name="price" placeholder={product.price} />
          </div>
          <div>
            <Label htmlFor="stock">Stock</Label>
            <Input type="number" name="stock" placeholder={product.stock} />
          </div>
          <div>
            <Label htmlFor="color">Color</Label>
            <Input type="text" name="color" placeholder={product.color} />
          </div>
          <div>
            <Label htmlFor="size">Size</Label>
            <Input type="text" name="size" placeholder={product.size} />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Select name="category">
              <SelectTrigger>
                <SelectValue placeholder="Choose a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="kitchen">Kitchen</SelectItem>
                  <SelectItem value="grocery">Grocery</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea name="description" placeholder={product.description} />
          </div>
          <div>
            <Button className="w-full">Update</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
