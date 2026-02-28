import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { supabase } from "@/services/supabaseClient";
import { Ionicons } from "@expo/vector-icons";

export default function Category() {
  const { type, title } = useLocalSearchParams();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase
        .from("locations")
        .select("*")
        .eq("category", type);

      if (!error) {
        setItems(data || []);
      }
    };
    fetchItems();
  }, [type]);

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.7}
      onPress={() =>
        router.push({
          pathname: "/detail",
          params: { ...item, name: item.name },
        })
      }
    >
      <Image
        source={{ uri: item.image_url }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
        <View style={styles.districtRow}>
          <Ionicons name="location-sharp" size={14} color="#A67B5B" />
          <Text style={styles.district} numberOfLines={1}>
            {item.address || `อำเภอ${item.district || "เมือง"}`}
          </Text>
        </View>
        <Text style={styles.shortDescription} numberOfLines={1}>
          {item.description}
        </Text>
      </View>
      <View style={styles.chevronContainer}>
        <Ionicons name="chevron-forward" size={20} color="#ccc" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 20,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,

    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 15,
    backgroundColor: "#F5F5F5",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  name: {
    fontFamily: "Prompt_700Bold",
    fontSize: 18,
    color: "#333",
    marginBottom: 2,
  },
  districtRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  district: {
    fontFamily: "Prompt_400Regular",
    fontSize: 13,
    color: "#A67B5B",
    marginLeft: 4,
  },
  shortDescription: {
    fontFamily: "Prompt_400Regular",
    fontSize: 12,
    color: "#9E9E9E",
    marginTop: 2,
  },
  chevronContainer: {
    paddingLeft: 5,
  },
});
