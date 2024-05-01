import { HStack, Text } from "native-base";


type PropsAchievementsCard  = {
    title : string;
    achievement : string;

}


export function AchievementsCard({ item } : { item : PropsAchievementsCard}) {
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

               {item.title}
            </Text>

            <Text
                color="white"
                fontSize="lg"
                fontWeight="bold"

            >

                {item.achievement}
            </Text>
        </HStack>
    )
}