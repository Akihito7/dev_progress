import { HStack, Text, VStack } from "native-base";

type PropsHistoryCard = {
    date: string;
    tempoDeEstudo: string;
    totalCommits: string;
}

export function HistoryCard({ item }: { item: PropsHistoryCard }) {
    return (
        <VStack
            w="full"
            bg="gray.500"
            py={2}
            px={4}
            borderRadius={5}
            space={2}
            mb={2}
        >

            <HStack>
                <Text
                    flex={1}
                    color="white"
                    fontSize="md"
                    fontWeight="bold"

                >
                    Tempo de estudo
                </Text>

                <Text
                    color="white"
                    fontSize="md"
                    fontWeight="bold"

                >
                    {item.tempoDeEstudo}
                </Text>


            </HStack>

            <HStack>
                <Text
                    flex={1}
                    color="gray.100"
                    fontSize="sm"

                >
                    Total de commits
                </Text>

                <Text
                    color="gray.100"
                    fontSize="sm"
                >
                    {item.totalCommits} commits
                </Text>


            </HStack>


            <Text
                color="gray.200"
                fontSize="sm"
                

            >
                {item.date}
            </Text>
        </VStack>
    )
}