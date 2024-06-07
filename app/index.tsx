import { StatusBar } from "expo-status-bar";
import { View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { router } from "expo-router";
import Logo from "@/components/Logo";
import { images } from "@/constants";
import ThemedText from "@/components/ThemedText";

export default function Index() {
    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <StatusBar style="auto" />
                <View className="flex-1 items-center mt-32 h-full w-10/12 mx-auto">
                    <Logo />

                    <View className="mt-10">
                        <ThemedText
                            type="em"
                            textClass=" mt-5 font-bold text-3xl pt-4"
                        >
                            #Share & Earn #Sub & Save
                        </ThemedText>
                    </View>
                    <View className="w-full mt-16 flex-col items-center">
                        <PrimaryButton
                            isLoading={false}
                            content="Sign In"
                            textClasses=""
                            handlePress={() => router.push("/sign-in")}
                            customClasses="w-full mt-2 bg-primary"
                        />

                        <PrimaryButton
                            isLoading={false}
                            content="Create an account"
                            handlePress={() => router.push("/sign-up")}
                            textClasses="text-green-700"
                            customClasses="w-full mt-4 bg-primary/20"
                        />
                    </View>

                    <View className="mb-5 mt-20">
                        <View className="gap-2 mt-5 flex-row items-center justify-center">
                            <View className="h-[1px] flex-1 bg-zinc-300" />
                            <ThemedText>Or continue using</ThemedText>
                            <View className="h-[1px] flex-1 bg-zinc-300" />
                        </View>
                        <View className="gap-1 mt-5 flex-row w-full justify-between">
                            <PrimaryButton
                                isLoading={false}
                                content={
                                    <Image
                                        source={images.apple}
                                        className="h-6 w-6"
                                        resizeMode="contain"
                                    />
                                }
                                textClasses=""
                                handlePress={() => router.push("/sign-in")}
                                customClasses="flex-1 bg-white border mx-1 border-zinc-300"
                            />

                            <PrimaryButton
                                isLoading={false}
                                content={
                                    <Image
                                        source={images.google}
                                        className="h-6 w-6"
                                        resizeMode="contain"
                                    />
                                }
                                textClasses=""
                                handlePress={() => router.push("/sign-in")}
                                customClasses="flex-1 bg-white border mx-1 border-zinc-300"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
