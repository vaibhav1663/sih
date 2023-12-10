import { FormControl, Text, Stack } from "@chakra-ui/react";
import { HStack, Heading } from "@chakra-ui/react";
import { RadioGroup, Radio } from "@chakra-ui/react";

const EthicalIssues = () => {
  const ethicalIssues = [
    { id: "fabrication", label: "Fabrication / Falsification of Data" },
    { id: "plagiarism", label: "Plagiarism" },
    { id: "citation", label: "Citation Bias" },
  ];

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
            <RadioGroup defaultValue="Yes">
              <HStack spacing="24px">
                <Radio value="Yes">Yes</Radio>
                <Radio value="No">No</Radio>
              </HStack>
            </RadioGroup>
          </Stack>
        ))}
      </FormControl>
    </>
  );
};

export default EthicalIssues;
