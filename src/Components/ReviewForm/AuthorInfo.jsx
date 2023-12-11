import {
  FormControl,
  Stack,
  Text,
  Select,
  Heading,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const AuthorInfo = () => {
  const [authorData, setAuthorData] = useState({
    numberOfAuthors: 1,
    qualification: "",
    experience: 1,
    expertise: {
      webOfScience: false,
      scopus: false,
      sci: false,
      pubmare: false,
      ugcCare: false,
    },
  });

  const handleExperienceChange = (value) => {
    setAuthorData((prevData) => ({ ...prevData, experience: value }));
  };

  const handleCheckboxChange = (checkbox) => {
    setAuthorData((prevData) => ({
      ...prevData,
      expertise: { ...prevData.expertise, [checkbox]: !prevData.expertise[checkbox] },
    }));
  };


  useEffect(() => {
    console.log(authorData)
  }, [authorData]);

  return (
    <>
      <Heading as="h1" size="2xl" mt={6} mb={12} fontWeight="semibold" textAlign="left">
        Authors
      </Heading>

      <FormControl>
        <Stack spacing={4}>
          <Text as="h2" fontSize="lg" textAlign="left">
            Number of Authors
          </Text>
          <NumberInput
            min={1}
            value={authorData.numberOfAuthors}
            onChange={(value) => setAuthorData({ ...authorData, numberOfAuthors: value })}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Text as="h2" fontSize="lg" textAlign="left">
            Qualification
          </Text>
          <Select
            placeholder="Select Qualification"
            value={authorData.qualification}
            onChange={(e) => setAuthorData({ ...authorData, qualification: e.target.value })}
          >
            <option>No Proper Qualification</option>
            <option>Non-Domain</option>
            <option>Domain-UG</option>
            <option>Domain-PG (Specialization in other sub-domain)</option>
            <option>Domain-PG (Specialization in the same sub-domain)</option>
          </Select>

          <Text as="h2" fontSize="lg" textAlign="left">
            Experience
          </Text>
          <NumberInput
            min={1}
            value={authorData.experience}
            onChange={(value) => handleExperienceChange(value)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Text as="h2" fontSize="lg" textAlign="left">
            Expertise
          </Text>
          <Stack spacing={5} direction="row">
            <Checkbox
              isChecked={authorData.expertise.webOfScience}
              onChange={() => handleCheckboxChange("webOfScience")}
            >
              Web of Science
            </Checkbox>
            <Checkbox isChecked={authorData.expertise.scopus} onChange={() => handleCheckboxChange("scopus")}>
              SCOPUS
            </Checkbox>
            <Checkbox isChecked={authorData.expertise.sci} onChange={() => handleCheckboxChange("sci")}>
              SCI
            </Checkbox>
            <Checkbox isChecked={authorData.expertise.pubmare} onChange={() => handleCheckboxChange("pubmare")}>
              PUBMARE
            </Checkbox>
            <Checkbox isChecked={authorData.expertise.ugcCare} onChange={() => handleCheckboxChange("ugcCare")}>
              UGC CARE
            </Checkbox>
          </Stack>
        </Stack>
      </FormControl>

    </>
  );
};

export default AuthorInfo;
