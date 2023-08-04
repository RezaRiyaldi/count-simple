import { IconAlertOctagon, IconBrandMeta, IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react';
import Button from './components/Button';
import Counter from './components/Counter';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-sky-800 grid place-content-center text-center">
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
          <Button className={'bg-gradient-to-br from-blue-600 from-10% via-sky-500 via-30% to-emerald-400 to-90% hover:from-emerald-400 hover:from-10% hover:via-sky-500 hover:via-70% hover:to-blue-600 hover:to-90% animate-bounce'}>
            <IconBrandGoogle />
            Login
          </Button>
        </div>
      </div>

      <div className='border p-7 rounded-2xl bg-slate-700 mt-3'>
        <Counter initialValue={0}/>
      </div>
    </div>
  );
}