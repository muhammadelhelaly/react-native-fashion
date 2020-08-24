import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";
import Graph from "../components/Graph";

const HEADERITEMSCOLOR = colors.dark;
const formatter = Intl.DateTimeFormat("en", { month: "short" });

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
    date: new Date("2019-11-01").getTime(),
    value: 139.42,
    color: colors.primary,
  },
  {
    date: new Date("2019-12-01").getTime(),
    value: 281.23,
    color: colors.danger,
  },
  {
    date: new Date("2020-01-01").getTime(),
    value: 0,
    color: colors.primary,
  },
  {
    date: new Date("2020-02-01").getTime(),
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
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
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
});

export default TransactionHistory;
