import { Box, HStack, ScrollView, Text, VStack, useTheme } from "native-base";
import { HeaderDefault } from "../components/HeaderDefault";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { AchievementsCard } from "../components/AchievementsCard";


export function Dashboard() {

    const theme = useTheme();

    return (
        <VStack flex={1} bg='gray.700'>
            <HeaderDefault />

            <ScrollView>
            <HStack justifyContent="space-between" px={4} mt={8}>
                <Box
                    width={24}
                    height={8}
                    bg="transparent"
                    borderWidth={1.5}
                    borderColor="green.700"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={2}

                >
                    <Text
                        color="white"
                    >
                        Horas
                    </Text>
                </Box>

                <Box
                    width={24}
                    height={8}
                    bg="transparent"
                    borderWidth={1.5}
                    borderColor="green.700"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={2}
                >
                    <Text
                        color="white"
                    >
                        Meses
                    </Text>
                </Box>

                <Box
                    width={24}
                    height={8}
                    bg="transparent"
                    borderWidth={1.5}
                    borderColor="green.700"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={2}
                >
                    <Text
                        color="white"
                    >
                        2024
                    </Text>
                </Box>
            </HStack>

            <Box px={4} alignItems="center" justifyContent="center">
                <Text>Bezier Line Chart</Text>
                <LineChart
                    data={{
                        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    width={(Dimensions.get("window").width) - 20}
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} 
                    chartConfig={{
                        backgroundColor: theme.colors.gray[700],
                        backgroundGradientFrom: theme.colors.gray[700],
                        backgroundGradientTo: theme.colors.gray[600],
                        decimalPlaces: 2, 
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: theme.colors.green[700]
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 10
                    }}
                />
            </Box>

            <VStack px={4} mt={2}>
                <Text
                    color="white"
                    fontSize="xl"
                    fontWeight="bold"
                    mb={4}
                >
                    Estatísticas
                </Text>

                <AchievementsCard
                    item={{
                        title: "horas total de estudo /ano",
                        achievement: "100h"
                    }}
                />

                <AchievementsCard
                    item={{
                        title: "Total commits /ano",
                        achievement: "244 commits"
                    }}
                />

                <AchievementsCard
                    item={{
                        title: "Tempo medio por sessão",
                        achievement: "02h44min"
                    }}
                />

                <AchievementsCard
                    item={{
                        title: "Maior tempo de sessão",
                        achievement: "09h56min"
                    }}
                />


                <AchievementsCard
                    item={{
                        title: "Desempenho",
                        achievement: "Otimo"
                    }}
                />

            </VStack>

            </ScrollView>
        </VStack>
    )
}