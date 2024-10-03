import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TextInputProps,
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
}) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={[styles.alertContainer, { backgroundColor: background }]}>
          <Text style={[styles.alertTitle, { color: text }]}>{title}</Text>
          <Text style={[styles.alertMessage, { color: text }]}>{message}</Text>
          {inputProps && (
            <>
              {inputProps.label && (
                <Text style={[{ paddingLeft: 10 }, { color: secondary }]}>
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
});

export default Alert;
