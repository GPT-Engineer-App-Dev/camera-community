import { Box, Container, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Profile = () => {
  const userPhotos = [
    { id: 1, url: "https://via.placeholder.com/300", description: "My first photo" },
    { id: 2, url: "https://via.placeholder.com/300", description: "Vacation memories" },
  ];

  return (
    <Container maxW="container.lg" py={4}>
      <Text fontSize="2xl" mb={4}>My Profile</Text>
      <Text fontSize="lg" mb={4}>Username: JohnDoe</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        {userPhotos.map(photo => (
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

export default Profile;