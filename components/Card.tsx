import { View, Text, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

interface cardProps {
    heading?: string
    startTime?: string
}

export function Card({ heading = 'TITLE', startTime = '30d' }: cardProps) {
    return (
        <LinearGradient
            style={[styles.gradient]}
            colors={bgGradient}
            start={{
                x: 0.5, y: 0.5
            }}>
            <View style={{ padding: 25, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, }}>
                    <Text style={[styles.heading, styles.text]}>{heading}</Text>
                    <Text
                        style={[styles.time, styles.text,]}
                    >{startTime}</Text>

                </View>
                <Text>💊</Text>
            </View>
            <Image
                style={{ height: 300 }}
                source={{
                    uri: 'https://neural.love/cdn/ai-photostock/1ed6edfe-282e-6946-a534-67422454bb22/0.jpg?Expires=1717199999&Signature=j-vfzCvztO26Vwhg69j3-uaQu5Ltr9TcTIugXM~iTetFF8B5bjopb0Z7nh7KKlHAhkPgbTsGoSGktNIULRSldStkkhAItoA2ETSgE1brqKMrvdUBGAvCzjknscsd8ZttiIPY8EMHJg1lcpmJE5moR7D7Ylt-97ymDN5azTQRFRCM7DiwpxC8nUzdZzgH3U1mh-joNXZRxHSPySlda-bH~QzIqdebmGkW-7L-hor2eQVNOosoBcfCjb4Eni-D12Ja6-ytRF1qH8joRRA3yCmlFA~C3~qNE37ZY07DuqNTFfvOkPnjjxtsd-DJoHol89E9tOwTqePRG2kb78Lr15Y3QA__&Key-Pair-Id=K2RFTOXRBNSROX',
                }}
            />
            <View style={{ backgroundColor: '#11031A', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text
                    style={[styles.words, styles.text,]}
                >Fun, insightful, pleasant</Text>
            </View>
        </LinearGradient >
    )
}

const bgGradient = ['#270040', '#754493']

const styles = StyleSheet.create({
    gradient: {
        flex: 1
    },
    text: {
        color: 'white',
    },
    heading: {
        fontSize: 21,
    },
    time: {
        color: 'grey'
    },
    words: {
        fontSize: 18,
        padding: 20,
    }
});