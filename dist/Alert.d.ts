import React from "react";
import { TextInputProps } from "react-native";
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
declare const Alert: React.FC<AlertProps>;
export default Alert;
