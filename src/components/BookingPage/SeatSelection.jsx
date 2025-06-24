import React from 'react';
import images from '../assets/images';

const SeatSelection = ({ selectedSeats, onSeatSelect }) => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatsPerRow = 8;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6" id="SeatSelection_1">
      <h2 className="text-2xl font-semibold mb-6" id="SeatSelection_2">Select Your Seats</h2>
      <div className="flex justify-center mb-8" id="SeatSelection_3">
        <div className="w-full max-w-3xl" id="SeatSelection_4">
          {rows.map((row) => (
            <div key={row} className="flex justify-center gap-2 mb-2" id={`SeatSelection_row_${row}`}>
              <span className="w-8 text-center font-bold">{row}</span>
              {[...Array(seatsPerRow)].map((_, index) => {
                const seatId = `${row}${index + 1}`;
                const isSelected = selectedSeats.includes(seatId);
                return (
                  <button
                    key={seatId}
                    id={`SeatSelection_seat_${seatId}`}
                    className={`w-8 h-8 rounded ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => onSeatSelect(seatId)}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4" id="SeatSelection_5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-200 rounded" id="SeatSelection_6"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-500 rounded" id="SeatSelection_7"></div>
          <span>Selected</span>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;