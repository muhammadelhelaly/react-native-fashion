import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";
import Graph from "../components/Graph";
import { FlatList } from "react-native-gesture-handler";
import theme from "../config/theme";
import deviceType from "../utils/deviceType";
import TopCurve from "../components/TopCurve";

const { width, height } = Dimensions.get("window");

const HEADERITEMSCOLOR = colors.dark;
const POINT_SIZE = 8;
const formatter = Intl.DateTimeFormat("en", { month: "short" });
const itemFormatter = Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "long",
  day: "2-digit",
});

const data = [
  {
    date: new Date("2019-09-01").getTime(),
    value: 0,
    color: colors.primary,
  },
  {
    date: new Date("2019-10-01").getTime(),
    value: 0,
    color: colors.primary,
  },
  {
    id: 245671,
    date: new Date("2019-11-11").getTime(),
    value: 139.42,
    color: colors.primary,
  },
  {
    id: 245672,
    date: new Date("2019-12-20").getTime(),
    value: 281.23,
    color: colors.danger,
  },
  {
    date: new Date("2020-01-01").getTime(),
    value: 0,
    color: colors.primary,
  },
  {
    id: 245673,
    date: new Date("2020-02-17").getTime(),
    value: 198.54,
    color: colors.warning,
  },
  {
    date: new Date("2020-03-01").getTime(),
    value: 0,
    color: colors.primary,
  },
];

function TransactionHistory({ navigation }) {
  const [footerHight, setFooterHight] = useState(0);

  const chartData = {
    labels: data.map((i) => formatter.format(new Date(i.date))),
    datasets: [
      {
        data: data.map((i) => Math.floor(i.value)),
      },
    ],
  };

  const leftIcon = (
    <MaterialCommunityIcons name="menu" size={20} color={HEADERITEMSCOLOR} />
  );

  const rightIcon = (
    <SimpleLineIcons name="handbag" size={18} color={HEADERITEMSCOLOR} />
  );

  return (
    <Screen
      navigation={navigation}
      title="Transaction History"
      titleColor={HEADERITEMSCOLOR}
      iconContainerColor={colors.light}
      leftIcon={leftIcon}
      leftIconOnPress={() => navigation.openDrawer()}
      rightIcon={rightIcon}
      rightIconOnPress={() => console.log("Test")}
      cartItemsCount={2}
    >
      <View style={styles.container}>
        <Text style={styles.subTitle}>{"Total Spent".toLocaleUpperCase()}</Text>
        <View style={styles.mainTitleContainer}>
          <Text
            style={{ fontSize: 30, fontWeight: "bold", color: colors.medium }}
          >
            $619,19
          </Text>
          <View style={styles.allBtn}>
            <Text style={{ color: colors.primary }}>All Time</Text>
          </View>
        </View>
        <Graph data={data} />
        <View
          style={[styles.detailsContainer, { paddingBottom: footerHight - 30 }]}
        >
          <FlatList
            data={data.filter((payment) => payment.value > 0).reverse()}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.date.toString()}
            renderItem={({ item }) => (
              <View style={styles.detailsItem}>
                <View style={styles.item}>
                  <View style={styles.itemId}>
                    <View
                      style={[styles.point, { backgroundColor: item.color }]}
                    ></View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: colors.dark,
                        fontWeight: "bold",
                      }}
                    >
                      #{item.id}
                    </Text>
                  </View>
                  <Text style={{ color: colors.medium }}>
                    {`$${item.value} - ${itemFormatter.format(
                      new Date(item.date)
                    )}`}
                  </Text>
                </View>
                <View>
                  <Text>See more</Text>
                </View>
              </View>
            )}
          ></FlatList>
        </View>
      </View>
      <TopCurve footerHight={footerHight} color={colors.primary} />
      <View
        style={styles.footer}
        onLayout={(event) => setFooterHight(event.nativeEvent.layout.height)}
      >
        <Image
          source={require("./../assets/bg-pattern_sm.png")}
          style={{
            borderTopLeftRadius: theme.borderRadius,
            width: width + 4,
            height: height / 8 + (deviceType.isPhone ? -6 : 12) + 30,
            marginLeft: -2,
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
  },
  subTitle: {
    fontSize: 12,
    color: colors.medium,
    opacity: 0.5,
    paddingHorizontal: 15,
  },
  mainTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  allBtn: {
    backgroundColor: colors.primaryLight,
    paddingVertical: 8,
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  detailsContainer: {
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 20,
  },
  detailsItem: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemId: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 15,
  },
  point: {
    height: POINT_SIZE,
    width: POINT_SIZE,
    borderRadius: POINT_SIZE / 2,
    marginRight: 5,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 50,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
});

export default TransactionHistory;
