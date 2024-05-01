import { Box, Button, Heading, Text } from "native-base";
import { RFPercentage } from "react-native-responsive-fontsize";

export function Signln() {
    return (
        <Box flex={1} bg="green.700">
            <Box
                h={RFPercentage(70)}
                alignItems="center"
                position="relative"
                justifyContent="center"
                bg="gray.700"
            >

                <Heading
                    fontSize="xl"
                    color="green.700"

                >
                    DevProgress
                </Heading>

                <Text
                    fontSize="md"
                    color="gray.200"

                >
                    Gerencie seu estudo de forma eficiente.
                </Text>

                <Button
                    position="absolute"
                    bottom={-20}
                    width="90%"
                    alignItems="center"
                    justifyContent="center"
                    bg="white"

                    _pressed={{
                        bg: "white",
                        opacity: .8
                    }}

                >
                    <Text
                        color="black"
                        fontWeight="bold"
                        fontSize="md"

                    >

                        Entrar com Github
                    </Text>
                </Button>
            </Box>

        </Box>
    );
}
