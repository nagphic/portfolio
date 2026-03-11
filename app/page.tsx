import Link from "next/link";
import Break from "./components/Break";

export default function Home() {
  return (
    <div className="w-md py-20">
      <div className="space-y-2">
        <h1>Nagphic - Design Engineer</h1>
        <p className="text-[#cfcfcf] text-sm">Hi guys, my name is nagphic. I live as a student during the day and enjoy a free lifestyle where I do what I want once I get home.</p>
      </div>
      <Break />
      <div>
        <h1>Projects</h1>
        <p className="text-[#cfcfcf] text-sm">Not yet.</p>
      </div>
      <Break />
      <div>
        <h1>Links</h1>
        <p className="text-[#cfcfcf] text-sm">Github : <Link href="https://github.com/nagphic" className="text-white">@nagphic</Link></p>
        <p className="text-[#cfcfcf] text-sm">Twitter: <Link href="https://twitter.com/nagphic" className="text-white">@nagphic</Link></p>
      </div>
    </div>
  );
}
