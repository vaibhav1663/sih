import {
  Flex,
  FormControl,
  Heading,
  IconButton,
  Tooltip,
  Text,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const PhysicalAppearanceRating = () => {
  const [ratings, setRatings] = useState({
    attractivenessOfCoverPage: null,
    relevanceOfCoverPageDesign: null,

      dimensions: null,
      bulkiness: null,
  
    paperQuality: null,
    colors: null,
  });

  const handleStarClick = (value, question) => {
      setRatings((prevRatings) => ({ ...prevRatings, [question]: value }));
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
                            ? "teal.500"
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
                            ? "teal.500"
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
                            ? "teal.500"
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
                            ? "teal.500"
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
                            ? "teal.500"
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
                            ? "teal.500"
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
                            ? "teal.500"
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
            <NumberInput max={10} min={0} defaultValue={1}>
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
            <NumberInput max={10} min={0} defaultValue={1}>
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
            <NumberInput max={10} min={0} defaultValue={1}>
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
