import { Box, Heading, ScrollView, Text, TextArea, VStack } from "native-base";
import { HeaderDefault } from "../components/HeaderDefault";
import { AnalyticsReportCard } from "../components/AnalyticsReportCard";

export function AnalyticsReport() {
    return (
        <VStack flex={1} bg="gray.700">
            <HeaderDefault />

            <ScrollView>
                <Box px={4} mt={8} mb={4}>

                    <Box
                        bg="green.700"
                        w="full"
                        height={32}
                        borderRadius={5}
                        alignItems="center"
                        justifyContent="center"
                        px={4}
                        py={4}

                    >
                        <Heading
                            color="white"
                        >
                            Tempo total de estudo
                        </Heading>

                        <Heading
                            color="white"
                            fontSize="3xl"
                        >
                            04h44min
                        </Heading>



                    </Box>

                    <VStack mt={8}>

                        <Text
                            color="white"
                            fontSize="xl"
                            fontWeight="bold"
                            mb={4}
                        >
                            Outras estatíscas
                        </Text>

                        <AnalyticsReportCard
                            title="Total de commits"
                            analytics="3 commits"
                        />

                        <AnalyticsReportCard
                            title="Tempo total de pausas"
                            analytics="31min"
                        />

                        <AnalyticsReportCard
                            title="Tempo comparado com a sessão anterior"
                            analytics="+01h44min"
                        />

                    </VStack>

                    <VStack mt={8}>

                        <Text
                            color="white"
                            fontSize="lg"
                            fontWeight="bold"
                            mb={4}
                        >
                            Anotações sobre sessão
                        </Text>

                        <TextArea
                            autoCompleteType={"off"}
                            isReadOnly
                            borderColor="gray.500"
                            borderWidth={2}
                            color="gray.200"
                            fontSize="sm"
                            h="auto"
                            py={2}
                            value="Nessa sessão fiz o design da minha aplicação, falta apenas a ultima screen
                            de um popup"
                            
                        />

                    </VStack>

                </Box>
            </ScrollView>



        </VStack>
    )
}