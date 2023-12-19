import {
  Flex,
  FormControl,
  Heading,
  IconButton,
  Tooltip,
  Text,
  Select,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const PhysicalAppearanceRating = ({OnDataChange}) => {
  const [ratings, setRatings] = useState({
    attractivenessOfCoverPage: null,
    relevanceOfCoverPageDesign: null,
    dimensions: null,
    bulkiness: null,
    paperQuality: null,
    colors: null,
    pageLayout: null,
    ratio: null,
  });

  const handleRatioChange = (e)=>{
    setRatings((prevRatings)=>({...prevRatings,ratio:e.target.value}));
    OnDataChange(e.target.value,10);
  }

  const handleStarClick = (value, question) => {
      setRatings((prevRatings) => ({ ...prevRatings, [question]: value }));
      if(question==="attractivenessOfCoverPage"){
        OnDataChange(value,0)
      }
      else if(question==="relevanceOfCoverPageDesign"){
        OnDataChange(value,1)
      }
      else if(question==="dimensions"){
        OnDataChange(value,2)
      }
      else if(question==="bulkiness"){
        OnDataChange(value,3)
      }
      else if(question==="paperQuality"){
        OnDataChange(value,4)
      }
      else if(question==="colors"){
        OnDataChange(value,5)
      }
      else if(question==="pageLayout"){
        OnDataChange(value,6)
      }
  };

  useEffect(() => {
    console.log(ratings);
  }, [ratings]);

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
        Physical Appearance, Structure & Organisation
      </Heading>

      <FormControl>
        <Box mb={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
              Attractiveness of Cover Page
            </Text>
            <Flex>
              {[
                "Not attractive at all (0)",
                "Slightly attractive (1)",
                "Fairly attractive (2)",
                "Moderately attractive (3)",
                "Very attractive (4)",
                "Extremely attractive (5)",
              ].map((label, idx) => (
                <Tooltip key={idx} label={`${label}`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={
                          idx <= ratings.attractivenessOfCoverPage
                            ? "blue.500"
                            : "gray.300"
                        }
                      />
                    }
                    onClick={() =>
                      handleStarClick(idx, "attractivenessOfCoverPage")
                    }
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
              Relevance of Cover Page Design
            </Text>
            <Flex>
              {[
                "Not relevant at all (0)",
                "Slightly relevant (1)",
                "Fairly relevant (2)",
                "Moderately relevant (3)",
                "Very relevant (4)",
                "Extremely relevant (5)",
              ].map((label, idx) => (
                <Tooltip key={idx} label={`${label}`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={
                          idx <= ratings.relevanceOfCoverPageDesign
                            ? "blue.500"
                            : "gray.300"
                        }
                      />
                    }
                    onClick={() =>
                      handleStarClick(idx, "relevanceOfCoverPageDesign")
                    }
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
              Size of the Book - Dimensions
            </Text>
            <Flex>
              {["0", "1", "2", "3", "4", "5"].map((label, idx) => (
                <Tooltip key={idx} label={`${label}`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={
                          idx <= ratings.dimensions
                            ? "blue.500"
                            : "gray.300"
                        }
                      />
                    }
                    onClick={() =>
                      handleStarClick(idx,"dimensions")
                    }
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
              Size of the Book - Bulkiness
            </Text>
            <Flex>
              {["0", "1", "2", "3", "4", "5"].map((label, idx) => (
                <Tooltip key={idx} label={`${label}`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={
                          idx <= ratings.bulkiness
                            ? "blue.500"
                            : "gray.300"
                        }
                      />
                    }
                    onClick={() =>
                      handleStarClick(idx, "bulkiness")
                    }
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
              Paper Quality
            </Text>
            <Flex>
              {["0", "1", "2", "3", "4", "5"].map((label, idx) => (
                <Tooltip key={idx} label={`${label}`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={
                          idx <= ratings.paperQuality
                            ? "blue.500"
                            : "gray.300"
                        }
                      />
                    }
                    onClick={() => handleStarClick(idx, "paperQuality")}
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
              Colours in Printing
            </Text>
            <Flex>
              {["0", "1", "2", "3", "4", "5"].map((label, idx) => (
                <Tooltip key={idx} label={`${label}`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={
                          idx <= ratings.colors
                            ? "blue.500"
                            : "gray.300"
                        }
                      />
                    }
                    onClick={() => handleStarClick(idx, "colors")}
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
              Logical & Consistent page layout with appropriate line spacing &
              margins
            </Text>
            <Flex>
              {[
                "No (0 score)",
                "Yes - for 20% of pages (1)",
                "Yes - for 40% of pages (2)",
                "Yes - for 60% of pages (3)",
                "Yes - for 80% of pages (4)",
                "Yes - for 100% of pages (5)",
              ].map((label, idx) => (
                <Tooltip key={idx} label={`${label}`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={
                          idx <= ratings.pageLayout
                            ? "blue.500"
                            : "gray.300"
                        }
                      />
                    }
                    onClick={() => handleStarClick(idx, "pageLayout")}
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
              Type of Font (Score out of 10)
            </Text>
            <NumberInput max={10} min={0} defaultValue={1}
            onChange={(value) => OnDataChange(value,7)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Box>

        <Box mb={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
              Size of Font (Score out of 10)
            </Text>
            <NumberInput max={10} min={0} defaultValue={1}
            onChange={(value) => OnDataChange(value,8)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Box>

        <Box mb={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
            Consistency in maintaining type & size of font (Score out of 10)
            </Text>
            <NumberInput max={10} min={0} defaultValue={1}
            onChange={(value) => OnDataChange(value,9)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Box>

        <Box mb={4}>
        <Text as="h2" fontSize="lg" textAlign="left">
            Number of Pages to teaching hours ratio.
          </Text>
          <Select
            placeholder="Select pages to teaching hours ratio"
            onChange={handleRatioChange}
          >
            <option value="0">less than 1:1</option>
            <option value="5">1:1</option>
            <option value="15">2:1</option>
            <option value="20">3:1 and above</option>
          </Select>
        </Box>

        <Box mb={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
            Overview of learning objectives included at the beginning of chapters (Score out of 5)
            </Text>
            <NumberInput max={5} min={0} defaultValue={1}
            onChange={(value) => OnDataChange(value,11)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Box>

        <Box mb={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
             Introductory Section to explain unique features and how to use the book (Score out of 5)
            </Text>
            <NumberInput max={5} min={0} defaultValue={1}
            onChange={(value) => OnDataChange(value,12)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Box>

        <Box mb={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
             Well-Structured table of Contents (Score out of 5)
            </Text>
            <NumberInput max={5} min={0} defaultValue={1}
            onChange={(value) => OnDataChange(value,13)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Box>

        <Box mb={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
             Inclusion of list of Abbreviations,index,etc. (Score out of 5)
            </Text>
            <NumberInput max={5} min={0} defaultValue={1}
            onChange={(value) => OnDataChange(value,14)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Box>

        <Box mb={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
             Inclusion of summary (Score out of 5)
            </Text>
            <NumberInput max={5} min={0} defaultValue={1}
            onChange={(value) => OnDataChange(value,15)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Box>

        <Box mb={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
            Text is structured as chapter titles, headings, captions,
text boxes (Score out of 5)
            </Text>
            <NumberInput max={5} min={0} defaultValue={1}
            onChange={(value) => OnDataChange(value,16)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Box>

        <Box mb={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
            Inclusion of meaningful activities,tasks, and exercises (Score out of 5)
            </Text>
            <NumberInput max={5} min={0} defaultValue={1}
            onChange={(value) => OnDataChange(value,17)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Box>

        <Box mb={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
            Appropriate topic distribution and sequencing (Score out of 5)
            </Text>
            <NumberInput max={5} min={0} defaultValue={1}
            onChange={(value) => OnDataChange(value,18)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Box>

        <Box mb={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
            Highlighted Key words and Concepts (Score out of 5)
            </Text>
            <NumberInput max={5} min={0} defaultValue={1}
            onChange={(value) => OnDataChange(value,19)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Box>

        <Box mb={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
              Free from the mistakes and reiteration(Score out of 5)
            </Text>
            <NumberInput max={5} min={0} defaultValue={1}
            onChange={(value) => OnDataChange(value,20)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </Box>

      </FormControl>
    </>
  );
};

export default PhysicalAppearanceRating;
