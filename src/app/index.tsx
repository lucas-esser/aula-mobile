import { addDoc, collection } from "firebase/firestore";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { db } from "../../firebaseConfig";

type Produto = {
  nome: string;
  preco: number;
  unidade: string;
};

export default function Index() {
  function inserir() {
    const prod: Produto = {
      nome: "Bergamota",
      preco: 7.99,
      unidade: "KG",
    };

    try {
      addDoc(collection(db, "produtos"), prod);
      Alert.alert("Produto inserido");
    } catch (e) {
      Alert.alert("Erro", String(e));
    }
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={inserir}>
        <Text style={styles.texto}>Inserir dado no banco</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 20,
  },
});
