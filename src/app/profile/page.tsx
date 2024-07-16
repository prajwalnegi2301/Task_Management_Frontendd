'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  name: string;
  role: string;
  email: string;
  phone: string;
  gender: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/user/getUserProfile",
          {
            withCredentials: true,
          }
        );
        setUser(data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  const deleteCustomer = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const { data } = await axios.delete(
        "http://localhost:8000/api/v1/user/deleteUser",
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-3xl w-full mx-auto bg-purple-200 p-6 rounded-lg shadow-lg">
        {user ? (
          <>
            <div className="text-center text-3xl font-bold text-white mb-4">{user.email}</div>
            <div className="text-white">
              <div className="mb-2">
                <strong>Role:</strong> {user.role}
              </div>
              <div className="mb-2">
                <strong>Email:</strong> {user.email}
              </div>
              <button onClick={deleteCustomer} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Delete User</button>
            </div>
          </>
        ) : (
          <div className="text-center text-3xl font-bold text-white mb-4">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
