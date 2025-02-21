// src/components/Dashboard.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const userStats = {
    leetcode: {
      rank: 'Platinum',
      problemsSolved: 120,
      contestsParticipated: 8,
      streak: 25,
    },
    codechef: {
      rating: 1500,
      problemsSolved: 90,
      contestsParticipated: 5,
      streak: 15,
    },
    gfg: {
      profilePoints: 350,
      problemsSolved: 80,
      contestsParticipated: 10,
      streak: 20,
    },
  };

  const leetcodeChartRef = useRef(null);
  const codechefChartRef = useRef(null);
  const gfgChartRef = useRef(null);
  const chartInstances = useRef([]);

  const createPieChart = (chartRef, data, label, colors) => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Problems Solved', 'Contests', 'Streak'],
          datasets: [
            {
              label: label,
              data: data,
              backgroundColor: colors,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
        },
      });
      chartInstances.current.push(chart); // Store the chart instance
    }
  };

  useEffect(() => {
    createPieChart(
      leetcodeChartRef,
      [userStats.leetcode.problemsSolved, userStats.leetcode.contestsParticipated, userStats.leetcode.streak],
      'LeetCode Stats',
      ['#2563eb', '#60a5fa', '#93c5fd']
    );

    createPieChart(
      codechefChartRef,
      [userStats.codechef.problemsSolved, userStats.codechef.contestsParticipated, userStats.codechef.streak],
      'CodeChef Stats',
      ['#ea580c', '#f97316', '#fdba74']
    );

    createPieChart(
      gfgChartRef,
      [userStats.gfg.problemsSolved, userStats.gfg.contestsParticipated, userStats.gfg.streak],
      'GFG Stats',
      ['#16a34a', '#4ade80', '#86efac']
    );

    // Cleanup: Destroy charts on component unmount
    return () => {
      chartInstances.current.forEach((chart) => chart.destroy());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-poppins">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-10">Coding Stats Dashboard</h1>
    <div className="flex items-center justify-center m-10">
    <Link to="/compare">
        <button className="btn btn-wide border-2 border-purple-500 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 hover:from-pink-500 hover:to-purple-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300">
        Compare
    </button>
    </Link>
   </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Leetcode Card */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600">LeetCode</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <div className="flex flex-col items-center avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="LeetCode Avatar" />
                </div>
              </div>
            </li>
            <li><strong>Rank:</strong> {userStats.leetcode.rank}</li>
            <li><strong>Problems Solved:</strong> {userStats.leetcode.problemsSolved}</li>
            <li><strong>Contests Participated:</strong> {userStats.leetcode.contestsParticipated}</li>
            <li><strong>Streak:</strong> {userStats.leetcode.streak} days</li>
          </ul>
          <canvas ref={leetcodeChartRef} className="mt-4" />
        </div>

        {/* CodeChef Card */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-orange-600">CodeChef</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <div className="flex flex-col items-center avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="CodeChef Avatar" />
                </div>
              </div>
            </li>
            <li><strong>Rating:</strong> {userStats.codechef.rating}</li>
            <li><strong>Problems Solved:</strong> {userStats.codechef.problemsSolved}</li>
            <li><strong>Contests Participated:</strong> {userStats.codechef.contestsParticipated}</li>
            <li><strong>Streak:</strong> {userStats.codechef.streak} days</li>
          </ul>
          <canvas ref={codechefChartRef} className="mt-4" />
        </div>

        {/* GFG Card */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-600">GeeksforGeeks</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <div className="flex flex-col items-center avatar">
                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="GFG Avatar" />
                </div>
              </div>
            </li>
            <li><strong>Profile Points:</strong> {userStats.gfg.profilePoints}</li>
            <li><strong>Problems Solved:</strong> {userStats.gfg.problemsSolved}</li>
            <li><strong>Contests Participated:</strong> {userStats.gfg.contestsParticipated}</li>
            <li><strong>Streak:</strong> {userStats.gfg.streak} days</li>
          </ul>
          <canvas ref={gfgChartRef} className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
