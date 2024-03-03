// AdminDashboard.js
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPlus,
  faEllipsisH,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import AddUserForm from "./AddUserForm";

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    // Example users data
    {
      id: 1,
      name: "Hamza Bhutto",
      city: "Sukkur",
      email: "hamzabhutto@gmail.com",
      password: "*******",
      cctvIp: ["192.168.1.1", "192.168.1.2"],
    },
    {
      id: 1,
      name: "Sain Bux",
      city: "Dera Bugti",
      email: "Sainbuxdev@gmail.com",
      password: "********",
      cctvIp: ["192.168.10.1", "192.168.10.2"],
    },
    // Add more user objects
  ]);

  // TODO: Add methods for handling user actions like add, edit, delete

  const handleAddUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden mt-6">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <FontAwesomeIcon icon={faUser} className="mr-2" /> Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                City
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Password
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                CCTV IP
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="text-gray-900 whitespace-no-wrap">
                      {user.name}
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {user.city}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {user.email}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {user.password}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {user.cctvIp}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                  <FontAwesomeIcon
                    icon={faEllipsisH}
                    className="text-gray-500 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddUserForm onAddUser={handleAddUser} />
    </div>
  );
};

export default AdminDashboard;
