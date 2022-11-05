import { Fontisto } from "@expo/vector-icons";
import { Center, Icon } from "native-base";
import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";

export function SignIn() {
    return (

        <Center flex={1} bgColor="gray.900" >
            < Logo width={212} height={40} />
            <Button
                leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
                title="ENTRAR COM GOOGLE"
            />
        </Center>

    )
}