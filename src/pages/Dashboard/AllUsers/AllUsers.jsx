import { FaRegTrashAlt, FaUser } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return (
    <section className="">
      <SectionTitle subTile={"How Many ?"} heading={"Manage All Users"} />
      <div className="flex justify-between items-center uppercase bg-white p-2 mb-2 ">
        <h2 className="text-xl text-black">Total User:{users.length}</h2>
      </div>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-500 text-white uppercase ">
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {users.map((user, index) => (
              <tr key={user._id} className="text-gray-700">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-ghost bg-orange-400 hover:bg-orange-800">
                    <FaUser className="text-white" />
                  </button>
                </td>
                <th>
                  <button className="btn btn-ghost btn-lg">
                    <FaRegTrashAlt className="text-red-600" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllUsers;
