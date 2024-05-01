import { Text, VStack, Button } from "native-base";

export function Timer() {
    return (
        <VStack
            w="full"
            alignItems="center"
        >

            <Text
                color="gray.100"
                fontSize="4xl"
                fontWeight="bold"
                mb={4}

            >
                01h30Min
            </Text>
            <Button
                width="full"
                bg="green.700"

                _pressed={{
                    bg: "green.700",
                    opacity: .8
                }}
            >
                <Text
                    color="white"
                    fontWeight="bold"
                    fontSize="md"
                >
                    Iniciar estudo
                </Text>
            </Button>
        </VStack>
    )
}