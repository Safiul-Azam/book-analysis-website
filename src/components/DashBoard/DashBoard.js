import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [rechart, setRechart] = useState([])
    useEffect(()=>{
        fetch('rechart.json')
        .then(res => res.json())
        .then(data => setRechart(data))
    },[])
    return (
 <div>
     {/* area chart with tooltip */}
     <div>
     <AreaChart width={730} height={250} data={rechart}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey={"investment"} />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey={"sell"} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey={'month'} stroke="#82c543" fillOpacity={1} fill="url(#colorPv)" />
  <Area type="monotone" dataKey={'revenue'} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
     </div>
     {/* pie chart with tooltip */}
     <div>
     <PieChart width={730} height={250}>
  <Pie data={rechart} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={rechart} dataKey="investment" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
  <Tooltip />
</PieChart>
     </div>
     {/* bar chart with tooltip */}
     <div>
     <BarChart width={730} height={250} data={rechart}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="investment" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="month" fill="#8884d8" />
  <Bar dataKey="sell" fill="#82ca9d" />
</BarChart>
     </div>
 </div>

    );
};

export default DashBoard;