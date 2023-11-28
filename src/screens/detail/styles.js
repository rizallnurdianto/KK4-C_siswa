import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginTop: 60,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerGroup: {
        flexDirection: "row",
        gap: 6,
    },
    headerText2: {
        fontWeight: "bold",
    },
    profilImage: {
        width: 111,
        height: 111,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 8,
        marginBottom: 16,
    },
    profileText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    profileText2: {
        textAlign: "center",
        fontSize: 16,
        marginBottom: 28
    },
    content: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "#f4f4f4"
    },
    contentText: {
        paddingLeft: 18,
        paddingTop: 12,
    },
    contentText2: {
        paddingLeft: 18,
        paddingTop: 5,
        color: "red",
        fontWeight: "bold"
    },
    contentText3: {
        paddingLeft: 18,
        paddingTop: 5,
        color: "red",
        paddingBottom: 20,
    },
    content2: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: "#f4f4f4",
        paddingBottom: 10
    },
    fieldGroup: {
        marginTop: 25,
    },
    containerBtn: {
        flexDirection: "row",
        gap: 10,
        marginTop: 25,
        alignItems: "center"
    },
    kecilBtn: {
        backgroundColor: "red",
        padding: 15,
        borderRadius: 8
    },
    btnSimpan: {
        backgroundColor: "red",
        paddingVertical: 15,
        textAlign: "center",
        width: 255,
        borderRadius: 8
    },
    btnSimpanText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFFFFF",
        textAlign: "center"
    },
    contentContainer: {
        flexDirection: "column",
        gap: 10
    }
})

export default styles