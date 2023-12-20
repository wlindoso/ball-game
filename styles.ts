import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  area: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#333",
  },
  control: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    margin: 20,
  },
  controlText: {
    color: "#fff",
  },
  controlButton: {
    flex: 1,
    height: 100,
    backgroundColor: "#0061ff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  controlButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
