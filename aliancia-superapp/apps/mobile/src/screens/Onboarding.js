import { View, Text, Image, TouchableOpacity } from "react-native";
import CryptoJS from "crypto-js";
import Animated, { SlideInRight } from "react-native-reanimated";

// Função para criptografar dados sensíveis
const encryptData = (data) => CryptoJS.AES.encrypt(data, process.env.CRYPTO_SECRET || "aliancia_superapp_secret").toString();

const pages = [
  {
    title: "Bem-vindo à ALIANCI.A",
    desc: "Sua jornada de prosperidade começa agora.",
    img: "https://images.unsplash.com/photo-1682687220742-aba13b310420"
  },
  {
    title: "Ganhe e Indique",
    desc: "Sistema inteligente de comissões 25/10/5.",
    img: "https://images.unsplash.com/photo-1682687220621-568e8f2f4e92"
  },
  {
    title: "MI.A ao seu lado",
    desc: "IA avançada guiando seus passos.",
    img: "https://images.unsplash.com/photo-1677442136019-e43689c8f5d1"
  }
];

export default function Onboarding({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      {pages.map((p, i) => (
        <Animated.View
          key={i}
          entering={SlideInRight.delay(i * 300)}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 30,
            backgroundColor: "#000"
          }}
        >
          <Image
            source={{ uri: p.img }}
            style={{ width: "90%", height: 300, borderRadius: 20, marginBottom: 30 }}
          />
          <Text style={{ color: "#FFD700", fontSize: 36, fontWeight: "bold" }}>
            {/* Exemplo de uso da criptografia */}
            {encryptData(p.title)}
          </Text>
          <Text style={{ color: "#ccc", fontSize: 20, marginTop: 14, textAlign: "center" }}>
            {p.desc}
          </Text>
        </Animated.View>
      ))}

      <TouchableOpacity
        onPress={() => navigation?.replace?.("Login")}
        style={{
          position: "absolute",
          bottom: 40,
          alignSelf: "center",
          padding: 20,
          borderRadius: 20,
          backgroundColor: "#FFD700"
        }}
      >
        <Text style={{ color: "#000", fontSize: 22, fontWeight: "bold" }}>COMEÇAR</Text>
      </TouchableOpacity>
    </View>
  );
}
