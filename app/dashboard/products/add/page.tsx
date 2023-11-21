import { addProduct } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const widthItem = "w-[45%]";
const AddProductPage = () => {
  return (
    <div className="p-5 mt-5">
      <form
        action={addProduct}
        className="flex flex-wrap gap-3 justify-between"
      >
        <Input
          type="text"
          placeholder="Title"
          className={widthItem}
          name="title"
        />
        <Select name="category">
          <SelectTrigger className={widthItem}>
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
        <Input
          type="number"
          placeholder="Price"
          name="price"
          className={widthItem}
        />
        <Input
          type="number"
          placeholder="Stock"
          name="stock"
          className={widthItem}
        />
        <Select name="size">
          <SelectTrigger className={widthItem}>
            <SelectValue placeholder="Choose Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="S">S</SelectItem>
              <SelectItem value="M">M</SelectItem>
              <SelectItem value="L">L</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Input placeholder="Color" name="color" className={widthItem} />

        <Textarea
          name="description"
          placeholder="Description"
          id="description"
          rows={10}
          className="w-full"
        />
        <Button type="submit" className="w-full p-7">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddProductPage;
