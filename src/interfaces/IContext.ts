export default interface IContext {
    key: string;
    step: string;
    dataTransport: object;
    setKey: (key: string) => void;
    setStep: (component: string) => void;
    populateInfo: (country: string, flag: string) => void;
}