import { ArrowRight } from "lucide-react";

export default function PrimaryBtn({ text }: { text: string }) {
  return (
    <button className="bg-[var(--brandColor)] mt-2 cursor-pointer text-white px-6 py-[18px] rounded-[5px] font-bold text-sm flex items-center">
      {text}
      <ArrowRight className="ml-2 w-4 h-4" />
    </button>
  );
}
