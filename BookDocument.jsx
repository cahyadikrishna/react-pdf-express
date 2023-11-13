import { Document, Page, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  cover: {
    alignItems: 'center',
    backgroundColor: 'red',
    display: 'flex',
    gap: 30,
    height: '100vh',
    justifyContent: 'center',
    paddingHorizontal: '2cm',
    paddingVertical: '1.5cm',
  },
  coverTitle: {
    fontSize: 28,
    lineHeight: 1.2,
    textAlign: 'center',
  },
});

const paperSize = [432, 648];

export default function BookDocument() {
  return (
    <Document>
      <Page size={paperSize} style={styles.cover}>
        <Text style={styles.coverTitle} fixed>
          Vacation with Friends at Hometown
        </Text>
      </Page>
    </Document>
  );
}
