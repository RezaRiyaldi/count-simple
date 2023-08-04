import { IconArrowBackUp, IconPhone, IconWorldWww, IconBrandGoogleMaps, IconBuildingSkyscraper, IconMail, IconUser } from '@tabler/icons-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Users() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      async function getUsers() {
         const { data } = await axios('https://jsonplaceholder.typicode.com/users');
         console.log(data)
         setUsers(data)
      }

      getUsers();
   }, []);

   return (
      <div className='py-3 mx-3'>
         <Link to={'/'} className='flex justify-start mb-3 text-white'><IconArrowBackUp/> Back</Link>
         {users.length ?
            <ul className='text-left text-slate-200'>
               {users.map((user) => (
                  <li key={user.id} className='bg-slate-700 border p-2 rounded mb-2 hover:scale-105 transition-all hover:bg-slate-600 hover:border-0'>
                     <h1 className='text-2xl border-b-2 mb-3 inline-flex gap-1 pb-1'><IconUser className='my-auto' />{user.name} - ({user.username})</h1>
                     <p className='flex gap-1 mb-2'><IconPhone /> Phone: {user.phone}</p>
                     <p className='flex gap-1 mb-2'><IconMail /> Email: {user.email}</p>
                     <p className='flex gap-1 mb-2'><IconWorldWww /> Website: {user.website}</p>
                     <p className='flex gap-1 mb-2'><IconBuildingSkyscraper /> Company: {user.company.name}</p>
                     <p className='flex gap-1 mb-2'><IconBrandGoogleMaps /> Address: {user.address.street} {user.address.suite}, {user.address.city} - {user.address.zipcode}</p>
                  </li>
               ))}
            </ul>
            : 'Data Tidak ada'}
      </div>
   );
}