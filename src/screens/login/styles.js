import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 30,
        backgroundColor: "#ffffff"
    },
    headerContainer: {
        fontSize: 34,
        fontWeight: "500",
        width: "75%",
        marginTop: 25,
    },
    textInputContainer: {
        marginTop: 62,
        gap:16,
    },
    textInputUsername: {
        flexDirection: "row",
        gap: 12,
        borderRadius: 8,
        borderWidth: 1,
        paddingVertical:10,
        paddingLeft:16,
    },
    forgotPassword:{
        textAlign: "right",
        marginTop:24
    },
    btnContainer: {
        marginTop: 25,
        gap: 20,
    },
    btnLogin: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        backgroundColor: "#E2222E",
        borderRadius: 8
    },
    textBtn: {
        fontSize: 16,
        fontWeight: "500",
        color: "#FFFFFF"
    },
    continueWith1Text: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "400"
    },
    btnContainerMedsos: {
        flexDirection: "row",
        gap: 8,
        justifyContent: "space-between"
    },
    btnMedsos: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        gap: 10,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 25
    },
    textMedsos: {
        fontSize: 16,
        fontWeight: "400"
    },
    footerContainer: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 175
    },
    footerText: {
        color: "#8F8F8F",
        fontSize: 16,
        fontWeight: '400'
    },
    footerBtnContainer: {
        color: "#3057FF",
        fontSize: 16,
        fontWeight: '400'
    },
})

export default styles