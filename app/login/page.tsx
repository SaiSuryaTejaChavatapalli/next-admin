import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <form
        action=""
        className="flex flex-col gap-3 items-center bg-slate-300 p-24 rounded-lg"
      >
        <h1 className="text-3xl font-bold">Login</h1>
        <div>
          <Label>UserName</Label>
          <Input />
        </div>
        <div>
          <Label>Password</Label>
          <Input />
        </div>
        <Button className="w-full">Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
