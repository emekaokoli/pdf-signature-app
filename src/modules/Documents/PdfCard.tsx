import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Modal } from '@/modules/modals/Modal';
import { useState } from 'react';

type CardProps = {
  title: string;
  onClick:() => void;
  toggleModal: () => void;
  documentId:string;
};

export function PdfCard({ title, onClick, toggleModal, documentId }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <Card onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className=' cursor-pointer' onClick={toggleModal}>{isHovered ? <Modal documentId={documentId} /> : ''}

      </CardContent>
    </Card>
  )
}

 