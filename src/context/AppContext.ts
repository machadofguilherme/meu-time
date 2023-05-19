import { createContext } from "react";
import IContext from "../interfaces/IContext";

const AppContext = createContext<IContext>({ key: '', setKey: (key: string) => key });

export default AppContext;