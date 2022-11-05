import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

interface Props extends IButtonProps {
    title: string;
    type?: 'PRIMARY' | 'SECONDARY';
}

export function Button({ title, ...rest }: Props) {
    return (
        <ButtonNativeBase
            w='full'
            h={14}
            {...rest}
        >
            <Text>
                {title}
            </Text>
        </ButtonNativeBase>
    )
}