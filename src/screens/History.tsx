import React from 'react';
import { FlatList, VStack } from 'native-base';
import { HeaderDefault } from "../components/HeaderDefault";
import { HistoryCard } from "../components/HistoryCard";

type PropsHistoryCard = {
    date: string;
    tempoDeEstudo: string;
    totalCommits: string;
};

const DAYSSTUDY: PropsHistoryCard[] = [
    { date: "01/05/2024", tempoDeEstudo: "02h30min", totalCommits: "3" },
    { date: "02/05/2024", tempoDeEstudo: "03h15min", totalCommits: "5" },
    { date: "03/05/2024", tempoDeEstudo: "01h45min", totalCommits: "2" },
    { date: "04/05/2024", tempoDeEstudo: "02h00min", totalCommits: "4" },
    { date: "05/05/2024", tempoDeEstudo: "02h10min", totalCommits: "6" },
    { date: "06/05/2024", tempoDeEstudo: "01h20min", totalCommits: "1" },
    { date: "07/05/2024", tempoDeEstudo: "03h00min", totalCommits: "7" },
    { date: "08/05/2024", tempoDeEstudo: "02h45min", totalCommits: "3" },
    { date: "09/05/2024", tempoDeEstudo: "02h20min", totalCommits: "5" },
    { date: "10/05/2024", tempoDeEstudo: "01h50min", totalCommits: "4" }
];

export function History() {
    return (
        <VStack
            flex={1}
            bg="gray.700"
        >
            <HeaderDefault />

            
            <FlatList
                data={DAYSSTUDY}
                keyExtractor={item => item.date}
                renderItem={({ item }) => {
                    return (
                        <VStack>
                            <HistoryCard item={item} />
                        </VStack>
                    )
                }}

                mt={8}
                mb={4}
                px={4}
            />



        </VStack >
    )
}
