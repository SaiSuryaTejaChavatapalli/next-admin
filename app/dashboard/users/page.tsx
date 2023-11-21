import Pagination from "@/app/_components/Pagination";
import SearchComp from "@/app/_components/SearchComp";
import { deleteUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UsersTable } from "@/app/_components/UsersTable";
type UsersPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const UsersPage = async ({ searchParams }: UsersPageProps) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";
  const users = await fetchUsers(q, page);

  return (
    <div className=" p-5 rounded-lg mt-5">
      <div className="flex items-center justify-between">
        <SearchComp placeholder="Search for a user..." />
        <Link href={"/dashboard/users/add"}>
          <Button className="p-2 rounded-lg  text-white">Add New</Button>
        </Link>
      </div>
      <UsersTable rowData={users} />
      <Pagination />
    </div>
  );
};

export default UsersPage;
