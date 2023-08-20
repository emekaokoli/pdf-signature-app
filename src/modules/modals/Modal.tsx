import Loading from '@/components/Loading';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { usefetchWithParams } from '@/hooks/useGetWithParams';
import { SignaturePayload, useSaveSignature } from '@/hooks/useSaveSignature';
import { SignaturePadComponent } from '@/modules/Documents/SignaturePad';
import { DocumentUpload } from '@/modules/interface/user-module';
import handleApiError from '@/utils/handleApiError';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

type ModalProps = {
  documentId: string;
};

export function Modal({ documentId }: ModalProps) {
  const { data, isLoading, isError, error } = usefetchWithParams(documentId);
  const { SaveSignature } = useSaveSignature()
  const errorMessage = handleApiError(error);
  const { documentUploads } = data?.data?.data ?? [];

  const [signatureDataUrls, setSignatureDataUrls] = useState<string>('');
  const [signaturePosition, setSignaturePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleSignatureSave = (dataUrl: string) => {
    // save to db
    const payload: SignaturePayload = {
      file: dataUrl,
      type: 'Signature',
      category: 'Draw',
      value: 'Emeka',// I dont know what this is expecting
    };
    SaveSignature({ payload })

  };

  const handlePageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const pageOffset = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - pageOffset.left;
    const posY = e.clientY - pageOffset.top;

    setSignaturePosition({ x: posX, y: posY });
  };

  return (
    <Dialog>
      <DialogTrigger>Sign me</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>View and sign document</DialogTitle>
          <DialogDescription>
            <DndProvider backend={HTML5Backend}>
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  {documentUploads.length > 0 ? (
                    documentUploads.map((data: DocumentUpload, index: number) => (
                      <div key={index}>
                        <Document
                          file={data?.file}
                          error={isError ? errorMessage : null}
                          onLoadSuccess={() => {
                            // Handle PDF load success here if needed
                          }}
                        >
                          <Page pageNumber={1} width={400} onClick={handlePageClick} />
                        </Document>
                        <SignaturePadComponent
                          onSignatureSave={handleSignatureSave}
                          setSignatureDataUrls={setSignatureDataUrls}
                        />
                        {signatureDataUrls && (
                          <div
                            style={{
                              position: 'absolute',
                              left: `${signaturePosition.x}px`,
                              top: `${signaturePosition.y}px`,
                            }}
                          >
                            <img src={signatureDataUrls} alt="Saved Signature" />
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div>PDF files not available.</div>
                  )}
                </>
              )}
            </DndProvider>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
