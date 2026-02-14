import { FaSearch } from "react-icons/fa";

export default function NoItem() {
  return (
<div className="flex flex-col items-center! my-12.5! mx-auto! gap-3.75 text-[#666] opacity-70">
<FaSearch className="text-5xl opacity-50"/>
<h3 className="font-normal text-base leading-normal">
  Tidak Ada Tugas
</h3>
</div>
  );
}
