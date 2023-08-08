import { IconBrandGithub, IconBrandGoogle, IconBrandMeta, IconAlertOctagon, IconUsers } from "@tabler/icons-react";
import Counter from "../components/Counter";
import Button from "../components/Button";
import { Link } from 'react-router-dom';

export default function Home() {

   return (
      <>
         <div className='border p-14 rounded-2xl bg-slate-700'>
            <div className='relative flex h-32 w-32 mx-auto'>
               <IconAlertOctagon id='ping' className='text-yellow-300 m-auto mb-4 animate-ping absolute inline-flex h-full w-full opacity-30' />
               <IconAlertOctagon className='text-yellow-300 m-auto mb-4 relative inline-flex h-32 w-32 mx-auto' />
            </div>
            <h1 className="text-3xl text-white">Under Contructions</h1>
            <div className='flex justify-center gap-2'>
               <Button onClick={() => alert("tombol diteken")} className={'bg-blue-800 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300'}>
                  <IconBrandMeta />
                  Login
               </Button>
               <Button className={'bg-zinc-800 hover:bg-zinc-700'}>
                  <IconBrandGithub />
                  Login
               </Button>
               <Button className={'bg-gradient-to-br from-blue-600 from-10% via-sky-500 via-30% to-emerald-400 to-90% hover:from-emerald-400 hover:from-10% hover:via-sky-500 hover:via-70% hover:to-blue-600 hover:to-90% animate-bounce transition-all duration-500'}>
                  <IconBrandGoogle />
                  Login
               </Button>
            </div>
         </div>

         <div className='border p-7 rounded-2xl bg-slate-700 mt-3'>
            <Counter initialValue={0} />
         </div>

         <Link to={'/users'} className="text-white mt-2 rounded inline-flex justify-end gap-2 p-2 border-b-2 hover:bg-white/10"><IconUsers /> Users</Link>
      </>
   )
}