/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./redux/App/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchUserData } from "./redux/features/UserDataSlice";

function UserData() {
  const Dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: RootState) => state.userData);

  useEffect(() => {
    Dispatch(FetchUserData());
  }, [Dispatch]);

  if (state.isloading) {
    return (
      <h1 className="text-center text-xl font-semibold mt-8">Loading...</h1>
    );
  }

  return (
    <div className="    px-4 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">User Table</h2>
      <div className="justify-self-center overflow-scroll h-[40vh] ">
        <table className=" bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="px-6 py-3 border-b">Name</th>
              <th className="px-6 py-3 border-b">Phone</th>
              <th className="px-6 py-3 border-b">Email</th>
              <th className="px-6 py-3 border-b">Age</th>
            </tr>
          </thead>
          <tbody>
            {state.data &&
              state.data.map((user: any) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b">{user.name}</td>
                  <td className="px-6 py-4 border-b">{user.phone}</td>
                  <td className="px-6 py-4 border-b">{user.email}</td>
                  <td className="px-6 py-4 border-b">{user.age}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserData;
