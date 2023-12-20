import React, { useState } from 'react';
import PieChart from "../ReviewerDashboard/PieChart"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    Button,
    Link,
  } from "@chakra-ui/react";

const WidgetToggle = () => {
  const [isGenie, setIsGenie] = useState(false);

  const handleToggle = () => {
    setIsGenie((prev) => !prev);
  };

  let percent = 68;

  return (
    <div className='flex absolute bottom-10 right-10'>
      <button
        onClick={handleToggle}
        className="absolute -bottom-80 right-0 bg-blue-100 hover:bg-blue-700 font-bold py-2 px-4 rounded-full"
      >
      </button>
      <div
        className={`box absolute bottom-0 right-0 ${
          isGenie
            ? 'w-1/3 h-1/2 rounded-full bottom-20 bg-blue-100'
            : 'w-100 h-400 rounded'
        } transition-all duration-1050 linear shadow-md`}
      >
        {isGenie && (
          <div className="pic bg-blue-100 w-100 h-500 p-6 rounded-lg relative bottom-0 right-0  mb-20 -ml-60">
            <PieChart
            data={[{label:"",value:100-percent},{label:"",value:percent}]}
            width={200}
            height={200}
            innerRadius={60}
            outerRadius={100}
            />
            {/* <Accordion allowToggle>
                {data.map((book, index) => (
                <AccordionItem
                    key={index}
                    className="mb-2 border border-black rounded-lg"
                >
        <h2>
          <AccordionButton className="bg-gray-200 rounded-lg">
            <Box as="span" flex="1" textAlign="left">
              Citations
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className="text-left">
          <p></p>
          <p className="mb-4"></p>
        </AccordionPanel>
                </AccordionItem>
            ))}
         </Accordion> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default WidgetToggle;