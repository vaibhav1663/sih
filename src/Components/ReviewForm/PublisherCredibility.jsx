import {
  FormControl,
  Heading,
  RadioGroup,
  Radio,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const PublisherCredibility = ({ OnRadioChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (value) => {
    setSelectedOption(value);
    OnRadioChange(Number(value));
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

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
        Publisher Credibility
      </Heading>

      <FormControl>
        <RadioGroup
          value={selectedOption}
          onChange={(value) => handleRadioChange(value)}
        >
          <Stack spacing={4}>
            <Radio value="5" fontSize="lg">
              <Text fontSize="lg">
                Publisher without any experience of publishing in Domain
              </Text>
            </Radio>
            <Radio value="10">
              <Text fontSize="lg">
                Publisher having experience in publishing in Domain but the
                publications not recommended by apex bodies
              </Text>
            </Radio>
            <Radio value="15">
              <Text fontSize="lg">
                Publisher having experience in publishing in Domain and the
                publications are recommended by apex bodies
              </Text>
            </Radio>
            <Radio value="20">
              <Text fontSize="lg">
                Publisher having multidimensional domain experience
              </Text>
            </Radio>
            <Radio value="25">
              <Text fontSize="lg">Well-established domain publisher</Text>
            </Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default PublisherCredibility;
