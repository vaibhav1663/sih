import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';


const BarChart = (books) => {
  const [data, setData] = useState(books.books);
  
  // console.log(books);
  // useEffect(()=>{
  //   setData(books.books);
  // },[books]);

  const chartRef = useRef(null);
  
  const drawChart = () => {
    const margin = {
      top: 50,
      right: 50,
      bottom: 70,
      left: 70,
    };
    const width = 600 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const xScale = d3.scaleBand().range([0, width]);
    const yScale = d3.scaleLinear().range([height, 0]);

    const svg = d3.select('.svg-canvas').attr('transform', `translate(${margin.left}, ${margin.top})`);
    svg.selectAll("*").remove()

    // const svg = d3
    //   .select(chartRef.current)
    //   .append('svg')
    //   .attr('width', width + margin.left + margin.right)
    //   .attr('height', height + margin.top + margin.bottom)
    //   
    //   ;

     // parseInt data
    // data.forEach(function (d) {
    //   d.score1 = parseInt(d.score1);
    //   d.score2 = parseInt(d.score2);
    // });

    console.log(data);

    xScale.domain(data.map((d) => d.name));
    yScale.domain([0, 200]);

    const barWidth = (width / data.length) / 3;

    const bar = svg
      .selectAll('.bar1')
      .data(data, (d) => d.score1)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${(i * 3) * barWidth + 5}, 0)`)
      .attr('class', 'bar1');

    const bar2 = svg
      .selectAll('.bar2')
      .data(data, (d) => d.score2)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${barWidth + i * barWidth * 3 + 1},0)`)
      .attr('class', 'bar2');

    bar.append('rect')
      .attr('y', (d) => yScale(d.score1))
      .attr('width', barWidth - 5)
      .attr('height', (d) => height - yScale(d.score1))
      .style('fill', color('Book 1'));

    bar2.append('rect')
      .attr('y', (d) => yScale(d.score2))
      .attr('width', barWidth - 5)
      .attr('height', (d) => height - yScale(d.score2))
      .style('fill', color('Book 2'));

    bar.append('text')
      .text((d) => d.score1)
      .attr('text-anchor', 'middle')
      .attr('x', barWidth / 2)
      .attr('y', (d) => yScale(d.score1) - 5);

    bar2.append('text')
      .text((d) => d.score2)
      .attr('text-anchor', 'middle')
      .attr('transform', (d) => `translate(${barWidth / 2},${yScale(d.score2) - 5})`);

    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).tickSize(0));

    svg.append('g').call(d3.axisLeft(yScale));

    // svg.append('text')
    //   .text('Chart: Survey results')
    //   .style('font-size', '20px')
    //   .attr('transform', `translate(${0 - margin.left}, ${0 - margin.top / 2})`);

    svg.append('text')
      .text('Participants')
      .attr('text-anchor', 'middle')
      .attr('transform', `translate(${width / 2}, ${height + margin.bottom / 2})`);

    svg.append('text')
      .text('Points scored')
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .attr('x', 0 - height / 2)
      .attr('y', 0 - margin.left / 2);

    const legend = svg.selectAll('.legend').data(color.domain()).enter().append('g').attr('class', 'legend');

    const legendSpacing = 80;

    legend
      .append('text') 
      .text((d) => d)
      .attr('transform', (d, i) => `translate(${i * legendSpacing}, ${height + margin.bottom})`);

    legend
      .append('rect')
      .attr('width', legendSpacing / 2)
      .attr('height', 5)
      .style('fill', color)
      .attr('transform', (d, i) => `translate(${i * legendSpacing}, ${height + margin.bottom - 25})`);
  };
  useEffect(()=>{
    drawChart();
  },[])

  return (<div ref={chartRef}>
    <svg className='svg-canvas' width="600" height="500" margin-left="20rem"/>
  </div>);
};

export default BarChart;
