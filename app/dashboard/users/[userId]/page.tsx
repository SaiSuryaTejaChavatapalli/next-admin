import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
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
const UserPage = async ({
  params,
}: {
  params: {
    userId: string;
  };
}) => {
  const user = await fetchUser(params.userId);
  return (
    <div className="flex gap-4">
      <div className="w-2/5">
        <Image
          src={user.img || noAvatar}
          alt="userImg"
          width={"200"}
          height={"200"}
          className="w-full h-full h-1/2 p-3 object-cover"
        />
      </div>

      <div className="flex flex-col w-3/5">
        <form action={updateUser} className="flex flex-col gap-2">
          <div>
            <Label htmlFor="username">User Name</Label>
            <Input type="text" name="username" placeholder={user.username} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="text" name="email" placeholder={user.email} />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input type="text" name="password" />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input type="number" name="phone" placeholder={user.phone} />
          </div>

          <div>
            <Label htmlFor="isAdmin">Is Admin?</Label>
            <Select name="isAdmin">
              <SelectTrigger>
                <SelectValue placeholder="IsAdmin" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="isActive">Is Active?</Label>
            <Select name="isActive">
              <SelectTrigger>
                <SelectValue placeholder="IsActive" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="true">Yes</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Textarea
              name="address"
              placeholder="Address"
              id="address"
              rows={6}
              className="w-full"
            />
          </div>

          <div>
            <input type="hidden" value={user.id} name="id" />
          </div>
          <Button type="submit">Update</Button>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
