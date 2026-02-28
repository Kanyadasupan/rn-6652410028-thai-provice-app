import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useLocalSearchParams } from "expo-router";
import * as Linking from "expo-linking";
export default function Detail() {
  const params = useLocalSearchParams();

  const handleOpenMapApp = () => {
    // แก้ไข URL ให้ถูกต้องสำหรับการเปิด Google Maps
    const url = `https://www.google.com/maps/search/?api=1&query=${params.latitude},${params.longitude}`;
    Linking.openURL(url);
  };

  const handleCallApp = () => {
    const url = `tel:${params.phone}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" ,padding: 20}}>
      <Image
        source={{ uri: params.image_url as string }}
        style={styles.image}
      />
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{params.name}</Text>
        
        {/* แสดงอำเภอ/ที่ตั้งหลัก */}
        <Text style={styles.district}>📍 {params.district || "จังหวัดกำแพงเพชร"}</Text>
        
        {/* ส่วนเฉพาะของ "ประเพณี" */}
        {params.event_month && (
          <View style={styles.detailRow}>
            <Text style={styles.detailText}>📅 ช่วงเวลา: {params.event_month}</Text>
          </View>
        )}

        {/* ส่วนเฉพาะของ "สถานที่/ร้านอาหาร" (จากตาราง locations) */}
        {params.address && (
          <View style={styles.addressBox}>
            <Text style={styles.addressTitle}>ที่อยู่</Text>
            <Text style={styles.addressText}>{params.address}</Text>
          </View>
        )}

        {/* แสดงเวลาเปิด-ปิด (ถ้ามี) */}
        {(params.opening_hours || params.closed_days) && (
          <View style={styles.timeBox}>
            <Text style={styles.timeTitle}>⏱️ เวลาทำการ</Text>
            <Text style={styles.timeText}>เปิด: {params.opening_hours || "-"}</Text>
            <Text style={[styles.timeText, { color: '#E74C3C' }]}>
              หยุด: {params.closed_days || "เปิดทุกวัน"}
            </Text>
          </View>
        )}

        <Text style={styles.sectionHeader}>รายละเอียด</Text>
        <Text style={styles.description}>{params.description}</Text>

        {params.phone && (
          <TouchableOpacity style={styles.callButton} onPress={handleCallApp}>
            <Text style={styles.callButtonText}>📞 โทรสอบถาม: {params.phone}</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.maptext}>พิกัดที่ตั้ง</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: parseFloat(params.latitude as string) || 16.4828,
            longitude: parseFloat(params.longitude as string) || 99.5227,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: parseFloat(params.latitude as string) || 16.4828,
              longitude: parseFloat(params.longitude as string) || 99.5227,
            }}
            title={params.name as string}
            onPress={handleOpenMapApp}
          />
        </MapView>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    marginBottom: 10,
  },
  infoContainer: {
    paddingBottom: 50,
  },

  name: {
    fontSize: 28,
    fontFamily: "Prompt_700Bold",
    color: "#6F4E37",
    marginTop: 10,
    marginBottom: 5,
  },

  district: {
    fontSize: 16,
    fontFamily: "Prompt_400Regular",
    color: "#A67B5B",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  description: {
    fontSize: 16,
    fontFamily: "Prompt_400Regular",
    color: "#4A4A4A",
    marginTop: 10,
  },

  backButton: {
    marginTop: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#A67B5B",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Prompt_700Bold",
    marginLeft: 10,
  },

  maptext: {
    marginTop: 30,
    fontSize: 20,
    fontFamily: "Prompt_700Bold",
    color: "#6F4E37",
    marginBottom: 10,
  },
  map: {
    width: "100%",
    height: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
  },
  sectionHeader: {
    fontSize: 18,
    fontFamily: "Prompt_700Bold",
    color: "#6F4E37",
    marginTop: 20,
    marginBottom: 5,
  },
  addressBox: {
    backgroundColor: '#F9F9F9',
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
  },
  addressTitle: {
    fontFamily: "Prompt_700Bold",
    fontSize: 14,
    color: "#6F4E37",
    marginBottom: 4,
  },
  addressText: {
    fontFamily: "Prompt_400Regular",
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  timeBox: {
    borderLeftWidth: 3,
    borderLeftColor: '#A67B5B',
    paddingLeft: 12,
    marginTop: 15,
  },
  timeTitle: {
    fontFamily: "Prompt_700Bold",
    fontSize: 14,
    color: "#333",
  },
  timeText: {
    fontFamily: "Prompt_400Regular",
    fontSize: 14,
    color: "#555",
  },
  callButton: {
    marginTop: 25,
    paddingVertical: 15,
    backgroundColor: "#ffbf2a",
    borderRadius: 12,
    alignItems: "center",
  },
  callButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Prompt_700Bold",
  },
    detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  detailIcon: {
    marginRight: 10,
  },
  detailText: {
    fontSize: 16,
    fontFamily: "Prompt_400Regular",
    color: "#4A4A4A",
  },
});
