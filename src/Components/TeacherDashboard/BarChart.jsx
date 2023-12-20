import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

// const data = [
//   { name: 'A', score1: 10, score2: 20 },
//   { name: 'B', score1: 10, score2: 24 },
//   { name: 'C', score1: 19, score2: 23 },
//   { name: 'D', score1: 8, score2: 27 },
//   { name: 'E', score1: 10, score2: 24 },
//   { name: 'F', score1: 13, score2: 22 },
// ];


const BarChart = ({books, bname1, bname2}) => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    setData(books);
  },[books]);

  console.log({data});

  const chartRef = useRef(null);
  
  const drawChart = () => {
    const margin = {
      top: 50,
      right: 50,
      bottom: 70,
      left: 70,
    };
    const width = 1200 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const xScale = d3.scaleBand().range([0, width]);
    const yScale = d3.scaleLinear().range([height, 0]);

    //const svg = d3.select('.svg-canvas')
   

     const svg = d3.select('.svg-canvas').attr('transform', `translate(${margin.left}, ${margin.top})`);
     svg.selectAll("*").remove()
    // const svg = d3
    //   .select(chartRef.current)
    //   .append('svg')
    //   .attr('width', width + margin.left + margin.right)
    //   .attr('height', height + margin.top + margin.bottom)
    //   .append('g')
    //   ;

     // parseInt data
    // data.forEach(function (d) {
    //   d.score1.toFixed(0) = parseInt(d.score1.toFixed(0));
    //   d.score2.toFixed(0) = parseInt(d.score2.toFixed(0));
    // });

    xScale.domain(data.map((d) => (d.name.length<23?d.name:d.name.substring(0,23)+"..")));
    yScale.domain([0, 100]);

    const barWidth = (width / data.length) / 3;

    const bar = svg
      .selectAll('.bar1')
      .data(data, (d) => d.score1.toFixed(0))
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${(i * 3) * barWidth + 50}, 10)`)
      .attr('class', 'bar1');

    const bar2 = svg
      .selectAll('.bar2')
      .data(data, (d) => d.score2.toFixed(0))
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${barWidth + i * barWidth * 3 + 50},10)`)
      .attr('class', 'bar2');

    bar.append('rect')
      .attr('y', (d) => yScale(d.score1.toFixed(0)))
      .attr('width', barWidth - 5)
      .attr('height', (d) => height - yScale(d.score1.toFixed(0)))
      .style('fill', color(bname1));
    

    bar2.append('rect')
      .attr('y', (d) => yScale(d.score2.toFixed(0)))
      .attr('width', barWidth - 5)
      .attr('height', (d) => height - yScale(d.score2.toFixed(0)))
      .style('fill', color(bname2));

    bar.append('text')
      .text((d) => d.score1.toFixed(0))
      .attr('text-anchor', 'middle')
      .attr('x', barWidth / 2)
      .attr('y', (d) => yScale(d.score1.toFixed(0)) - 5);

    bar2.append('text')
      .text((d) => d.score2.toFixed(0))
      .attr('text-anchor', 'middle')
      .attr('transform', (d) => `translate(${barWidth / 2},${yScale(d.score2.toFixed(0)) - 5})`);

    svg.append('g')
      .attr('transform', `translate(40, ${height+10})`)
      .call(d3.axisBottom(xScale).tickSize(2))
      .selectAll('text') 
      .style('font-size', '14px');

    svg.append('g').attr('transform', `translate(50,10)`).call(d3.axisLeft(yScale));

    svg.append('text')
      .text('Chart: Survey results')
      .style('font-size', '20px')
      .attr('transform', `translate(${0 - margin.left}, ${0 - margin.top / 2})`);

    svg.append('text')
      .text('Participants')
      .attr('text-anchor', 'middle')
      .attr('transform', `translate(${width / 2}, ${height + 50})`);

    svg.append('text')
      .text('Points scored')
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .attr('x', 0 - height / 2)
      .attr('y', 20);

    const legend = svg.selectAll('.legend').data(color.domain()).enter().append('g').attr('class', 'legend');

    const legendSpacing = 400;

    legend
      .append('text') 
      .text((d) => d)
      .attr('transform', (d, i) => `translate(${i * legendSpacing + 30}, ${height + margin.bottom + 25})`);

    legend
      .append('rect')
      .attr('width', legendSpacing / 2)
      .attr('height', 5)
      .style('fill', color)
      .attr('transform', (d, i) => `translate(${i * legendSpacing+30}, ${height + margin.bottom })`);
  };
  useEffect(()=>{
    drawChart();
  },[data])

  return (<div ref={chartRef} className='bg-gray-100'>
    <svg className='svg-canvas' width="2000" height="600"/>
  </div>);
};

export default BarChart;
