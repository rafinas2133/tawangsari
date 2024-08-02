import React from 'react';

const Table = ({ data = [], columns = [], onEdit, onDelete }) => (
  <div className="mt-8">
    <h2 className="text-2xl mb-4">Data List</h2>
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor} className="py-2">{column.label}</th>
          ))}
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item) => (
            <tr key={item.uuid}>
              {columns.map((column) => (
                <td key={column.accessor} className="border px-4 py-2">
                  {item[column.accessor]}
                </td>
              ))}
              <td className="border px-4 py-2 ">
                <div className='flex'>
                <button
                  onClick={() => onEdit(item)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length + 1} className="border px-4 py-2 text-center">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default Table;
