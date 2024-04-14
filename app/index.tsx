import { StyleSheet, View, FlatList } from 'react-native';
import { Text } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from '@/components/Card'

const data = [
  {
    id: '1',
    location: 'Richmond Park',
    city: 'London',
    substance: '💊',
    startTime: '30d',
  },
  {
    id: '2',
    location: 'House',
    city: 'London',
    substance: '🍄',
    startTime: '1y',
  },
]

type itemProps = {
  location: string,
  city: string,
  substance: string,
  startTime: string,
}

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={[styles.bg]}
        colors={bgGradient}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => <Card heading={`${item.location},${item.city}`} />}
          keyExtractor={item => item.id}
        />
        <Card />
        <Card />
      </LinearGradient>

      <View />
    </View>
  );
}

const bgGradient = ['#0D0C1D', '#191736']

const styles = StyleSheet.create({
  bg: {
    flex: 1
  }
});
