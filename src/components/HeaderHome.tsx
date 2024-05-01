import { HStack, Heading, Image, ScrollView, Text, VStack } from "native-base";
import { StudyCommitCard } from "./StudyCommitCard";

export function HeaderHome() {
    return (

        <VStack
            w="full"
            bg="gray.500"
            pt={12}
            pb={4}
            px={4}
        >

            <HStack
                mb={6}
            >
                <Image
                    w={14}
                    h={14}
                    source={{
                        uri: "https://github.com/Akihito7.png"
                    }}
                    alt="Foto de perfil"
                />

                <VStack ml={4}>
                    <Text
                        color="gray.200"
                        fontSize="md"
                    >
                        Olá,
                    </Text>
                    <Heading
                        color="gray.100"
                        fontSize="md"
                    >
                        Guilherme Akihito
                    </Heading>
                </VStack>



            </HStack>

            <StudyCommitCard />



        </VStack>
    )
}