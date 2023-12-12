import {
    Heading,
    FormControl,
    RadioGroup,
    Radio,
    Text,
    Flex,
    Box,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    IconButton,
    Tooltip,
  } from "@chakra-ui/react";
  import { StarIcon } from "@chakra-ui/icons";
  import { useEffect, useState } from "react";

  const Illustrations = ({OnDataChange}) => {
    const [IllustrationsData, setIllustrationsData] = useState({
      clarity: 0,
      colour_rating:0,
      labelling:0,
      rel_to_content: 0,
      color:0,
    });

    const labels2 = ["No", "To some extent", "Moderate", "Absolutely"];

    const handleStarClick = (value) => {
      setIllustrationsData((prevIllustrationsData) => ({ ...prevIllustrationsData, rel_to_content: value }));
      OnDataChange(value,4)  
    };

    const handleRadioChange = (value) => {
      setIllustrationsData({...IllustrationsData,color:value});
      OnDataChange(value,0);
    };

    useEffect(() => {
      console.log(IllustrationsData)
    }, [IllustrationsData]);

    return (
      <>
        <Heading as="h1" size="2xl" mt={6} mb={12} fontWeight="semibold" textAlign="left">
        Illustrations
        </Heading>
        <FormControl>
        <Box mb={4}>
            <Text as="h2" fontSize="lg" textAlign="left" mr={4} marginBottom="0.7rem">
                  Color
            </Text>
            <RadioGroup
              value={IllustrationsData.color}
              onChange={(value) => handleRadioChange(value)}
            >
                <Flex alignItems="center">
                <Radio value="5" fontSize="lg" marginRight="2rem">
                  <Text fontSize="lg">
                    Black and White
                  </Text>
                  </Radio>
                  <Radio value="10">
                    <Text fontSize="lg">
                      Colour
                    </Text>
                  </Radio>
                  </Flex>
              </RadioGroup>
        </Box>
        <Box mb={4}>
          <Flex alignItems="center" justifyContent="space-between" marginBottom="0.75rem">
            <Text as="h2" fontSize="lg" textAlign="left">
            Visibility of Illustrations: Clarity and Resolution
            </Text>
            <NumberInput
              min={0}
              max={5}
              defaultValue={0}
              onChange={(value) => OnDataChange(value,1)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" marginBottom="0.75rem">
            <Text as="h2" fontSize="lg" textAlign="left">
            Visibility of Illustrations: Colour
            </Text>
            <NumberInput
              min={0}
              max={5}
              defaultValue={0}
              onChange={(value) => OnDataChange(value,2)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" marginBottom="0.75rem">
            <Text as="h2" fontSize="lg" textAlign="left">
            Visibility of Illustrations: Labelling
            </Text>
            <NumberInput
              min={0}
              max={5}
              onChange={(value) => OnDataChange(value,3)}
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
            <Text as="h2" fontSize="lg" textAlign="left" mr={4} paddingBottom="2.5%">
                  Relevance to the content
            </Text>
              <Flex>
              {labels2.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= IllustrationsData.rel_to_content ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx)}
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
  export default Illustrations;
  