import { Formik } from "formik";
import { type ReactElement } from "react";
import { LuLoaderCircle, LuShieldCheck } from "react-icons/lu";
import * as Yup from "yup"
import TextInput from "@/components/input/TextInput";
import type { IDictionaries } from "@/types/dictionaries";

interface IVerifyByIdFormProps {
  handleVerify: () => Promise<void>
}

const VerifyByIdForm = ({ props,t  }: { props: IVerifyByIdFormProps, t: IDictionaries }): ReactElement => {  
  const { handleVerify } = props

  const initialValues: { id: string } = {
    id: ''
  }

  const verifyByIdValidationSchema = Yup.object({
    id: Yup.string()
      .required(t.verification.productVerification.productId.error.required)
  });
    
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={verifyByIdValidationSchema}
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
                <TextInput 
                  props={{
                    label: t.verification.productVerification.productId.label,
                    id: 'id',
                    fieldName: 'id',
                    placeholder: t.verification.productVerification.productId.placeholder,
                    value: values.id,
                    errors: errors.id,
                    touched: touched.id,
                    labelClassname: 'text-sm font-medium mb-1',
                    inputClassname: '!bg-kraflab-snow',
                    withLabel: true,
                    setFieldValue,
                    handleChange,
                  }}
                />
                <p className="text-sm text-gray-500 mt-2 pl-1">{t.verification.productVerification.productId.note}</p>
              </div>
              <div className="w-full mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || !values.id}
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

export default VerifyByIdForm