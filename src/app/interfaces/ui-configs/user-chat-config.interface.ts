export interface UserChatConfig{
    fullName: string;
    text: string;
    time: string;
    profile: string;
    uid?: string;
    Onclick?: () => any;
    isActive: boolean;
}