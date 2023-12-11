import {
  FormControl,
  Heading,
  RadioGroup,
  Radio,
  Stack,
  Text,
  Box,
  Flex,
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

  const SubjectMatter = () => {
    const [subjectMatter, setsubjectMatter] = useState({
      E11 : 0,
      E12 : 0,
      E13 : 0,
      E21 : 0,
      E22 : 0,
      E23 : 0,
      E24 : 0,
      E3: 0,
      E4: 0,
      E5: 0,
      E61: 0,
      E62: 0,
      E7: 0,
      E8: 0,
      E9: 0,
      E1_0: 0,
      E1_1: 0,
      E1_2: 0,
      E1_3: 0,
      E1_4: 0,
      E1_5: 0,
    });

    const labels2 = ["No", "To some extent", "Moderate", "Absolutely"];

    const handleStarClick = (value, question) => {
      setsubjectMatter((prevRatings) => ({ ...prevRatings, [question]: value }));
      
    };

    useEffect(()=>{
        console.log(subjectMatter);
    },[subjectMatter])

    const handleRadioChange = (value) => {
      setsubjectMatter((prevData) => ({ ...prevData, E11: value}));
    };


    return (
      <>
        <Heading 
        as="h1" 
        size="2xl" 
        mt={6} 
        mb={12} 
        fontWeight="semibold" 
        textAlign="left">
        Subject Matter
        </Heading>

        <FormControl>
          <Box mb={4}>
            <Text as="h2" fontSize="25px" textAlign="left" mr={4} paddingBottom="2.5%">
                  Compilation  of classical references
            </Text>
            <RadioGroup
              value={subjectMatter.E11}
              onChange={(value) => handleRadioChange(value)}
            >
              <Stack spacing={4}>
                <Radio value="0" fontSize="lg">
                  <Text fontSize="lg">
                    No references
                  </Text>
                  </Radio>
                  <Radio value="1">
                    <Text fontSize="lg">
                      Direct references from only major classics
                    </Text>
                  </Radio>
                  <Radio value="2">
                    <Text fontSize="lg">
                      Including cross references from major classics
                    </Text>
                  </Radio>
                  <Radio value="3">
                    <Text fontSize="lg">
                      Direct references from all classics.
                    </Text>
                  </Radio>
                  <Radio value="4">
                    <Text fontSize="lg">Including refrences from all classics</Text>
                  </Radio>
                  <Radio value="5">
                    <Text fontSize="lg">Along with commentators' views</Text>
                  </Radio>
                </Stack>
              </RadioGroup>
        </Box>
        <Box mb={4}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
              Appropriately interpreted, discussed and logically concluded  (Score out of 5)
            </Text>
            <NumberInput max={5} min={0} 
            defaultValue={1}
            value={subjectMatter.E12}
            onChange={(value) => setsubjectMatter({ ...subjectMatter, E12: value })}
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
              Added with recent and relevant advances   (Score out of 5)
            </Text>
            <NumberInput max={5} min={0} defaultValue={1}
            value={subjectMatter.E13}
            onChange={(value) => setsubjectMatter({ ...subjectMatter, E13: value })}
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
          <Text as="h2" fontSize="25px" textAlign="left" mr={4} paddingBottom="2.5%">
            The concepts
          </Text>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
                Clear & Accurate (Score out of 5)
            </Text>
            <NumberInput max={5} min={0} defaultValue={1}
            value={subjectMatter.E21}
            onChange={(value) => setsubjectMatter({ ...subjectMatter, E21: value })}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
                Comprehensiveness (Score out of 5)
            </Text>
            <NumberInput max={5} min={0} defaultValue={1}
            value={subjectMatter.E22}
            onChange={(value) => setsubjectMatter({ ...subjectMatter, E22: value })}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
                Self-explanatory and do not require additional resources to understand(Score out of 5)
            </Text>
            <NumberInput max={5} min={0} defaultValue={1}
            value={subjectMatter.E23}
            onChange={(value) => setsubjectMatter({ ...subjectMatter, E23: value })}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
                Supported with authoritative (Score out of 5)
            </Text>
            <NumberInput max={5} min={0} defaultValue={1}
            value={subjectMatter.E24}
            onChange={(value) => setsubjectMatter({ ...subjectMatter, E24: value })}
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
              Consistency of content to entire curriculum & syllabus (1 score for
every 20% of content)
              </Text>
              <NumberInput max={5} min={0} defaultValue={1}
              value={subjectMatter.E3}
              onChange={(value) => setsubjectMatter({ ...subjectMatter, E3: value })}
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
                  Understandable to all three types of learners (advance, medium and slow learners)
              </Text>
              <Flex>
              {labels2.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= subjectMatter.E4 ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "E4")}
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
                Is the matter facilitating students to learn directly and independently and construct meaning on their own (i.e., read to learn)
              </Text>
              <Flex>
              {labels2.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= subjectMatter.E5 ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "E5")}
                    aria-label={`Rate ${idx}`}
                    size="sm"
                    mr={2}
                  />
                </Tooltip>
              ))}
              </Flex>
            </Flex>
          </Box>
          <Box md={4}>
              <Text as="h2" fontSize="25px" textAlign="left" mr={4}>
                    Is the content promoting
              </Text>
              <Flex alignItems="center" justifyContent="space-between">
              <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
              Higher-order thinking skills that require analysis, evaluation
and judgement, and not just recalling and comprehension of
facts 
              </Text>
              <Flex>
              {labels2.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= subjectMatter.E61 ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "E61")}
                    aria-label={`Rate ${idx}`}
                    size="sm"
                    mr={2}
                  />
                </Tooltip>
              ))}
              </Flex>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between">
              <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
              Deep processing, critical and creative thinking by providing
less structured problems and more open-ended questions 
              </Text>
              <Flex>
              {labels2.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= subjectMatter.E62 ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "E62")}
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
              Content is with well- formed presentation, discussion and
conclusion
              </Text>
              <Flex>
              {labels2.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= subjectMatter.E7 ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "E7")}
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
              Content reveals clear meaning & thought provoking
              </Text>
              <Flex>
              {labels2.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= subjectMatter.E8 ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "E8")}
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
              Content is focussed on main idea and no diversions, no irrelevant
content
              </Text>
              <Flex>
              {labels2.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= subjectMatter.E9 ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "E9")}
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
              Definitions explained well with suitable examples
              </Text>
              <Flex>
              {labels2.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= subjectMatter.E1_0 ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "E1_0")}
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
              There are multiple perspectives and balanced viewpoints on issues
              </Text>
              <Flex>
              {labels2.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= subjectMatter.E1_1 ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "E1_1")}
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
              There is no bias in content, such as over-generalisation and
stereotyping
              </Text>
              <Flex>
              {labels2.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= subjectMatter.E1_2 ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "E1_2")}
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
              The content and illustrations do not carry any form of
discrimination on the grounds of gender, age, race, religion,
culture, disability etc., nor do they suggest exclusion.
              </Text>
              <Flex>
              {labels2.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= subjectMatter.E1_3 ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "E1_3")}
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
                Included appropriate resources for further reading
              </Text>
              <Flex>
              {labels2.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= subjectMatter.E1_4 ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "E1_4")}
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
              Bibliography, References & Citations 
              </Text>
              <NumberInput max={5} min={0} defaultValue={1}
              value={subjectMatter.E1_5}
              onChange={(value) => setsubjectMatter({ ...subjectMatter, E1_5: value })}
              >
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
  
  export default SubjectMatter;
  