import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { DndProvider, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SignatureCanvas from 'react-signature-canvas';

type Props = {
  onSignatureSave: (dataUrl: string) => void;
  setSignatureDataUrls: (signatureDataUrls: string) => void;
}

export function SignaturePadComponent({ onSignatureSave, setSignatureDataUrls }: Props) {

  const signatureRef = useRef<SignatureCanvas | null>(null);

  const [{ isOver }, dropRef] = useDrop({
    accept: 'SIGNATURE_PAD',
    drop: () => {
      // Calculate the position where the signature was dropped
      // and save the signature data to state
      const dataUrl = signatureRef.current?.toDataURL();
      setSignatureDataUrls(dataUrl as string);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleSignatureSave = () => {
    if (signatureRef.current) {
      const dataUrl = signatureRef.current.toDataURL();
      onSignatureSave(dataUrl); // Call the onSignatureSave function with dataUrl
      setSignatureDataUrls(dataUrl); // Update the signatureDataUrls state
    }
  };


  return (
    <DndProvider backend={HTML5Backend}>
      <div className={`signature-container border-2 border-blue-600 border-dotted ${isOver ? 'drag-over' : ''}`} ref={dropRef}>
        <SignatureCanvas ref={signatureRef} canvasProps={{ width: 300, height: 150 }} />
        <Button variant="secondary" onClick={handleSignatureSave}>
          Save Signature
        </Button>
      </div>
    </DndProvider>
  );
}