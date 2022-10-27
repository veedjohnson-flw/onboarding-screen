import { StyleSheet, Text, View, Dimensions, ScrollView, Image, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import React, { useCallback, useState } from 'react';

import Button from '../components/Button';

const screenData = [
    {
        img: require("./manicure.png"),
        title: "Create and manage events",
        caption: "The easy way to create virtual and physical events wherever you are."
    },
    {
        img: require("./manicure.png"),
        title: "Smooth ticket sales",
        caption: "Sell event tickets with multiple payment methods."
    },
    {
        img: require("./manicure.png"),
        title: "Fast check In",
        caption: "Verify and check in attendees right from your phone in seconds."
    },
]

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const OnboardingScreen = () => {
    const [activeData, setActiveData] = useState(0);

    const onchange = useCallback((nativeEvent: any) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide !== activeData) {
                setActiveData(slide)
            }
        }
    }, [activeData, setActiveData])

    return (
            <View style={styles.containerWrap}>
                <View>
                    <Text style={styles.logo}>afritickets</Text>
                </View>
                <View>
                    <ScrollView
                        onScroll={({nativeEvent}) => onchange(nativeEvent)}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                    >
                        {
                            screenData.map(({img, title, caption}, index) => (
                                <View key={index} style={styles.dataWrap}>
                                    <Image
                                        style={styles.imgWrap}
                                        source={img}
                                    />
                                    <Text style={styles.title}>{title}</Text>
                                    <Text style={styles.caption}>{caption}</Text>
                                </View>
                            ))
                        }

                    </ScrollView>
                    <View style={styles.wrapDot}>
                        {
                            screenData.map((data, index) => (
                                <Text 
                                    key={index} 
                                    style={activeData === index ? styles.dotActive : styles.dot}
                                >
                                ●
                                </Text>
                            ))
                        }
                    </View>
                </View>
                <View style={styles.buttonWrap}>
                    <Button 
                        component="SignUp" 
                        title="Get Started"
                        styled={true}
                    />
                    <Button 
                        component="SignUp" 
                        title="Sign In"
                    />
                </View>
            </View>

    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    containerWrap: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 40,
        width: WIDTH,
        height: "100%",
    },
    logo: {
        fontSize: 26,
        fontWeight: "500",
        textAlign: "center"
    },
    dataWrap: {
        padding: 10,
        alignItems: "center",
        width: WIDTH - 40
    },
    imgWrap: {
        width: WIDTH * 0.4,
        height: HEIGHT * 0.4,
        marginVertical: 20
    },
    wrapDot: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        fontSize: 15,
        margin: 3,
        color: '#090E29'
    },
    dot: {
        fontSize: 15,
        margin: 3,
        color: "#E0E0E0"
    },
    title: {
        fontSize: 24,
        lineHeight: 23,
        textAlign: "center"
    },
    caption: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: "center",
        marginVertical: 10
    },
    buttonWrap: {
        marginTop: 20,
    }
})