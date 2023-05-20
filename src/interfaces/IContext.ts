export default interface IContext {
    step: string;
    dataTransport: object;
    setStep: (component: string) => void;
    setIsLogout: (bool: boolean) => void;
    populateInfo: (country: string, flag: string) => void;
}