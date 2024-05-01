import { HStack, Text, VStack } from "native-base";


export function StudyCommitCard() {
    return (
        <VStack

            w="full"
            bg="green.700"
            h={40}
            borderRadius={10}
            px={4}
            py={4}

        >


            <HStack flex={1}>
                <Text
                    color="gray.200"
                    fontSize="md"

                    flex={1}
                >
                    Empenho
                </Text>

                <Text
                    color="gray.200"
                    fontSize="md"

                >
                    Razóavelmente bom
                </Text>

            </HStack>



            <Text
                color="gray.200"
                fontSize="xl"
                fontWeight="bold"
            >
                Horas total de estudo
            </Text>

            <Text
                color="gray.100"
                fontSize="3xl"
                fontWeight="bold"
            >
                18h30min

            </Text>

        </VStack>
    )
}