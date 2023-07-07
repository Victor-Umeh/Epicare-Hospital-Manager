import React from "react";

const Table = () => {
  return (
    <table class="w-full mb-8 text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-2 py-3">
            Name
          </th>
          <th scope="col" class="px-2 py-3">
            ID No.
          </th>
          <th scope="col" class="px-2 py-3">
            Age
          </th>
          <th scope="col" class="px-2 py-3">
            Email
          </th>
          <th scope="col" class="px-2 py-3">
            Gender
          </th>
          <th scope="col" class="px-2 py-3">
            Country
          </th>
          <th scope="col" class="px-2 py-3">
            Status
          </th>
          <th scope="col" class="px-2 py-3">
            <span className="sr-onl">edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white text-red-500 border-b">
          <th
            scope="row"
            class=" py-4 text-gray-900 whitespace-nowrap dark:text-white"
          >
            <div class="pl-3">
              <div class="text-base font-semibold">Neil Sims</div>
              <div class="font-normal text-gray-500">
                neil.sims@flowbite.com
              </div>
            </div>
          </th>
          <td class="py-4">React Developer</td>
          <td class="py-4">
            <div class="flex items-center">
              <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
              Online
            </div>
          </td>
          <td class="py-4">
            <a href="#" class="">
              Edit user
            </a>
          </td>
          <td class="py-4">
            <a href="#" class="">
              Edit user
            </a>
          </td>
          <td class="py-4">
            <a href="#" class="">
              Edit user
            </a>
          </td>
          <td class="py-4">
            <a href="#" class="">
              Edit user
            </a>
          </td>
          <td class="py-4">
            <a href="#" class="">
              Edit user
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
