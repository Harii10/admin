import React from "react";

function SongsList() {
  return (
    <>
      <div className="flex h-screen bg-gray-100 lg:ml-80 lg:mt-4">
        {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

        <div className="overflow-x-auto w-full">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Name
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Artists
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Movie
                </th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Time
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  John Doe
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  24/05/1995
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  Web Developer
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  $120,000
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <a
                    href="#"
                    className="inline-block rounded-sm bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </a>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Jane Doe
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  04/11/1980
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  Web Designer
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  $100,000
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <a
                    href="#"
                    className="inline-block rounded-sm bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </a>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                  Gary Barlow
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  24/05/1995
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  Singer
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                  $20,000
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <a
                    href="#"
                    className="inline-block rounded-sm bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SongsList;
