import { ReactComponent as FileIcon } from "@/assets/svg/Group-folders.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadPayload, useFileUpload } from '@/hooks/useFileUpload';
import handleApiError from '@/utils/handleApiError';
import React, { useEffect, useState } from 'react';


export function FileUpload() {
  const { upload, isLoading } = useFileUpload()
  const [selectedFiles, setSelectedFiles] = useState<Array<File> | []>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [preview, setPreview] = useState<Array<string>>([])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target?.files;
    if (!files || files.length === 0) {
      setSelectedFiles([]);
      return;
    }

    const filesArray: File[] = [];

    // Reset upload error message
    setUploadError(null);

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = (e) => {
        // Push the base64 data to the filesArray
        filesArray.push(e.target?.result as unknown as File);

        // When all files are processed, update the state
        if (filesArray.length === files.length) {
          setSelectedFiles(filesArray);
        }
      };

      reader.readAsDataURL(files[i]);
    }

    // Check file size and type
    for (const file of files) {
      const maxSizeMB = 5; // Max file size in megabytes
      const allowedTypes = ['application/pdf'];

      if (file.size > maxSizeMB * 1024 * 1024) {
        setUploadError(`File size exceeds ${maxSizeMB} MB.`);
      } else if (!allowedTypes.includes(file.type)) {
        setUploadError('Invalid file type. Only PDF, DOC, and DOCX are allowed.');
      }
    }
  };

  useEffect(() => {
    if (!selectedFiles || selectedFiles.length === 0) {
      setPreview([]);
      return;
    }

    const newPreviews: string[] = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      // Create a Blob object from the base64 string
      const blob = new Blob([selectedFiles[i]], { type: 'application/pdf' });

      // object URL from the Blob object
      newPreviews.push(URL.createObjectURL(blob));
    }

    setPreview(newPreviews);

    // Free memory when the component is unmounted
    return () => {
      newPreviews.forEach((objectUrl) => URL.revokeObjectURL(objectUrl));
    };
  }, [selectedFiles]);


  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      const payload: UploadPayload = {
        files: selectedFiles,
        title: selectedFiles[0].name,
      };

      try {
        upload({ payload });
        setSelectedFiles([]);
      } catch (error: any) {
        const errors = handleApiError(error);
        setUploadError(errors);

        console.log({ errors });
        setSelectedFiles([]);
        throw new Error(errors);
      }
    }
  };


  return (
    <div className="container mx-auto p-8">
      <h2 className="text-md font-semibold mb-4">Select files to upload</h2>
      <div className="flex justify-start items-center gap-5">

        <div className="mt-4 max-w-full relative border border-dashed border-[#CDCED9] my-8 mx-auto mb-[40px] w-full rounded self-stretch p-4">
          <FileIcon className="inset-0 m-4 w-fit object-contain" />

          <Input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            multiple
            className="absolute w-full h-full top-0 opacity-0 cursor-pointer z-10"
          />
          <Label className="text-sm font-semibold text-[#212529]">
            Drop your files here or <span className=" text-blue-500">click here</span> to
            upload
          </Label>
        </div>
        {uploadError && <p className="text-red-500 mt-2">{uploadError}</p>}

        {selectedFiles.length > 0 && !uploadError && (
          <Button
            variant='secondary'
            onClick={handleUpload}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Upload
          </Button>
        )}
      </div>

      {isLoading && <p>uploading...</p>}
      {selectedFiles.length > 0 && !uploadError && (
        <>
          <h4>File Preview</h4>
          {selectedFiles.some(
            (file) =>
              file.type === 'application/pdf'
          ) && (
              <>
                {preview?.map((objectUrl, index) => (
                  <div key={index}>
                    {selectedFiles[index].type === 'application/pdf' && (
                      <iframe
                        title={`File Preview ${index}`}
                        src={objectUrl}
                        width="100%"
                        height="500px"
                      />
                    )}
                  </div>
                ))}
              </>
            )}
        </>
      )}
    </div>
  );
};
