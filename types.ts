import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RegistrationData = {
    contact: string,
    isEmail: boolean,
    name: string,
    password: string,
    agreeTerms: boolean,
    avatar: string | null

}

export type User = {
    id: number,
    name: string,
    avatar: string,
    bio: string
}

export type RootStackParamList = {
    Phase1: undefined,
    Phase2: { contact : string, isEmail: boolean},
    Phase3: Omit<RegistrationData , 'avatar'>,
    Phase4: Omit<RegistrationData, 'avatar'> & {avatar: string},
};

export type Phase1Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Phase1'>;
  };

  export type Phase2Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Phase2'>;
    route: RouteProp<RootStackParamList, 'Phase2'>;
  };
  
  export type Phase3Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Phase3'>;
    route: RouteProp<RootStackParamList, 'Phase3'>;
  };
  
  export type Phase4Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Phase4'>;
    route: RouteProp<RootStackParamList, 'Phase4'>;
  };
  