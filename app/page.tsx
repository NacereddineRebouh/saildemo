"use client";
import Scene from "@/components/Scene";
import Image from "next/image";
import { useState } from "react";
import texture1 from "@/public/icons/aquamarin_icon.jpg";
import texture2 from "@/public/icons/aussie_green_icon.jpg";
export default function Home() {
  const [texture, settexture] = useState(1);
  return (
    <main className="flex h-full w-full min-h-screen flex-col items-center justify-start">
      <h1 className="text-white font-bold absolute z-10 top-10 mx-auto text-4xl">
        Sail Demo
      </h1>
      <div className="flex-1 w-full h-full">
        <Scene texture={texture} />
      </div>

      <div className="absolute bottom-10 flex items-center justify-center gap-x-4">
        {/* texture1 */}

        <label
          className="relative aspect-square w-24 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            settexture(1);
          }}
        >
          <input
            type="radio"
            name="Textures"
            id="2"
            className="peer opacity-0 absolute w-0 h-0"
            defaultChecked
          />
          <div className="rounded-tl-3xl rounded-br-3xl hover:scale-110 border-2 active:scale-100 scale-100 transition-all duration-200  border-white w-full h-full overflow-hidden  relative bg-amber-700 peer-checked:scale-90 peer-checked:rounded-3xl">
            <Image
              src={texture1}
              alt={"Icon1"}
              fill
              className="w-full object-cover h-full"
            />
          </div>
        </label>
        {/* texture2 */}

        <label
          className="relative aspect-square w-24 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            settexture(2);
          }}
        >
          <input
            type="radio"
            name="Textures"
            id="3"
            className="peer opacity-0 absolute w-0 h-0"
          />
          <div className="rounded-tl-3xl rounded-br-3xl border-2 hover:scale-110 active:scale-100 scale-100 transition-all duration-200 border-white relative overflow-hidden w-full h-full bg-teal-700 peer-checked:scale-90 peer-checked:rounded-3xl">
            <Image
              src={texture2}
              alt={"Icon2"}
              fill
              className="w-full object-cover h-full"
            />
          </div>
        </label>
      </div>
    </main>
  );
}
