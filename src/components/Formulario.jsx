import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Formulario() {
  //Create state which will be used by the Picker:
  // Guardamos las selecciones
  const [moneda, setMoneda] = useState("");
  const [cripto, setCripto] = useState("");

  // Guardamos si ya le dimos clic al boton
  const [mensaje, setMensaje] = useState(false);

  return (
    <View style={styles.box}>
      {/* Primer  */}
      <Text>Moneda</Text>
      <Picker selectedValue={moneda} onValueChange={(val) => setMoneda(val)}>
        <Picker.Item label="Seleccione" value="" />
        <Picker.Item label="Dolar USD" value="USD" />
        <Picker.Item label="Peso Mexicano MXN" value="MXN" />
        <Picker.Item label="Euro EUR" value="EUR" />
        <Picker.Item label="Libra Esterlina GBP" value="GBP" />
      </Picker>

      {/* Segundo menu */}
      <Text>Criptomoneda</Text>
      <Picker selectedValue={cripto} onValueChange={(val) => setCripto(val)}>
        <Picker.Item label="Seleccione" value="" />
        <Picker.Item label="Bitcoin" value="BTC" />
        <Picker.Item label="Ethereum" value="ETH" />
      </Picker>

      {/* Boton */}
      <TouchableOpacity style={styles.boton} onPress={() => setMensaje(true)}>
        <Text style={styles.textoBoton}>Cotizar</Text>
      </TouchableOpacity>

      {/* Si mensaje es true mostramos el texto */}
      {mensaje && <Text style={styles.alerta}>Formulario creado</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 20,
    width: "100%",
  },
  boton: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 15,
  },
  textoBoton: {
    color: "white",
    textAlign: "center",
  },
  alerta: {
    marginTop: 15,
    color: "black",
    textAlign: "center",
  },
});
