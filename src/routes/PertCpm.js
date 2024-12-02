import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);

const PertCpm = () => {
  // State to store user input tasks
  const [tasks, setTasks] = useState([
    { name: 'Task A', start: 0, duration: 3, dependencies: [] },
    { name: 'Task B', start: 3, duration: 4, dependencies: ['Task A'] },
  ]);

  // Function to handle adding a new task
  const handleAddTask = (e) => {
    e.preventDefault();

    const taskName = e.target.taskName.value;
    const start = Number(e.target.start.value);
    const duration = Number(e.target.duration.value);

    setTasks((prevTasks) => [
      ...prevTasks,
      { name: taskName, start, duration, dependencies: [] },
    ]);
  };

  // Prepare data for chart
  const chartData = {
    labels: tasks.map((task) => task.name),
    datasets: [
      {
        label: 'Task Timeline',
        data: tasks.map((task) => ({
          x: task.name,
          y: task.start,
          y2: task.start + task.duration,
        })),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'PERT/CPM Timeline Chart',
      },
      tooltip: {
        mode: 'nearest',
        intersect: false,
        callbacks: {
          title: function (tooltipItem) {
            const task = tasks.find(
              (task) => task.name === tooltipItem[0].label
            );
            return `${task.name}: Start at ${task.start}, Duration: ${task.duration}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: 'category',
        labels: tasks.map((task) => task.name),
        title: {
          display: true,
          text: 'Tasks',
        },
      },
      y: {
        type: 'linear',
        min: 0,
        title: {
          display: true,
          text: 'Timeline (Days)',
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-blue-600 text-white py-4 mb-6">
        <h1 className="text-center text-2xl font-bold">PERT/CPM Timeline Chart</h1>
      </header>
      
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg mb-6">
        {/* Form for user input */}
        <form onSubmit={handleAddTask} className="mb-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="taskName">
              Task Name
            </label>
            <input
              type="text"
              name="taskName"
              id="taskName"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="start">
              Start Time (Days)
            </label>
            <input
              type="number"
              name="start"
              id="start"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="duration">
              Duration (Days)
            </label>
            <input
              type="number"
              name="duration"
              id="duration"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Add Task
          </button>
        </form>
      </div>

      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Render chart */}
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default PertCpm;
