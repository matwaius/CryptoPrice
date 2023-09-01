import React from "react";
import {View, Text, Image} from "react-native";
import styles from "./styles";

export default function QuotationsItems(){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                    style={styles.logBitCoin}
                    source={require("../../../img/bitcoin.png")}
                    />
                    <Text style={styles.dayCotation}>18/08/2023</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 26000.78</Text>
            </View>
        </View>
    )
}