import { Box, Container, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Home = () => {
  const photos = [
    { id: 1, url: "https://via.placeholder.com/300", description: "Beautiful scenery" },
    { id: 2, url: "https://via.placeholder.com/300", description: "City lights" },
    { id: 3, url: "https://via.placeholder.com/300", description: "Mountain view" },
  ];

  return (
    <Container maxW="container.lg" py={4}>
      <Text fontSize="2xl" mb={4}>Photo Feed</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
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

export default Home;