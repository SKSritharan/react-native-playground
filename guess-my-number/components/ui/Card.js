import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

export default function Card({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
