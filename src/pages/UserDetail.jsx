import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { IconArrowBackUp } from '@tabler/icons-react';
import { IconUser } from '@tabler/icons-react';
import { IconPhone } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import { IconWorldWww } from '@tabler/icons-react';
import { IconBuildingSkyscraper } from '@tabler/icons-react';
import { IconBrandGoogleMaps } from '@tabler/icons-react';
import { IconHome } from '@tabler/icons-react';

export default function UserDetail() {
   const [user, setUser] = useState([]);
   const { id } = useParams();

   useEffect(() => {
      try {
         async function getUserDetail(id) {
            const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUser(data);
         }

         getUserDetail(id)
      } catch (error) {
         console.log('Something went wrong cok')
      }

   }, []);

   return (
      <div className='mx-3'>
         <div className='flex justify-between'>
            <Link to={'/users'} className='flex gap-2 mb-1 text-white hover:bg-white/25 rounded w-20 p-2 justify-start'>
               <IconArrowBackUp /> Back
            </Link>
            <Link to={'/'} className='flex gap-2 mb-1 text-white hover:bg-white/25 rounded w-20 p-2 justify-start'>
               <IconHome /> Home
            </Link>
         </div>
         {
            user.company != undefined ?
               <>
                  <div className='bg-slate-700 text-white p-2 border rounded'>
                     <h1 className='text-2xl flex gap-2'><IconUser className='my-auto' />{user.name} - ({user.username})</h1>
                  </div>
                  <div className='bg-slate-700 text-white p-2 border rounded mt-2'>
                     <p className='flex gap-1 mb-2'><IconPhone /> Phone: {user.phone}</p>
                     <p className='flex gap-1 mb-2'><IconMail /> Email: {user.email}</p>
                     <p className='flex gap-1 mb-2'><IconWorldWww /> Website: {user.website}</p>
                     <p className='flex gap-1 mb-2'><IconBuildingSkyscraper /> Company: {user.company.name}</p>
                     <p className='flex gap-1 mb-2'><IconBrandGoogleMaps /> Address: {user.address.street} {user.address.suite}, {user.address.city} - {user.address.zipcode}</p>
                  </div>
               </>
               : "Loading"}
      </div>
   );
}