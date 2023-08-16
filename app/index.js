import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { View, Text, ScrollView, SafeAreaView } from "react-native";

import { images, icons, COLORS, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";



const Home = () => {
    const router = useRouter();
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimention='60%' />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={icons.profile} dimention='100%' />
                    ),
                    headerTitle: '',
                }} 
            />
            <ScrollView showsVerticalScrollIndicator={false}>

            <Text>Home</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;