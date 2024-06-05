import { StatusBar } from "expo-status-bar";
import { View, Image, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Link, router } from "expo-router";
import HomeHeader from "@/components/HomeHeader";

export default function App() {
    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <StatusBar style="auto" />
                <View className="flex-1 items-center mt-32 w-full">
                    <HomeHeader />
                    <View className="w-10/12 mt-5 flex flex-col items-center">
                        <PrimaryButton
                            isLoading={false}
                            content="Sign In"
                            handlePress={() => router.push("/sign-in")}
                            customClasses="w-full mt-7"
                        />
                        <View className="flex gap-2 mt-3 flex-row">
                            <Text className="mt-7">No Account</Text>
                            <Link className="text-primary" href="/sign-up">
                                Sign up here.
                            </Link>
                        </View>
                        <Link className="text-primary mt-3" href="/terms">
                            Privacy Policy.
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
