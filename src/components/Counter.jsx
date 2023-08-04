import { useState } from "react";
import Button from "./Button";

export default function Counter({ initialValue }) {
   const [count, setCount] = useState(initialValue);

   function handleCount(value) {
      setCount(count + value)
   }

   return (
      <>
         <h1 className="text-5xl text-white">{count}</h1>
         <div className="flex gap-2 justify-center mt-3">
            <Button onClick={() => handleCount(1)} className={`bg-emerald-600 hover:bg-emerald-500 active:scale-110 transition-all`}>
               +1
            </Button>
            <Button onClick={() => handleCount(-1)} className={`bg-pink-700 hover:bg-pink-600 active:-translate-y-1 transition-all`}>
               -1
            </Button>
         </div>

      </>
   )
}