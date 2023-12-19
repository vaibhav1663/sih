import React,{useState,useEffect} from "react";
import Search  from "./AdminDashboard/Search";
import StatusCards from "./AdminDashboard/StatusCards";
import BarChart from "./TeacherDashboard/BarChart";
import { HStack, Text, Heading, Center, Button } from "@chakra-ui/react";
let API_ROUTE = "http://localhost:5000/books/getBooks";


const PeerToPeer = () => {
    const [books, setBooks] = useState([null,null]);
    const [compare, setCompare] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_ROUTE);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const data1 = [
        { name: 'Author Credibility', score1: 10, score2: 20 },
        { name: 'B', score1: 1, score2: 2 },
        { name: 'C', score1: 1, score2: 2 },
        { name: 'D', score1: 1, score2: 2 },
        { name: 'E', score1: 1, score2: 2 },
        { name: 'F', score1: 1, score2: 2 },
      ];

    const handleCompare = () => {
        setCompare(true);
    }

    const handleChange = (banme,value, r) => {
        setBooks((prevBooks) => {
            const updatedBooks = [...prevBooks];
            if (r >= 0 && r < updatedBooks.length) {
                updatedBooks[r] = value;
            }
            return updatedBooks;
        });
    };

    console.log(">b>",books)

    function filterData(data, books) {
        if (!Array.isArray(books) || books.every(id => id === null)) {
            // If books is not an array or all elements are null, return the original data
            return data;
        }
    
        // Filter data based on the presence of non-null values in the books array
        const filteredData = data.filter(item => {
            // Replace 'id' with the actual property you want to compare
            return !books.includes(item._id);
        });
    
        return filteredData;
    }

    return (<>
        
        <div className="p-20">
        <Heading>Compare Books</Heading>
            <Center>
            <HStack>
            <Search
            reviewers={filterData(data,books)}
            onChange={handleChange}
            bookname=""
            r="0"
            ></Search>
            <Text>VS</Text>
            <Search
            reviewers={filterData(data,books)}
            onChange={handleChange}
            bookname=""
            r="1"
            ></Search>
            </HStack>
            <Button colorScheme="blue" onClick={handleCompare}>
                Compare
            </Button>
            </Center>
        </div>
        {compare?<>
        <div>
            <BarChart books={data1}/>
        </div></>:<></>}
        <div>
            <StatusCards data={data} admin={false}></StatusCards>
        </div>
    </>)
}

export default PeerToPeer;