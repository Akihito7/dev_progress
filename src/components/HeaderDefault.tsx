import { Heading, VStack } from "native-base";

export function HeaderDefault() {
    return (
        <VStack
            w="full"
            bg="gray.500"
            pt={16}
            pb={6}
            px={4}

            alignItems="center"
            justifyContent="flex-end"
        >
            <Heading
                color="white"
                fontSize="xl"
            >
                History
            </Heading>
        </VStack>
    )
}