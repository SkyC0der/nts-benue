// components/ProgressBar.tsx
import React from 'react';
import {  Progress } from 'antd';
// interface ProgressBarProps {
//   step: number;
//   totalSteps: number;
// }

const ProgressBar = ({ step, totalSteps }) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-200 h-2 rounded-full">
      <div
        className="h-full bg-yellow-600 transition-all duration-300 rounded-md"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

