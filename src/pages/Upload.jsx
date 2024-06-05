import { Box, Button, Container, Input, Text, VStack, SimpleGrid, Image } from "@chakra-ui/react";
import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUpload = () => {
    if (file && description) {
      const newPhoto = {
        id: photos.length + 1,
        url: URL.createObjectURL(file),
        description: description,
      };
      setPhotos([...photos, newPhoto]);
      setFile(null);
      setDescription("");
    }
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
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mt={4}>
        {photos.map(photo => (
          <Box key={photo.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={photo.url} alt={photo.description} />
            <Box p={4}>
              <Text>{photo.description}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Upload;