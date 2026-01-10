import { Formik } from "formik";
import { type ReactElement, useState } from "react";
import { LuCamera, LuLoaderCircle, LuShieldCheck } from "react-icons/lu";
import * as Yup from "yup"
import FileInput from "@/components/input/FileInput";
import type { IDictionaries } from "@/types/dictionaries";

interface IVerifyByImageFormProps {
  handleVerify: () => Promise<void>
}

const VerifyByImageForm = ({ props, t }: { props: IVerifyByImageFormProps, t: IDictionaries }): ReactElement => {  
  const { handleVerify } = props
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  
  const initialValues: { image: File | null } = {
    image: null
  }

  const verifyByImageValidationSchema = Yup.object({
    image: Yup.mixed()
      .required(t.verification.productVerification.productImage.error.required)
  });
    
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={verifyByImageValidationSchema}
        validateOnBlur={false}
        validateOnChange={true}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleVerify()
            setSubmitting(false)
          }, 1500)
        }}
      >
        {({
          errors,
          values,
          touched,
          isSubmitting,
          setFieldValue,
          handleChange,
          handleSubmit,
        }) => 
          (
            <form 
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <FileInput
                  props={{
                    label: "Image",
                    id: "image",
                    value: values.image,
                    errors: errors.image,
                    previewUrl: previewUrl,
                    labelClassname: "text-sm font-medium mb-1",
                    setPreviewUrl,
                    setFieldValue
                  }}
                >
                  <div className="text-center transition cursor-pointer flex flex-col justify-center gap-y-2">
                    <LuCamera className="mx-auto w-10 h-10" />
                    <p className="flex flex-col gap-y-1">
                      <span><span className="text-kraflab-vivid-blue font-medium">{t.verification.productVerification.productImage.placeholder.click}</span> {t.verification.productVerification.productImage.placeholder.dragAndDrop}</span>
                      <span className="block text-xs text-gray-500 mt-1">{t.verification.productVerification.productImage.note}</span>
                    </p>
                  </div>
                </FileInput>
              </div>
              <div className="w-full mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || !values.image}
                  className={`bg-blue-600 hover:bg-blue-700 text-white rounded-xl w-full tracking-wider py-2.5 px-4 disabled:cursor-not-allowed flex disabled:bg-opacity-50 cursor-pointer`}
                >     
                  {isSubmitting 
                    ? <LuLoaderCircle className={`text-white m-auto aspect-square font-bold animate-spin w-5 h-5`} /> 
                    : <span className="m-auto flex gap-x-2 h-fit items-center">
                      <span className="flex gap-x-2 items-center">
                        <LuShieldCheck className="w-5 h-5" />
                        <span className="text-sm">{t.verification.button.submit}</span>
                      </span>
                    </span>}
                </button>
              </div>
            </form>
          )}
      </Formik>
    </div>
  )
}

export default VerifyByImageForm