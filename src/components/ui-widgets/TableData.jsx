import { LuEdit3 } from "react-icons/lu";
import { Link } from "react-router-dom";

const TableData = () => {
  return (
    <tr className="bg-white text-red-500 border-b">
      <th scope="row" className="pl-3 py-4 text-gray-900 whitespace-nowrap">
        Solomon Afeez
      </th>
      <td className="py-4 text-slate-800 pl-2">09045328812</td>
      <td className="py-4 text-slate-800 pl-2">29</td>
      <td className="py-4 text-slate-800 pl-2">SolomonAfeez@gmail.com</td>
      <td className="py-4 text-slate-800 pl-2">Female</td>
      <td className="py-4 text-slate-800 pl-2">Nigeria</td>
      <td className="py-4 text-slate-800 pl-2">
        <div className="flex items-center">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
          Discharged
        </div>
      </td>
      <td className="py-4">
        <Link to="/" className="text-slate-800 text-base">
          <LuEdit3 />
        </Link>
      </td>
    </tr>
  );
};

export default TableData;
