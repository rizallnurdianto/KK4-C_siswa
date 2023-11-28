import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        margin: 20,
        marginTop: 60,
    },
    txtWelcome: {
        fontSize: 14,
        color: "#8F8F8F",
        fontWeight: '100',
    },
    txtWelcome2: {
        fontSize: 18,
    },
    flexBell: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    imageDashboard: {
        width: 330,
        height: 184,
        right: 5,
        marginTop: 32,
    },
    seeDetails: {
        padding: 10,
        position: "absolute",
        marginTop: 194,
        color: "white",
        borderWidth: 1,
        borderRadius: 10,
        left: 22,
        borderColor: "#EE7A82",
        backgroundColor: "#EE7A82",
    },
    list: {
        marginTop: 32,
        marginBottom: 16,
        fontWeight: "bold",
        fontSize: 16,
    },
    liststudent: {
        flexDirection: "row",
        gap: 12,
    },
    imageList: {
        width: 60,
        height: 60,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    nis: {
        fontSize: 14,
        color: "#A8ACAF"
    },
    studentContainer: {
        flexDirection: 'column',
        marginTop: 12,
        gap: 2,
    },
    iconGroup: {
        backgroundColor: "#BEC1C4",
        height: 42,
        width: 42,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginLeft: 45
    },
    studentGroup: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: "#f4f4f4",
        borderRadius: 8,
    },
    iconFile: {
        color: 'black',
        marginLeft: 3,
    },
    keteranganGroup: {
        flexDirection: "row",
        paddingTop: 7,
        gap: 6,
    },
    keterangan: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 3
    },
    statusGroup: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    keteranganGroup2: {
        flexDirection: "row",
        paddingTop: 7,
        gap: 6,
        marginRight: 6
    },
    iconFile2: {
        color: 'blue',
        marginLeft: 3,
    },
    studentGroupContainer: {
        flexDirection: "column",
        gap: 16,
    },
    btnAdd: {
        backgroundColor: "#E2222E",
        padding: 14,
        borderRadius: 8,
        width: 55,
        position: "absolute",
        bottom: 50,
        right:10
    }
})

export default styles