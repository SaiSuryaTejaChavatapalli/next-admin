import Pagination from "@/app/_components/Pagination";
import SearchComp from "@/app/_components/SearchComp";
import { deleteUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type UsersPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};
const UsersPage = async ({ searchParams }: UsersPageProps) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";
  console.log("QQ", q);
  const users = await fetchUsers(q, page);

  return (
    <div className="bg-slate-300 p-5 rounded-lg mt-5">
      <div className="flex items-center justify-between">
        <SearchComp placeholder="Search for a user..." />
        <Link href={"/dashboard/users/add"}>
          <Button className="p-2 rounded-lg  text-white">Add New</Button>
        </Link>
      </div>
      <table className="w-full mt-5">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id} className="my-4">
              <td>
                <div className="flex items-center gap-1">
                  <Image
                    src={user.img}
                    alt="img"
                    width={"40"}
                    height={"40"}
                    className="rounded-full object-cover"
                  />
                  <span>{user.username}</span>
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className="flex gap-2 ">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button>View</button>
                  </Link>
                  <form action={deleteUser}>
                    <input name="id" value={user.id} hidden />
                    <button type="submit">Delete</button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;
