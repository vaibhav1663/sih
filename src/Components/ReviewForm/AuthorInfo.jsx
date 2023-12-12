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

const AuthorInfo = ({OnDataChange}) => {
  const [authorData, setAuthorData] = useState({
    numberOfAuthors: 1,
    qualification: 0,
    experience: 1,
    expertise: {
      webOfScience: false,
      scopus: false,
      sci: false,
      pubmare: false,
      ugcCare: false,
    },
  });

  const handleNumberofAuthorChange = (value) => {
    setAuthorData({ ...authorData, numberOfAuthors: value });
    OnDataChange(Math.min(10,value*2),0);
  }

  const handleQualificationChange = (e) => {
    setAuthorData({ ...authorData, qualification: e.target.value });
    OnDataChange(e.target.value,1);
  }


  const handleCheckboxChange = (checkbox) => {
    setAuthorData((prevData) => ({
      ...prevData,
      expertise: { ...prevData.expertise, [checkbox]: !prevData.expertise[checkbox] },
    }));
    let count = 0;
    if(authorData.expertise[checkbox]===false){
      count++;
    }
    else{
      count--;
    }
    for (const key in authorData.expertise) {
      if (authorData.expertise[key] === true) {
        count++;
      }
      console.log(key);
    }
    OnDataChange(count*2,3);
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
            onChange={handleNumberofAuthorChange}
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
            onChange={handleQualificationChange}
          >
            <option value="0">No Proper Qualification</option>
            <option value="1">Non-Domain</option>
            <option value="2">Domain-UG</option>
            <option value="3">Domain-PG (Specialization in other sub-domain)</option>
            <option value="4">Domain-PG (Specialization in the same sub-domain)</option>
            <option value="5">PhD</option>
          </Select>

          <Text as="h2" fontSize="lg" textAlign="left">
            Experience
          </Text>
          <NumberInput
            min={1}
            onChange={(value) => OnDataChange(Math.min(5,value),2)}
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

          <Text as="h2" fontSize="lg" textAlign="left">
            Number of books authored by the writer.
          </Text>
          <NumberInput
            min={1}
            onChange={(value) => OnDataChange(Math.min(20,value*4),4)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

        </Stack>
      </FormControl>

    </>
  );
};

export default AuthorInfo;
