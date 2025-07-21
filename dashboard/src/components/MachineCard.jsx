import React from 'react'

export default function MachineCard() {
  return (
    <div className="p-4 card shadow-md border-1 border-gray-200">
      <div className="flex justify-between items-center ">
        <div>
          <h3 className="text-lg mb-1">Dubai Mall - Level 2</h3>
          <p className="text-gray-500">Last maintenance: 6/10/2024</p>
          <p className="text-gray-500">Total collected: 15,420 items </p>
          <p className="text-gray-500 ">
          Daily average: 245 items • Efficiency: 87.5%
          </p>
        </div>
        <div className="text-right ">
          <h3 className="mb-2 flex items-center gap-2 justify-end font-light">Capacity <span className='font-semibold text-xl'>95%</span></h3>
          <progress className="progress w-30 block mb-3" value="85" max="100"></progress>
          <div className="badge bg-red-600 text-white">warning</div>
        </div>
      </div>
    </div>
  )
}
