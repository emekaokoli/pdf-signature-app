import Loading from "@/components/Loading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import useAuth from "@/hooks/useAuth";
import { useGetAllDocuments } from "@/hooks/useFetchAllDocuments";
import { useGetUserProfile } from "@/hooks/useGetUserProfile";
import { PdfCard } from "@/modules/Documents/PdfCard";
import DetailsTab from "@/modules/Tabs/Details";
import { Location } from "@/modules/Tabs/Location";
import { StateComponent } from "@/modules/Tabs/State";
import { FileUpload } from "@/modules/fileUpload/UploadFiles";
import { PdfData } from "@/modules/interface/user-module";
import handleApiError from "@/utils/handleApiError";
import { LogOut } from "lucide-react";
import { useState } from "react";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Link } from "react-router-dom";


export function Home() {
  const { toast } = useToast();
  const { logOut } = useAuth()
  const { data, isLoading, isError, error } = useGetUserProfile()
  const [selectedDocumentId, setSelectedDocumentId] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const { pdfFiles, isLoading: loadingPDFs } = useGetAllDocuments()
  const pdfdata = pdfFiles ?? [];


  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (isError) {
    const errors = handleApiError(error)

    toast({
      variant: 'destructive',
      title: 'An Error has occured',
      description: errors,
    })
    return null;
  }

  const handlePdfCardClick = (documentId: string) => {
    setSelectedDocumentId(documentId);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div className="container w-[60vw] border-slate-100 border-4">
      <div className="py-5 tracking-normal font-sans">
        <div className="flex justify-end items-end">
          <Link to='/auth' onClick={logOut}><LogOut /></Link>
        </div>
        <div className="flex justify-start items-center gap-3">
          <img src={data?.data?.image} className="flex justify-center items-center rounded-full border-2 h-24" height={100} width={100} alt="user photo" />
          <div className="flex flex-col justify-start items-start">
            <div className="flex text-lg">{`${data?.data.first_name} ${data?.data?.last_name}`}</div>
            <div className=" text-lg">{ }</div>
            <div className=" text-lg">{data?.data.email}</div>
            <div className=" text-lg">{data?.data.phone}</div>
            <div className=" text-lg">{data?.data.address}</div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="detail" className="w-auto flex justify-start items-start flex-col">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="detail">Details</TabsTrigger>
          <TabsTrigger value="location">Location</TabsTrigger>
          <TabsTrigger value="state">State</TabsTrigger>
          <TabsTrigger value="docs">Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="detail">
          <DetailsTab data={data!.data} />
        </TabsContent>
        <TabsContent value="location">
          <Location country={data!.data?.country} />
        </TabsContent>
        <TabsContent value="state">
          <StateComponent state={data!.data?.state} />
        </TabsContent>
        <TabsContent value="docs">
          <div className=" w-72"> <FileUpload /></div>
          <hr />
          <h3>Uploaded files</h3>

          <div className="grid grid-cols-2 gap-3">
            {
              loadingPDFs ? <Loading /> : (
                <>
                  {
                    pdfdata?.data?.filter((data: PdfData) => data.title !== undefined && data.completed_file_request !== null)
                      .map((pdf: PdfData) => (
                        <PdfCard
                          key={pdf.id}
                          title={pdf.title}
                          onClick={() => handlePdfCardClick(pdf.id)}
                          toggleModal={toggleModal}
                          documentId={selectedDocumentId}
                        />
                      ))
                  }
                </>
              )
            }
          </div>
        </TabsContent>

      </Tabs>

    </div>
  )
}
