import React from "react";
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

interface AlertProps {
  title?: string;
  message: string;
  visible: boolean;
  buttons: AlertButtonProps[];

  primary?: string;
  secondary?: string;
  background?: string;
  text?: string;
  warning?: string;

  inputProps?: AlertInputProps;

  isLoading?: boolean;
  loadingTitle?: string;
}
export interface AlertTextProps {
  title: string;
  onPress: () => void;
  isCancel?: boolean;
}

export interface AlertButtonProps {
  title: string;
  onPress: () => void;
  isCancel?: boolean;
}

export interface AlertInputProps {
  value: string;
  onValueChanged: (v: string) => void;
  label?: string;
  inputProps?: TextInputProps;
  error?: string;
}

const Alert: React.FC<AlertProps> = ({
  title = "Alert",
  message,
  visible,
  buttons,
  primary = "#194a7a",
  secondary = "#476f95",
  background = "#f1f4f6",
  text = "#0b1215",
  warning = "#B32128",

  inputProps,

  isLoading = false,
  loadingTitle,
}) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={[styles.alertContainer, { backgroundColor: background }]}>
          {isLoading && (
            <View style={[styles.loading, { backgroundColor: background }]}>
              {loadingTitle && (
                <Text style={{ color: primary, marginBottom: 5 }}>
                  {loadingTitle}
                </Text>
              )}
              <ActivityIndicator color={primary} />
            </View>
          )}
          <Text style={[styles.alertTitle, { color: text }]}>{title}</Text>
          <Text style={[styles.alertMessage, { color: text }]}>{message}</Text>
          {inputProps && (
            <>
              {inputProps.label && (
                <Text style={{ paddingLeft: 10, color: secondary }}>
                  {inputProps.label}
                </Text>
              )}
              <TextInput
                style={{ padding: 10 }}
                {...inputProps.inputProps}
                value={inputProps.value}
                onChangeText={inputProps.onValueChanged}
                underlineColorAndroid={primary}
              />
              {inputProps.error && (
                <Text
                  style={{ paddingLeft: 10, color: warning, marginBottom: 10 }}
                >
                  {inputProps.error}
                </Text>
              )}
            </>
          )}
          {buttons.length > 2 ? (
            <View>
              {buttons.map((button, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={button.onPress}
                  style={styles.buttonContainer}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      { color: button.isCancel ? warning : primary },
                    ]}
                  >
                    {button.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <View style={styles.twoButtonContainer}>
              {buttons.map((button, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={button.onPress}
                  style={styles.twoButton}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      { color: button.isCancel ? warning : primary },
                    ]}
                  >
                    {button.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

export default Alert;
