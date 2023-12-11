import {
    Heading,
    FormControl,
    RadioGroup,
    Radio,
    Stack,
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

  const Illustrations = () => {
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
    };

    const handleRadioChange = (value) => {
      setIllustrationsData({...IllustrationsData,color:value});
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
            <Text as="h2" fontSize="25px" textAlign="left" mr={4} paddingBottom="2.5%">
                  Color
            </Text>
            <RadioGroup
              value={IllustrationsData.color}
              onChange={(value) => handleRadioChange(value)}
            >
              <Stack spacing={4}>
                <Radio value="5" fontSize="lg">
                  <Text fontSize="lg">
                    Black and White
                  </Text>
                  </Radio>
                  <Radio value="10">
                    <Text fontSize="lg">
                      Colour
                    </Text>
                  </Radio>
                </Stack>
              </RadioGroup>
        </Box>
        <Box mb={4}>
        <Text as="h2" fontSize="25px" textAlign="left" mr={4} paddingBottom="2.5%">
                  Visibility of Illustrations
            </Text>
          <Stack spacing={4}>
            <Text as="h2" fontSize="lg" textAlign="left">
              Clarity and Resolution
            </Text>
            <NumberInput
              min={0}
              max={5}
              defaultValue={0}
              value={IllustrationsData.clarity}
              onChange={(value) => setIllustrationsData({ ...IllustrationsData, clarity: value })}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <Text as="h2" fontSize="lg" textAlign="left">
              Colour
            </Text>
            <NumberInput
              min={0}
              max={5}
              defaultValue={0}
              value={IllustrationsData.colour_rating}
              onChange={(value) => setIllustrationsData({ ...IllustrationsData, colour_rating: value })}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Text as="h2" fontSize="lg" textAlign="left">
              Labelling
            </Text>
            <NumberInput
              min={0}
              max={5}
              defaultValue={0}
              value={IllustrationsData.labelling}
              onChange={(value) => setIllustrationsData({ ...IllustrationsData, labelling: value })}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            </Stack>
            </Box>
            <Box mb={4}>
            <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="25px" textAlign="left" mr={4} paddingBottom="2.5%">
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
  