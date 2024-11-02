import { useLoaderData, } from 'react-router-dom';
import Coffe from './Coffe';
import { useState } from 'react';

const Addcoffe = () => {
    const loadder = useLoaderData()
    const [user, setuser] = useState(loadder)

   
    return (
        <div>
            <h1>addcoffe {user.length}</h1>
            <div className='md:grid grid-cols-2 gap-3 s'>
                {
                    user.map(copy => <Coffe key={copy._id} user={user} setuser={setuser} coffe={copy}></Coffe>)
                }
            </div>
        </div>
    );
};

export default Addcoffe;