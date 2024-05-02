import { HStack, Text } from "native-base";


type PropsAnalyticsReportCard = {
    title : string;
    analytics : string;
}
export function AnalyticsReportCard({title, analytics} : PropsAnalyticsReportCard) {
    return (
        <HStack
            w="full"
            bg="gray.500"
            py={2}
            px={4}
            borderRadius={5}
            space={2}
            mb={2}
            alignItems="center"

        >

            <Text
                color="gray.100"
                flex={1}

            >
                {title}
            </Text>

            <Text
                color="white"
                fontSize="lg"
                fontWeight="bold"
            >
                {analytics}
            </Text>
        </HStack>
    )
}