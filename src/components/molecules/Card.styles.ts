import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardItem: {
    width: '100%',
    backgroundColor: '#1C2541',
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  itemText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  indicator: {
    position: 'absolute',
    right: 10,
  },
});
