import {
    Flex,
    FormControl,
    Heading,
    IconButton,
    Tooltip,
    Text,
    Box,
  } from "@chakra-ui/react";
  import { StarIcon } from "@chakra-ui/icons";
  import { useEffect, useState } from "react";
  
  const UniquenessRating = ({onDataChange}) => {
    const [ratings, setRatings] = useState({
      uniquenessLevel: null,
      clarityOfClaim: null,
      focusOnUniqueness: null,
      curriculumAndSyllabus: null,
    });
  
    const labels1 = [
        "Not unique at all (0)",
        "Slightly unique (1)",
        "Fairly Unique (2)",
        "Moderately unique (3)",
        "Very unique (4)",
        "Extremely unique (5)",
      ];
  
    const labels2 = ["No", "To some extent", "Moderate", "Absolutely"];
  
    const handleStarClick = (value, question) => {
      setRatings((prevRatings) => ({ ...prevRatings, [question]: value }));
      onDataChange(value, question);
    };

    useEffect(()=>{
        console.log(ratings);
    },[ratings])
  
    return (
      <>
        <Heading
          as="h1"
          size="2xl"
          mt={6}
          mb={12}
          fontWeight="semibold"
          textAlign="left"
        >
          Uniqueness of the Book
        </Heading>
  
        <FormControl>
        <Box mb={4}>
          <Flex alignItems="center" justifyContent="space-between"> 
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
              Uniqueness Level
            </Text>
            <Flex>
            {labels1.map((label, idx) => (
              <Tooltip key={idx} label={`${label}`} placement="top">
                <IconButton
                  icon={
                    <StarIcon
                      boxSize={4}
                      color={idx <= ratings.uniquenessLevel ? "blue.500" : "gray.300"}
                    />
                  }
                  onClick={() => handleStarClick(idx, "uniquenessLevel")}
                  aria-label={`Rate ${idx}`}
                  size="sm"
                  mr={2}
                />
              </Tooltip>
            ))}
            </Flex>
          </Flex>
        </Box>
  
          <Box mb={4}>
            <Flex alignItems="center" justifyContent="space-between">
              <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
                Whether the uniqueness claimed by the author has been conveyed clearly?
              </Text>
              <Flex>
              {labels2.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= ratings.clarityOfClaim ? "blue.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "clarityOfClaim")}
                    aria-label={`Rate ${idx}`}
                    size="sm"
                    mr={2}
                  />
                </Tooltip>
              ))}
              </Flex>
            </Flex>
          </Box>
  
          <Box mb={4}>
            <Flex alignItems="center" justifyContent="space-between">
              <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
                Whether the book stayed focus on the uniqueness as claimed by the 3 author?
              </Text>
              <Flex>
              {labels2.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= ratings.focusOnUniqueness ? "blue.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "focusOnUniqueness")}
                    aria-label={`Rate ${idx}`}
                    size="sm"
                    mr={2}
                  />
                </Tooltip>
              ))}
              </Flex>
            </Flex>
          </Box>
  
          <Box mb={4}>
            <Flex alignItems="center" justifyContent="space-between">
              <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
                Whether the book is dealing with the entire curriculum & syllabus?
              </Text>
              <Flex>
              {labels2.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= ratings.curriculumAndSyllabus ? "blue.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "curriculumAndSyllabus")}
                    aria-label={`Rate ${idx}`}
                    size="sm"
                    mr={2}
                  />
                </Tooltip>
              ))}
              </Flex>
            </Flex>
          </Box>
        </FormControl>
      </>
    );
  };
  
  export default UniquenessRating;
  