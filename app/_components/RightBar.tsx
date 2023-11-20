import Image from "next/image";
import AstronoutImg from "../../public/astronout.jpg";
import { MdPlayCircleFilled } from "react-icons/md";
const RightBar = () => {
  return (
    <div className="fixed">
      <div className="relative rounded-md bg-slate-200 mb-3 py-5 px-2">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
          <Image
            src={AstronoutImg}
            alt=""
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="flex flex-col gap-5">
          <span className="font-bold">🔥 Available Now</span>
          <h3 className="font-semibold text-sm">
            How to use the new version of the admin dashboard?
          </h3>
          <span>Take 4 minutes to learn</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, ut!
            Delectus voluptatum deserunt voluptas perspiciatis. Eaque omnis?
          </p>
          <button className="p-2 flex items-center gap-2 border-none rounded-md bg-purple cursor-pointer w-max">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
