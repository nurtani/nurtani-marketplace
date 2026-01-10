import Image from 'next/image';
import type { ReactElement, ReactNode} from 'react';
import React, { useState } from 'react';
import { FaAsterisk } from 'react-icons/fa6';

interface IFileInputProps {
  label: string
  id: string
  value: File | null;
  errors: string | undefined
  previewUrl: string | undefined | null;
  labelClassname?: string,
  divClassname?: string,
  requiredTag?: boolean
  withLabel?: boolean
  setPreviewUrl: (fileUrl: string | undefined) => void;
  setFieldValue: (field: string, value: File | null) => void
}

const FileInput = ({ props, children }: { props: IFileInputProps, children: ReactNode }): ReactElement => {
  const {
    label,
    id,
    value,
    previewUrl,
    errors,
    labelClassname,
    divClassname,
    requiredTag,
    withLabel,
    setPreviewUrl,
    setFieldValue,
  } = props

  const [errorMessage, setErrorMessage] = useState<null | string>(null)

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>): void => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>): void => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files);
    }
  };

  const handleFileChange = (files: FileList | null): void => {
    setErrorMessage(null)
    const regexImageOnly = /^.*\.(jpg|jpeg|png)$/i;

    if (files && files[0]) {
      const file = files[0];
      const fileName = file.name;
      const fileSizeInMB = file.size / (1024 * 1024)
      const regex = regexImageOnly

      if (regex.test(fileName)) {
        if (fileSizeInMB > 5) {
          setPreviewUrl('')
          setErrorMessage("Maximum size is 5 MB")
          console.error("Maximum size is 5 MB")
          return;
        }
        
        setFieldValue(id, file);
  
        const reader = new FileReader();
        reader.onloadend = (): void => {
          const resultUrl = reader.result as string
          setPreviewUrl(resultUrl);
        };
  
        reader.readAsDataURL(file);
      } else {
        setPreviewUrl('')
        setErrorMessage(`Invalid file type. Only .jpg, .jpeg, and .png are allowed.`)
        console.error(`Invalid file type. Only .jpg, .jpeg, and .png are allowed.`);
        return;
      }
    } else {
      setPreviewUrl('')
    }
  };

  return (
    <div className={`flex flex-col gap-y-1.5 ${divClassname}`}>
      {withLabel && <label 
        htmlFor={id}
        className={`text-kraflab-charcoal tracking-wide pl-1 text-sm font-medium flex items-center gap-x-1 cursor-pointer ${labelClassname}`}
      >
        {label} {requiredTag ? <FaAsterisk className="text-red-500 w-[7px] h-[7px] mb-auto mt-[3px]" /> : null}
      </label>}
      <div className={`relative border-2 border-dashed rounded-2xl text-center transition cursor-pointer bg-gray-50 hover:bg-white ${errorMessage ? 'border-red-500' : 'border-kraflab-light-gray'}`}>
        <div className={`w-full h-fit z-10 transition-all duration-500 p-2`}>
          <label 
            htmlFor={id}
            className={`flex flex-col w-full h-full cursor-pointer transition duration-500 ${!previewUrl ? 'opacity-70 hover:opacity-40' : 'bg-white/50'}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {
              value && 
              previewUrl && 
              previewUrl !== '' ?
                <div className="w-full h-full rounded-[0.75rem] flex items-center justify-center">
                  <div className="h-48">
                    <Image
                      src={`${previewUrl}`}
                      crossOrigin=""
                      alt="Preview"
                      width={80}
                      height={80}
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                </div> : <div className="flex flex-col justify-center gap-y-2 h-48">
                  {children}
                  {(errorMessage || errors) && <span className="mx-auto max-w-[80%] text-red-500 px-4 text-center font-medium py-1 text-sm">{errorMessage ?? errors}</span>}
                </div>
            }
          </label>
        </div>
        <input
          id={id}
          type="file"
          accept={'image/jpeg, image/png'}
          onChange={(e) => { handleFileChange(e.target.files) }}
          placeholder={value ? value?.name : ''}
          multiple={false}
          className="hidden"
        />      
      </div>
    </div>
  );
};

export default FileInput;
