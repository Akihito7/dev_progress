import { Box, VStack } from "native-base";
import { HeaderHome } from "../components/HeaderHome";
import { Timer } from "../components/Timer";

export function Home() {
    return (
        <Box flex={1} bg="gray.700">
            <HeaderHome />

            <VStack
                px={4}
                mt={8}
                flex={1}
                py={16}
            >

                <Timer />

            </VStack>
        </Box>
    )
}   