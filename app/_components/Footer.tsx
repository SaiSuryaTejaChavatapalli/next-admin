import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex items-center justify-between mt-7">
      <div className="font-bold">Sai Surya Teja</div>
      <div className="text-xs flex gap-2 items-center">
        <MdCopyright size={20} />
        <span>All rights are reserved</span>
      </div>
    </div>
  );
};

export default Footer;
