const Table = ({ data }) => {
  return (
    <table className="w-full mb-8 text-sm text-left text-slate-800 font-lato">
      <thead className="text-md bg-gray-50">
        <tr>
          <th scope="col" className="px-2 py-5">
            Name
          </th>
          <th scope="col" className="px-2 py-5">
            ID No.
          </th>
          <th scope="col" className="px-2 py-5">
            Age
          </th>
          <th scope="col" className="px-2 py-5">
            Email
          </th>
          <th scope="col" className="px-2 py-5">
            Gender
          </th>
          <th scope="col" className="px-2 py-5">
            Country
          </th>
          <th scope="col" className="px-2 py-5">
            Status
          </th>
          <th scope="col" className="px-2 py-5">
            <span className="sr-only">edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {/* <tr className="bg-white text-red-500 border-b">
          <th scope="row" className="pl-3 py-4 text-gray-900 whitespace-nowrap">
            Solomon Afeez
          </th>
          <td className="py-4 text-slate-800">09045328812</td>
          <td className="py-4 text-slate-800 ">29</td>
          <td className="py-4 text-slate-800">SolomonAfeez@gmail.com</td>
          <td className="py-4 text-slate-800">Female</td>
          <td className="py-4 text-slate-800">Nigeria</td>
          <td className="py-4 text-slate-800">
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
              Discharged
            </div>
          </td>
          <td className="py-4">
            <Link to={link} className="text-slate-800 text-base">
              <LuEdit3 />
            </Link>
          </td>
        </tr> */}
        {data}
      </tbody>
    </table>
  );
};



export default Table;
