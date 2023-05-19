export default interface IContext {
    key: string;
    renderSeason: boolean;
    dataTransport: object;
    setKey: (key: string) => void;
    setRenderSeason: (bool: boolean) => void;
    populateInfo: (country: string, flag: string) => void;
}