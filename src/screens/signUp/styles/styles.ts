import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  link: {
    marginTop: 20,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});
