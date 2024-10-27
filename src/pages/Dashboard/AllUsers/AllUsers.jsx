import { FaRegTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AllUsers = () => {
  return (
    <section className="">
      <SectionTitle subTile={"How Many ?"} heading={"Manage All Users"} />
      <div className="flex justify-between items-center uppercase bg-white p-2 mb-2 ">
        <h2 className="text-xl text-black">Items:</h2>
        <h2 className="text-xl text-black">Total Price:</h2>
        <button className="btn btn-warning  text-black ">Pay</button>
      </div>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-500 text-white uppercase ">
            <tr>
              <th>SL</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            <tr className="text-gray-700">
              <th>1</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src="" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td>name</td>
              <td>$122</td>
              <th>
                <button className="btn btn-ghost btn-lg">
                  <FaRegTrashAlt className="text-red-600" />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllUsers;
