import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import logo from "../../assets/logo.png"
import PropTypes from 'prop-types';


const AppliedJobsDetails = ({ summery }) => {
  console.log(summery);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image src={logo} style={{ width: "100px", marginHorizontal: "auto" }}></Image>
        {/* Map through the array of objects and render the content */}
        {
          summery.map((item, index) => (
            <View key={index} style={styles.section}>
              {/* Title */}
              <Text style={styles.title}>{item.jobTitle}</Text>
              <Text style={styles.submission}>Applicant: {item.name}</Text>
              <Text style={styles.submission}>Email: {item.email}</Text>
              <Text style={styles.submission}>Category: {item.category}</Text>

              {/* Date and Status */}
              <View style={styles.row}>
                <Text style={styles.date}>Application Date: {item.applicationDate?.split("T")[0]}</Text>
                <Text style={styles.status}>Status: {item.status}</Text>
              </View>

              {/* Divider */}
              <View style={styles.divider}></View>
            </View>
          ))}
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  submission: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 12,
  },
  date: {
    color: '#333333',
  },
  status: {
    color: '#007BFF',
  },
  divider: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
});


AppliedJobsDetails.propTypes = {
  summery: PropTypes.array
};



export default AppliedJobsDetails;