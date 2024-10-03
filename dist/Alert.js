"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Alert = ({ title = "Alert", message, visible, buttons, primary = "#194a7a", secondary = "#476f95", background = "#f1f4f6", text = "#0b1215", warning = "#B32128", inputProps, isLoading = false, loadingTitle, }) => {
    return (react_1.default.createElement(react_native_1.Modal, { transparent: true, visible: visible, animationType: "fade" },
        react_1.default.createElement(react_native_1.View, { style: styles.overlay },
            react_1.default.createElement(react_native_1.View, { style: [styles.alertContainer, { backgroundColor: background }] },
                isLoading && (react_1.default.createElement(react_native_1.View, { style: [styles.loading, { backgroundColor: background }] },
                    loadingTitle && (react_1.default.createElement(react_native_1.Text, { style: { color: primary, marginBottom: 5 } }, loadingTitle)),
                    react_1.default.createElement(react_native_1.ActivityIndicator, { color: primary }))),
                react_1.default.createElement(react_native_1.Text, { style: [styles.alertTitle, { color: text }] }, title),
                message && (react_1.default.createElement(react_native_1.Text, { style: [styles.alertMessage, { color: text }] }, message)),
                inputProps && (react_1.default.createElement(react_1.default.Fragment, null,
                    inputProps.label && (react_1.default.createElement(react_native_1.Text, { style: { paddingLeft: 10, color: secondary } }, inputProps.label)),
                    react_1.default.createElement(react_native_1.TextInput, Object.assign({ style: { padding: 10 } }, inputProps.inputProps, { value: inputProps.value, onChangeText: inputProps.onValueChanged, underlineColorAndroid: primary })),
                    inputProps.error && (react_1.default.createElement(react_native_1.Text, { style: { paddingLeft: 10, color: warning, marginBottom: 10 } }, inputProps.error)))),
                buttons.length > 2 ? (react_1.default.createElement(react_native_1.View, null, buttons.map((button, index) => (react_1.default.createElement(react_native_1.TouchableOpacity, { key: index, onPress: button.onPress, style: styles.buttonContainer },
                    react_1.default.createElement(react_native_1.Text, { style: [
                            styles.buttonText,
                            { color: button.isCancel ? warning : primary },
                        ] }, button.title)))))) : (react_1.default.createElement(react_native_1.View, { style: styles.twoButtonContainer }, buttons.map((button, index) => (react_1.default.createElement(react_native_1.TouchableOpacity, { key: index, onPress: button.onPress, style: styles.twoButton },
                    react_1.default.createElement(react_native_1.Text, { style: [
                            styles.buttonText,
                            { color: button.isCancel ? warning : primary },
                        ] }, button.title))))))))));
};
const styles = react_native_1.StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        justifyContent: "center",
        alignItems: "center",
    },
    alertContainer: {
        width: "80%",
        borderRadius: 10,
        overflow: "hidden",
    },
    alertTitle: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 20,
    },
    alertMessage: {
        textAlign: "center",
        fontSize: 16,
        marginBottom: 20,
    },
    buttonContainer: {
        paddingVertical: 15,
        borderTopColor: "grey",
        borderTopWidth: 0.5,
    },
    buttonText: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18,
        textTransform: "capitalize",
    },
    twoButtonContainer: {
        borderTopColor: "grey",
        borderTopWidth: 0.5,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    twoButton: {
        paddingVertical: 15,
        flex: 1,
    },
    loading: {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});
exports.default = Alert;
