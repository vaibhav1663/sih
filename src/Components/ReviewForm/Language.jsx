import React,{ useEffect, useState } from "react";
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

const Language = ({onDataChange}) => {
    const [ratings, setRatings] = useState({
        simpleLanguage: null,
        technicalTerminology: null,
        standardPunctuation: null,
        accurateLanguage: null,
        contextClues:  null,
        grammaticalMistakes: null,
        fragments: null,
        capitalization: null,
      });

    const label = ["No", "To some extent", "Moderate", "Absolutely"];

    const handleStarClick = (value, question) => {
        setRatings((prevRatings) => ({ ...prevRatings, [question]: value }));
        if(question=="simpleLanguage"){
            onDataChange(value, 0);
        }
        else if(question=="technicalTerminology"){
            onDataChange(value, 1);
        }
        else if(question=="standardPunctuation"){
            onDataChange(value, 2);
        }
        else if(question=="accurateLanguage"){
            onDataChange(value, 3);
        }
        else if(question=="contextClues"){
            onDataChange(value, 4);
        }
        else if(question=="grammaticalMistakes"){
            onDataChange(value, 5);
        }
        else if(question=="fragments"){
            onDataChange(value, 6);
        }
        else if(question=="capitalization"){
            onDataChange(value, 7);
        }
      };
  
      useEffect(()=>{
          console.log(ratings);
      },[ratings])

    return (<>
        <Heading
          as="h1"
          size="2xl"
          mt={6}
          mb={12}
          fontWeight="semibold"
          textAlign="left"
        >
          Language of the Book
        </Heading>
  
        <FormControl>
          <Box mb={4}>
            <Flex alignItems="center" justifyContent="space-between">
              <Text as="h2" fontSize="lg" textAlign="left" mr={4}>
                Is the language used in the text simple?
              </Text>
              <Flex>
              {label.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= ratings.simpleLanguage? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "simpleLanguage")}
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
                Usage of Standard Technical Terminology
              </Text>
              <Flex>
              {label.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= ratings.technicalTerminology ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "technicalTerminology")}
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
                    Usage of Standard Punctuation Marks & Symbols
              </Text>
              <Flex>
              {label.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= ratings.standardPunctuation ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "standardPunctuation")}
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
                The language is accurate and precise
              </Text>
              <Flex>
              {label.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= ratings.accurateLanguage ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "accurateLanguage")}
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
                Can the audience determine meanings of difficult or technical
                terms through context clues?
              </Text>
              <Flex>
              {label.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= ratings.contextClues ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "contextClues")}
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
              Is the text free from Grammatical mistakes, redundancies,
wordiness, highfalutin and sexist language?
              </Text>
              <Flex>
              {label.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= ratings.grammaticalMistakes ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "grammaticalMistakes")}
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
              Is the text free from fragments, run-on, and overly complex
sentences?
              </Text>
              <Flex>
              {label.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= ratings.fragments ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "fragments")}
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
              Are capitalization, spelling, and paragraphs used correctly?

              </Text>
              <Flex>
              {label.map((label, idx) => (
                <Tooltip key={idx} label={`${label} (${idx})`} placement="top">
                  <IconButton
                    icon={
                      <StarIcon
                        boxSize={4}
                        color={idx <= ratings.capitalization ? "teal.500" : "gray.300"}
                      />
                    }
                    onClick={() => handleStarClick(idx, "capitalization")}
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
    </>)
}

export default Language;