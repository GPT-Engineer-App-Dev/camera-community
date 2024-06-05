import { Box, Button, Container, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUpload = () => {
    // Handle the upload logic here
    console.log("File:", file);
    console.log("Description:", description);
  };

  return (
    <Container maxW="container.md" py={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Upload Photo</Text>
        <Input type="file" onChange={handleFileChange} />
        <Input
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <Button colorScheme="blue" onClick={handleUpload}>
          Upload
        </Button>
      </VStack>
    </Container>
  );
};

export default Upload;