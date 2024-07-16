// 'use client'
// import React, { useState } from 'react'
// import Link from 'next/link'
// import axios, { AxiosHeaders } from 'axios'

// const LeftSidebar: React.FC = () => {
//     const [active, setActive] = useState(false);

//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");


//     const handleLogout = async (e: any) => {
//         e.preventDefault();

//         try {
//             const { data } = await axios.get('http://localhost:8000/api/v1/user/logoutUser', {
//                 withCredentials: true,
//             });
//             console.log("userLogout");
//         }
//         catch (err) {
//             console.log(err);
//         }
//     }


//     const handleTask = async (e: any) => {
//         e.preventDefault();
//         setActive(!active);

//     }


//     const createTask = async (e: any) => {
//         e.preventDefault();

//         if (title === "") {
//             alert("Please enter a title");
//         }
//         else if (description === "") {
//             alert("Please enter a description");
//         }
//         else {
//             try {
//                 const { data } = await axios.post('http://localhost:8000/api/v1/task/postTask', {
//                     title: title,
//                     description: description,
//                 }, {
//                     withCredentials: true,
//                 })
//                 console.log(data);
//                 setTitle("");
//                 setDescription("");
//                 setActive(false);
//             }
//             catch (err) {
//                 console.log(err);
//             }
//         }
//     }



//         return (
//             <div className='min-h-screen w-1/4 flex '>

//                 <div>
//                     <div><img src="" alt="profile_Image" /></div>
//                     <div className='text-center'>Name</div>

//                     <Link href="/profile">
//                         Profile</Link>

//                     <button onClick={handleLogout}>Logout</button>

//                     <button onClick={handleTask}>{active ? <div>Close Tab</div> : <div>Create Task</div>}</button>
//                 </div>

//                 <div className=''>{active && (
//                     <div>

//                         <form action="">
//                             <input type="text" placeholder='Task Title' value={title} onChange={(e) => setTitle(e.target.value)} />

//                             <input type="text" placeholder='Task Description' value={description} onChange={(e) =>
//                                 setDescription(e.target.value)} />

//                             <button onClick={createTask}>Submit</button>
//                         </form>

//                     </div>
//                 )}</div>
//             </div>
//         )
//     }

//     export default LeftSidebar

'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const LeftSidebar: React.FC = () => {
    const [active, setActive] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {
            const { data } = await axios.get('http://localhost:8000/api/v1/user/logoutUser', {
                withCredentials: true,
            });
            console.log("User logged out:", data);
            // Handle further logout actions if needed
        } catch (err) {
            console.log(err);
        }
    };

    const handleTask = () => {
        setActive(!active);
    };

    const createTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (title === '') {
            alert('Please enter a title');
        } else if (description === '') {
            alert('Please enter a description');
        } else {
            try {
                const { data } = await axios.post('http://localhost:8000/api/v1/task/postTask', {
                    title: title,
                    description: description,
                }, {
                    withCredentials: true,
                });
                console.log('Task created:', data);
                setTitle('');
                setDescription('');
                setActive(false);
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className='fixed top-0 left-0 h-full w-1/4 flex flex-col justify-between bg-gray-900 text-white'>
        <div className='p-6'>
            <div className='mb-4'>
                <img src='' alt='profile_Image' className='w-16 h-16 rounded-full mx-auto mb-2' />
                <div className='text-center'>Name</div>
            </div>

            <ul className='mb-8'>
                <li className='mb-2'>
                    <Link href='/profile'>
                        <button className='block text-center hover:text-gray-400'>Profile</button>
                    </Link>
                </li>
                <li className='mb-2'>
                    <button onClick={handleLogout} className='block w-full text-center py-2 px-4 bg-red-600 hover:bg-red-700 rounded'>
                        Logout
                    </button>
                </li>
                <li>
                    <button onClick={handleTask} className='block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded'>
                        {active ? 'Close Tab' : 'Create Task'}
                    </button>
                </li>
            </ul>

            {active && (
                <div>
                    <form onSubmit={createTask}>
                        <input
                            type='text'
                            placeholder='Task Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='block w-full mb-4 px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                        />

                        <input
                            type='text'
                            placeholder='Task Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className='block w-full mb-4 px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                        />

                        <button type='submit' className='block w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded'>
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </div>
    </div>
    );
};

export default LeftSidebar;
