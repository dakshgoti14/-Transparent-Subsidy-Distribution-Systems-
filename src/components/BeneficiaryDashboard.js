// src/components/BeneficiaryDashboard.js

import React from 'react';

function BeneficiaryDashboard() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mt-6 text-center">Beneficiary Dashboard</h1>

      <div className="my-6">
        <h2 className="text-xl font-semibold">Subsidy Status</h2>
        <div className="bg-gray-200 rounded-full h-2.5 w-full mb-2">
          <div className="bg-green-500 h-2.5 rounded-full w-3/4"></div>
        </div>
        <p className="text-sm text-gray-600">75% of the subsidy received</p>
      </div>

      <div className="my-6">
        <h2 className="text-xl font-semibold">Application Status</h2>
        <p className="text-yellow-500 text-lg font-medium">Pending</p>
      </div>

      <div className="my-6">
        <h2 className="text-xl font-semibold">Transaction History</h2>
        <ul className="list-disc pl-5">
          <li>Received 1.2 ETH on 2024-01-10</li>
          <li>Received 0.8 ETH on 2024-02-15</li>
        </ul>
      </div>

      <div className="my-6">
        <h2 className="text-xl font-semibold">Profile Details</h2>
        <p>Wallet Address: <span className="font-mono text-blue-600">0x1234567890abcdef...</span></p>
        <p>ID Number: <span className="font-mono">1234567890</span></p>
      </div>
    </div>
  );
}

export default BeneficiaryDashboard;
