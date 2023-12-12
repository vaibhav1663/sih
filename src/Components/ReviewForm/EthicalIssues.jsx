import { FormControl, Text, Stack } from "@chakra-ui/react";
import { HStack, Heading } from "@chakra-ui/react";
import { RadioGroup, Radio } from "@chakra-ui/react";
import { useState} from "react";

const EthicalIssues = ({OnDataChange}) => {
  const ethicalIssues = [
    { id: "fabrication", label: "Fabrication / Falsification of Data" },
    { id: "plagiarism", label: "Plagiarism" },
    { id: "citation", label: "Citation Bias" },
  ];

  const [selectedValues, setSelectedValues] = useState({});

  const handleRadioChange = (issueId, value) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [issueId]: value,
    }));
    OnDataChange(issueId, value);
  };

  return (
    <>
      <Heading as="h1" size="2xl" mt={6} mb={12} fontWeight="semibold" textAlign="left">
        Ethical Issues
      </Heading>
      <FormControl as="fieldset" display="flex" flexDirection="column">
        {ethicalIssues.map((issue) => (
          <Stack key={issue.id} spacing={4} mb={4}>
            <Text as="h2" fontSize="lg" textAlign="left">
              {issue.label}
            </Text>
            <RadioGroup 
            onChange={(value) => handleRadioChange(issue.id, value)}
            >
              <HStack spacing="24px">
                <Radio value="true">Yes</Radio>
                <Radio value="false">No</Radio>
              </HStack>
            </RadioGroup>
          </Stack>
        ))}
      </FormControl>
    </>
  );
};

export default EthicalIssues;
