import { Pressable, Text } from 'react-native';

interface MainButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  className?: string;
}

export const MainButton = ({ onPress, children, className }: MainButtonProps) => (
  <Pressable
    className="bg-primary-dark rounded-full px-4 py-2"
    onPress={onPress}
  >
    <Text className={`text-text-dark font-poppins font-bold ${className || ''}`}>
      {children}
    </Text>
  </Pressable>
);

export default MainButton;