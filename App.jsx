import { FlatList, StyleSheet, Text, View } from "react-native";

import Contact from "./components/Contact";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(() => [
    { name: "Juan dela Cruz", number: "+63 912 345 6789" },
    { name: "Maria Santos", number: "+63 918 765 4321" },
    { name: "Lea Salonga", number: "+63 933 210 9876" },
    { name: "Manny Pacquiao", number: "+63 925 678 1234" },
    { name: "Kathryn Bernardo", number: "+63 934 210 9876" },
    { name: "Alden Richards", number: "+63 926 678 1234" },
    { name: "Liza Soberano", number: "+63 919 890 1234" },
    { name: "Vice Ganda", number: "+63 929 765 4321" },
    { name: "Marian Rivera", number: "+63 936 210 9876" },
    { name: "Fernando Poe Jr.", number: "+63 923 678 1234" },
    { name: "Anne Curtis", number: "+63 915 890 1234" },
    { name: "Angel Locsin", number: "+63 938 765 4321" },
    { name: "Dingdong Dantes", number: "+63 937 210 9876" },
    { name: "Sarah Geronimo", number: "+63 932 678 1234" },
    { name: "Daniel Padilla", number: "+63 916 890 1234" },
    { name: "Piolo Pascual", number: "+63 931 345 6789" },
    { name: "Bea Alonzo", number: "+63 927 765 4321" },
    { name: "Coco Martin", number: "+63 939 210 9876" },
    { name: "Nadine Lustre", number: "+63 930 678 1234" },
    { name: "James Reid", number: "+63 935 890 1234" },
  ]);  

  const deleteHandler = (name) => {
    const newPeople = people.filter(item => item.name !== name)
    setPeople(newPeople)
    console.log(name, " deleted!")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Contacts</Text>
      </View>
      <FlatList
        style={styles.contactList}
        data={people}
        renderItem={({ item }) => (
          <Contact
            name={item.name}
            number={item.number}
            deleteHandler={deleteHandler}
          />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F8",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50
  },
  header: {
    padding: "10px",
  },
  heading: {
    fontSize: 45,
    fontWeight: "bold",
  },
  subheader: {
    padding: "5px",
  },
  subheading: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "SamsungSansSharp",
  },
  contactList: {
    marginTop: 30
  }
});
