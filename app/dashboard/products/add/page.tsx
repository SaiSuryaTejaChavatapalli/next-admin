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
      <form action="" className="flex flex-wrap gap-3 justify-between">
        <Input type="text" placeholder="title" className={widthItem} />
        <Select>
          <SelectTrigger className={widthItem}>
            <SelectValue placeholder="Choose a Category" />
          </SelectTrigger>
          <SelectContent className=" ">
            <SelectGroup>
              <SelectItem value="kitchen">Kitchen</SelectItem>
              <SelectItem value="phone">Phone</SelectItem>
              <SelectItem value="computer">Computer</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          type="number"
          placeholder="price"
          name="price"
          className={widthItem}
        />
        <Input
          type="number"
          placeholder="stock"
          name="stock"
          className={widthItem}
        />
        <Input
          type="number"
          placeholder="color"
          name="color"
          className={widthItem}
        />
        <Input
          type="number"
          placeholder="size"
          name="size"
          className={widthItem}
        />
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
