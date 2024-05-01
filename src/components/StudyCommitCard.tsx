import { Text, VStack } from "native-base";


export function StudyCommitCard() {
    return (
        <VStack

            w="full"
            bg="gray.700"
            borderRadius={10}
            px={4}
            py={4}
            justifyContent="space-evenly"
        >

            <Text
                color="gray.00"
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