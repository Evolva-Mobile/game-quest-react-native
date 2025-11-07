import React from "react";
import * as Icons from "lucide-react-native";

interface IconProps {
    name: keyof typeof Icons;
    color?: string;
    size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, color = "#000", size = 24 }) => {
    const LucideIcon = Icons[name];
    return <LucideIcon color={color} size={size} />;
};
