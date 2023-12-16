import { useState } from "react";
import {
  Flex,
  Heading,
  Select,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
  import { useDisclosure } from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [error, setError] = useState(""); 

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous error message
    setError("");

    // Basic validations
    if (!role) {
      setError("Please select a role");
      return;
    }

    if (!email.trim()) {
      setError("Please enter an email address");
      return;
    }

    if (!password.trim()) {
      setError("Please enter a password");
      return;
    }

    const userInfo = {
      role,
      email,
      password,
    };

    console.log("User Logged In", userInfo);
  };


  return (
    <>

     <li
      className="block py-2 px-3 text-gray-900 rounded transition duration-300 ease-in-out transform hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer focus:outline-none focus:ring focus:border-blue-300"
      onClick={onOpen}
                >
        Login
      </li>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={4}
                pt={10}
                pb={6}
                justifyContent="center"
                alignItems="center"
              >
                <Avatar bg="teal.500" size="lg" />
                <Heading color="teal.500" className="mb-6">
                  {role.charAt(0).toUpperCase() + role.slice(1)} Login
                </Heading>
                <FormControl>
                  <Select
                    value={role}
                    onChange={(e) => {
                      setRole(e.target.value);
                      setError(""); // Reset error message on change
                    }}
                  >
                    <option value="" disabled>
                      Select Role
                    </option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="reviewer">Reviewer</option>
                    <option value="admin">Admin</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError(""); // Reset error message on change
                      }}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      pr="4.5rem"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError(""); 
                      }}
                    />
                    <InputRightElement mr={2}>
                      <Button
                        h="1.75rem"
                        size="lg"
                        variant="ghost"
                        onClick={handleShowClick}
                        leftIcon={
                          showPassword ? <AiFillEye /> : <AiFillEyeInvisible />
                        }
                      />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                {error && (
                  <Box color="red.500" fontSize="sm" mb={4}>
                    {error}
                  </Box>
                )}
                <Button
                  borderRadius={4}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Login
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginForm;