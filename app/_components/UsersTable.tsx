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
import { deleteUser } from "../lib/actions";
import Image from "next/image";
import noAvatar from "@/public/no-avatar.png";
import { Button } from "@/components/ui/button";

export function UsersTable({ rowData }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rowData.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Image
                  src={user.img || noAvatar}
                  alt="img"
                  width={"40"}
                  height={"40"}
                  className="rounded-full object-cover"
                />
                <span>{user.username}</span>
              </div>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.createdAt?.toString().slice(4, 16)}</TableCell>
            <TableCell>{user.isAdmin ? "Admin" : "Client"}</TableCell>
            <TableCell>{user.isActive ? "active" : "passive"}</TableCell>
            <TableCell>
              <div className="flex gap-2 ">
                <Link href={`/dashboard/users/${user.id}`}>
                  <Button>View</Button>
                </Link>
                <form action={deleteUser}>
                  <input name="id" value={user.id} hidden />
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
