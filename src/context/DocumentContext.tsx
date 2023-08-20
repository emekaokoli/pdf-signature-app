import { ReactChildren } from "@/components/interfaces/component-module";
import { createContext, useState } from "react";

export interface DocsContextValue {
  documentId: string;
  setDocumentId: (data: string) => void;
}

export const DocumentContext = createContext<DocsContextValue>({
  documentId: '',
  setDocumentId: () => { }
});

export const DocumentProvider = ({ children }: ReactChildren) => {
  const [documentId, setDocumentId] = useState<string>('');



  return (
    <DocumentContext.Provider value={{
      documentId, setDocumentId
    }}>
      {children}
    </DocumentContext.Provider>
  );
};