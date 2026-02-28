import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "@/services/supabaseClient";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface Tradition {
  id: string;
  title: string;
  event_month: string;
  image_url: string;
  description: string;
  latitude: number;
  longitude: number;
  location_name: string;
}

export default function Home() {
  const [traditions, setTraditions] = useState<Tradition[]>([]);

  useEffect(() => {
    const fetchTraditions = async () => {
      const { data, error } = await supabase.from("traditions").select("*");
      if (error) {
        console.error("Error fetching traditions:", error);
      } else {
        setTraditions(data);
      }
    };
    fetchTraditions();
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={styles.container}>
        <ImageBackground
          source={require("@/assets/images/kamphangphet.jpg")}
          style={styles.logo}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Text style={styles.subtitle}>ยินดีต้อนรับสู่ </Text>
            <Text style={styles.title}>กำแพงเพชร</Text>
          </View>
        </ImageBackground>
        <View style={styles.flameContainer}>
          <View style={styles.flame1}>
            <Text style={styles.subtitle}>คำขวัญประจำจังหวัด</Text>
            <Text style={styles.text}>
              กรุพระเครื่อง เมืองคนแกร่ง พระแสงฯล้ำค่า{"\n"}ศิลาแลงใหญ่
              กล้วยไข่หวาน น้ำมันลานกระบือ{"\n"}เลื่องลือมรดกโลก
            </Text>
          </View>
          <View style={styles.traditionContainer}>
            <Text style={styles.sectionTitle}>🗓️ ประเพณีที่น่าสนใจ</Text>

            {traditions.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.traditionCard}
                onPress={() =>
                  router.push({
                    pathname: "/detail",
                    params: {
                      id: item.id,
                      name: item.title, // ส่ง title ไปเป็น name ในหน้า Detail
                      description: item.description,
                      image_url: item.image_url,
                      event_month: item.event_month,
                      latitude: item.latitude,
                      longitude: item.longitude,
                      district: item.location_name,
                    },
                  })
                }
              >
                <Image
                  source={
                    item.image_url
                      ? { uri: item.image_url }
                      : require("@/assets/images/Nop Phra Len Phleng.webp")
                  }
                  style={styles.traditionImage}
                  resizeMode="cover"
                />
                <View style={styles.traditionInfo}>
                  <Text style={styles.traditionName}>{item.title}</Text>
                  <Text style={styles.traditionDate}>
                    📅 {item.event_month}
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#ccc" />
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.interview}>
            <Text style={styles.interviewText}>สถานที่แนะนำ</Text>
          </View>
          <View style={styles.flame2}>
            <TouchableOpacity style={styles.attraction} onPress={() => router.push({ pathname: "/category", params: { type: 'attraction', title: 'สถานที่ท่องเที่ยว' } })}>
              <ImageBackground
                source={require("@/assets/images/numtok.jpg")}
                style={styles.bgImage}
                borderRadius={20}
              >
                <View style={styles.buttonText}>
                  <Text style={styles.attractiontext}>สถานที่ท่องเที่ยว</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.restaurant} onPress={() => router.push({ pathname: "/category", params: { type: 'restaurant', title: 'ร้านอาหาร' } })}>
              <ImageBackground
                source={require("@/assets/images/oahan.jpg")}
                style={styles.bgImage}
                borderRadius={20}
              >
                <View style={styles.buttonText}>
                  <Text style={styles.restauranttext}>ร้านอาหาร</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cafe} onPress={() => router.push({ pathname: "/category", params: { type: 'cafe', title: 'ร้านกาแฟและของหวาน' } })}>
              <ImageBackground
                source={require("@/assets/images/cafe.jpg")}
                style={styles.bgImage}
                borderRadius={20}
              >
                <View style={styles.buttonText}>
                  <Text style={styles.cafetextText}>ร้านกาแฟ{"\n"}ของหวาน</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.temple} onPress={() => router.push({ pathname: "/category", params: { type: 'temple', title: 'วัดและศาสนสถาน' } })}>
              <ImageBackground
                source={require("@/assets/images/wud.jpg")}
                style={styles.bgImage}
                borderRadius={20}
              >
                <View style={styles.buttonText}>
                  <Text style={styles.templetext}>วัด{"\n"}ศาสนสถาน</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.flame3}>
            <Text style={styles.sectionTitle}>ข้อมูลทั่วไปของจังหวัด</Text>

            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>เนื้อที่ประมาณ</Text>
                <Text style={styles.infoValue}>8,607.49 ตร.กม.</Text>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>อันดับความใหญ่</Text>
                <Text style={styles.infoValue}>อันดับที่ 22 ของไทย</Text>
              </View>
            </View>

            <View style={styles.descriptionBox}>
              <Text style={styles.descriptionText}>
                กำแพงเพชรเป็นเมืองมรดกโลกที่มีประวัติศาสตร์ยาวนานกว่า 700 ปี
                ตั้งอยู่บริเวณลุ่มแม่น้ำปิง
                มีลักษณะภูมิประเทศเป็นป่าเขาทางทิศตะวันตก
                และที่ราบลุ่มทางทิศตะวันออก
                เป็นแหล่งปลูกกล้วยไข่ที่ดีที่สุดในประเทศไทย
              </Text>
            </View>
            <View style={styles.statsContainer}>
              <Text style={styles.statsText}>
                🏘️ 11 อำเภอ | 78 ตำบล | 823 หมู่บ้าน
              </Text>
            </View>
            <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
              สัญลักษณ์ประจำจังหวัด
            </Text>
            <View style={styles.image}>
              <Image
                source={require("@/assets/images/tra.png")}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.flame4}>
            <Text style={styles.subTitle}>📍 อาณาเขตติดต่อ</Text>
            <View style={styles.subflame4}>
              <Text style={styles.borderText}>
                • ทิศเหนือ: ติดตาก และ สุโขทัย
              </Text>
              <Text style={styles.borderText}>• ทิศใต้: ติดนครสวรรค์</Text>
              <Text style={styles.borderText}>
                • ทิศตะวันออก: ติดพิจิตร และ พิษณุโลก
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: { width: "100%", height: 300, justifyContent: "flex-end" },
  flameContainer: {
    width: "100%",
    backgroundColor: "#ffffff",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.29)",
    flex: 1,
    justifyContent: "flex-end",
    padding: 25,
    paddingBottom: 20,
  },
  title: {
    color: "#ffbf2a",
    fontSize: 50,
    textAlign: "center",
    fontFamily: "Prompt_700Bold",
  },
  subtitle: {
    color: "white",
    fontSize: 23,
    textAlign: "center",
    fontFamily: "Prompt_700Bold",
  },
  flame1: {
    padding: 20,
    backgroundColor: "#ffbf2a",
    marginBottom: 10,
  },
  text: {
    color: "#6F4E37",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Prompt_400Regular",
    marginTop: 10,
  },
  flame2: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
    marginBottom: 10,
  },
  attraction: {
    width: "45%",
    aspectRatio: 1,
    margin: 5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  attractiontext: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Prompt_700Bold",
  },
  restaurant: {
    width: "45%",
    aspectRatio: 1,
    margin: 5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  restauranttext: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Prompt_700Bold",
  },
  cafe: {
    width: "45%",
    aspectRatio: 1,
    margin: 5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cafetextText: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Prompt_700Bold",
  },
  temple: {
    width: "45%",
    aspectRatio: 1,
    margin: 5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  templetext: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Prompt_700Bold",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  buttonText: {
    backgroundColor: "rgba(0, 0, 0, 0.37)",
    flex: 1,
    justifyContent: "center",
    padding: 10,
    paddingBottom: 20,
    borderRadius: 20,
  },
  flame3: {
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffe2a0",
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "Prompt_700Bold",
    color: "#6F4E37",
    marginBottom: 15,
    textAlign: "center",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  infoItem: {
    alignItems: "center",
  },
  infoLabel: {
    fontSize: 14,
    color: "#8B4513",
    fontFamily: "Prompt_400Regular",
  },
  infoValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6F4E37",
  },
  descriptionBox: {
    borderTopWidth: 1,
    borderTopColor: "#DEB887",
    paddingTop: 20,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 24,
    color: "#4A4A4A",
    textAlign: "center",
    fontFamily: "Prompt_400Regular",
  },
  statsContainer: {
    marginTop: 50,
    backgroundColor: "#6F4E37",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  statsText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  divider: {
    width: 1,
    backgroundColor: "#DEB887",
    marginHorizontal: 20,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: "Prompt_700Bold",
    color: "#6F4E37",
    marginBottom: 8,
  },
  borderText: {
    fontSize: 18,
    fontFamily: "Prompt_400Regular",
    color: "#4A4A4A",
    lineHeight: 22,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  flame4: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff2d4",
  },
  subflame4: {
    marginTop: 10,
    marginBottom: 20,
  },
  interview: {
    padding: 20,
  },
  interviewText: {
    color: "#ffbf2a",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Prompt_700Bold",
  },
  traditionContainer: {
    padding: 20,
    backgroundColor: "#ffffff",
  },
  traditionCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 18,
    marginBottom: 15,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  traditionImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: "#eee",
  },
  traditionInfo: {
    marginLeft: 15,
    flex: 1,
    justifyContent: "center",
  },
  traditionName: {
    fontSize: 17,
    fontFamily: "Prompt_700Bold",
    color: "#333",
    marginBottom: 4,
  },
  traditionDate: {
    fontSize: 14,
    color: "#6F4E37",
    fontFamily: "Prompt_400Regular",
  },
  loadingText: {
    textAlign: "center",
    color: "#888",
    fontFamily: "Prompt_400Regular",
    marginTop: 20,
  },
});
