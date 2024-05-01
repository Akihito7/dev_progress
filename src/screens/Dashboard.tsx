import { Box, HStack, Text, VStack, useTheme } from "native-base";
import { HeaderDefault } from "../components/HeaderDefault";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";


export function Dashboard() {

    const theme = useTheme();

    return (
        <VStack flex={1} bg='gray.700'>
            <HeaderDefault />

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
                    width={(Dimensions.get("window").width) - 20} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: theme.colors.gray[700],
                        backgroundGradientFrom: theme.colors.gray[700],
                        backgroundGradientTo: theme.colors.gray[600],
                        decimalPlaces: 2, // optional, defaults to 2dp
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

        </VStack>
    )
}