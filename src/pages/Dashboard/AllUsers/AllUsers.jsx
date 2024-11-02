import { FaRegTrashAlt, FaUser } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result); // To log the confirmation details

        // Send DELETE request using axiosSecure
        axiosSecure
          .delete(`/users/${user._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              // Refetch the cart or items to reflect the deletion
              refetch();

              // Show success alert
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            } else {
              // If deletion fails, notify the user
              Swal.fire({
                title: "Error",
                text: "The item could not be deleted.",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            // Handle error during the DELETE request
            console.error("Error deleting item:", error);
            Swal.fire({
              title: "Error",
              text: "There was an issue deleting the item.",
              icon: "error",
            });
          });
      }
    });
  };
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
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-orange-400 hover:bg-orange-800"
                    >
                      <FaUser className="text-white" />
                    </button>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost btn-lg"
                  >
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
