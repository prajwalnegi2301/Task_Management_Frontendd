// 'use client'

// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios';

// interface Task {
//     title: string,
//     description: string,
//     ownerName: string,
//     ownerId: string,
//     _id: string
// }
// const page = () => {

    
//     const [tasks, setTasks] = useState<Task[]>([]);

//     const getTasks = async () => {
//         try {
//             const { data } = await axios.get('http://localhost:8000/api/v1/task/getMyTask', {
//                 withCredentials: true

//             })
//             setTasks(data.tasks)
//             console.log(data);
//         }
//         catch (error) {
//             console.log(error);
//         }

//         useEffect(() => {
//             getTasks();
//         }, []);



//     }

//     return (
//         <div>
//             {tasks && tasks.length > 0 ? (
//                 tasks.map((task: Task) => (
//                     <div key={task._id} >
//                         <div >
//                             <h5 >{task.title}</h5>
//                             <p>{task.description}</p>
//                         </div>
//                     </div>
//                 ))
//             ) : (
//                 <p className="text-center text-gray-400">No tasks available.</p>
//             )}


//         </div>
//     )
// }

// export default page


'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Task {
    title: string;
    description: string;
    ownerName: string;
    ownerId: string;
    _id: string;
}

const Page = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const getTasks = async () => {
        try {
            const { data } = await axios.get('http://localhost:8000/api/v1/task/getMyTask', {
                withCredentials: true
            });
            setTasks(data.tasks);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">
            <div className="max-w-3xl mx-auto">
                {tasks && tasks.length > 0 ? (
                    tasks.map((task: Task) => (
                        <div key={task._id} className="bg-white rounded-lg shadow-lg p-4 mb-4">
                            <h5 className="text-lg font-bold mb-2">{task.title}</h5>
                            <p className="text-gray-700">{task.description}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-400">No tasks available.</p>
                )}
            </div>
        </div>
    );
};

export default Page;
