import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Ball } from "./components/Ball";
import { useEffect, useState } from "react";

let timer: number;

const App = () => {
  const [gravity, setGravity] = useState(0.98);
  const [upForce, setUpForce] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const applyGravity = () => {
      // Decreasing upForce
      let newUpForce = upForce - gravity;
      newUpForce = newUpForce < 0 ? 0 : newUpForce;
      setUpForce(newUpForce);

      // Modifying speed (posY)
      let newSpeed = speed + (gravity - newUpForce / 2);
      setSpeed(newSpeed);

      // setting new position based on speed
      let newPosY = posY - newSpeed;

      if (newPosY < 0) {
        newPosY = 0;
        setSpeed(0);
      }
      setPosY(newPosY);
    };

    clearTimeout(timer); // garante que sempre haverá apenas 1 timer funcionando

    setTimeout(applyGravity, 30); // executa a cada 30ms
  }, [gravity, upForce, speed, posY]);
  const handleForceButton = () => {
    setUpForce(7);
  };

  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Ball posY={posY} />
      </View>
      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>UpForce: {upForce.toFixed(2)}</Text>
          <Text style={styles.controlText}>Speed: {speed.toFixed(2)}</Text>
          <Text style={styles.controlText}>PosY: {posY.toFixed(2)} </Text>
        </View>

        <TouchableOpacity
          style={styles.controlButton}
          onPress={handleForceButton}>
          <Text style={styles.controlButtonText}>Push</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
