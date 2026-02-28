import LoadingSpinner from '@/components/LoadingSpinner';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
 
export default function SplashScreen() {

    useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/home');
    }, 3000);
 
    return () => clearTimeout(timer);
  }, []);
 
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/tra.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>จังหวัด</Text>
      <Text style={styles.title}>กำแพงเพชร</Text>
      <View style={styles.loader}>
          <LoadingSpinner size={30} color="#6F4E37" />
        </View>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffbf2a' },
  logo: { width: 200, height: 200, borderRadius: 100, marginBottom: 20 },
  title: { fontFamily: 'Prompt_700Bold', fontSize: 30, color: '#6F4E37' },
  caption: { fontFamily: 'Prompt_400Regular', fontSize: 16, color: '#888', marginTop: 10 },
  loader: { marginTop: 50},
});