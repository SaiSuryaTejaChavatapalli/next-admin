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
import { addUser } from "../../../lib/actions";

const widthItem = "w-[45%]";
const AddUserPage = () => {
  return (
    <div className="p-5 mt-5">
      <form action={addUser} className="flex flex-wrap gap-3 justify-between">
        <Input
          type="text"
          placeholder="Username"
          name="username"
          className={widthItem}
        />
        <Input
          type="text"
          placeholder="Email"
          name="email"
          className={widthItem}
        />
        <Input
          type="text"
          placeholder="Password"
          name="password"
          className={widthItem}
        />
        <Input
          type="text"
          placeholder="Phone Number"
          name="phone"
          className={widthItem}
        />
        <Select name="isAdmin">
          <SelectTrigger className={widthItem}>
            <SelectValue placeholder="Is Admin?" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value={"true"}>Yes</SelectItem>
              <SelectItem value={"false"}>No</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select name="isActive">
          <SelectTrigger className={widthItem}>
            <SelectValue placeholder="Is Active?" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value={"true"}>Yes</SelectItem>
              <SelectItem value={"false"}>No</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Textarea
          name="address"
          placeholder="Address"
          id="address"
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

export default AddUserPage;
