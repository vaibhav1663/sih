import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { FaRegCopy } from "react-icons/fa";

const AdminDashboard = () => {
  const [reviewers, setReviewers] = useState([]);

  useEffect(() => {
    setReviewers([
      {
        id: "asf3421",
        name: "Dummy Name1",
        specialisation: "Unani",
        college: "COEP",
      },
      {
        id: "ahkk13421",
        name: "Dummy Name2",
        specialisation: "Unani",
        college: "COEP",
      },
      {
        id: "hdkk13421",
        name: "Dummy Name3",
        specialisation: "Unani",
        college: "COEP",
      },
      {
        id: "ah3421",
        name: "Dummy Name4",
        specialisation: "Unani",
        college: "COEP",
      },
      {
        id: "kk13421",
        name: "Dummy Name5",
        specialisation: "Unani",
        college: "COEP",
      },
    ]);
  }, []);

  const header = ["abc", "bcd", "cdd"]
  const tableData = [[1,2, 1],[1,2, 1],[1,2, 1],]

  const handleCopyId = (id) => {
    navigator.clipboard.writeText(id);
  };

  return (
    <>
      <Navbar page="admin" />

      <div className="p-4 box text-center">
        <h1 className="mt-24 font-bold text-4xl">Admin Dashboard</h1>

        <div className="flex mt-16 ">
          <div className="w-1/4">
            <h1 className="mb-4 font-semibold text-2xl">Available Reviewers</h1>
            <Accordion allowToggle>
              {reviewers.map((reviewer) => (
                <AccordionItem
                  key={reviewer.id}
                  className="mb-2 border border-black rounded-lg"
                >
                  <h2>
                    <AccordionButton className="bg-gray-200 rounded-lg">
                      <Box as="span" flex="1" textAlign="left">
                        {reviewer.name}
                      </Box>
                      <Box
                        as="span"
                        className="text-md cursor-pointer ml-2"
                        onClick={() => handleCopyId(reviewer.id)}
                      >
                        <FaRegCopy />
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} className="text-left">
                    Specialisation : {reviewer.specialisation}
                    <br />
                    College : {reviewer.college}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="w-2/3">
            <h1 className="mb-4 font-semibold text-2xl">Books</h1>
            <TableContainer>
  <Table variant="simple" className="ml-2 border border-2 rounded-lg">
    <Thead>
      <Tr>
        {header.map((x, i) => (
          <Th key={i} width="20%"> {/* Set a fixed width or use responsive values like "20%" */}
            {x}
          </Th>
        ))}
      </Tr>
    </Thead>
    <Tbody>
      {tableData.map((rowData, i) => (
        <Tr key={i}>
          {rowData.map((col, j) => (
            <Td key={j} width="20%"> {/* Set a fixed width or use responsive values like "20%" */}
              {col}
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  </Table>
</TableContainer>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminDashboard;
