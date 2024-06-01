const complaints = [
  { id: 1, user: "John Doe", description: "Issue with login", status: "Resolved", location: "New York", date: "2024-05-01" },
  { id: 2, user: "Jane Smith", description: "Payment not processed", status: "Pending", location: "San Francisco", date: "2024-05-02" },
  { id: 3, user: "Michael Johnson", description: "Error on dashboard", status: "Undergoing", location: "Los Angeles", date: "2024-05-03" },
];

const ComplaintsTable = () => {
  return (
    <div className="bg-white shadow-md rounded my-6">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200">ID</th>
            <th className="py-2 px-4 bg-gray-200">User</th>
            <th className="py-2 px-4 bg-gray-200">Description</th>
            <th className="py-2 px-4 bg-gray-200">Status</th>
            <th className="py-2 px-4 bg-gray-200">Location</th>
            <th className="py-2 px-4 bg-gray-200">Date</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint.id} className="text-center">
              <td className="py-2 px-4 border">{complaint.id}</td>
              <td className="py-2 px-4 border">{complaint.user}</td>
              <td className="py-2 px-4 border">{complaint.description}</td>
              <td className="py-2 px-4 border">{complaint.status}</td>
              <td className="py-2 px-4 border">{complaint.location}</td>
              <td className="py-2 px-4 border">{complaint.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintsTable;
