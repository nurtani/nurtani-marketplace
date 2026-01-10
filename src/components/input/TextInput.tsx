import type { ChangeEvent, ReactElement } from "react"
import { FaAsterisk } from "react-icons/fa6"

interface ITextInputProps {
  label: string
  id: string
  fieldName: string
  placeholder: string
  value: string | number
  errors: string | undefined
  touched: boolean | undefined
  isNumber?: boolean
  disabled?: boolean
  unit?: string,
  labelClassname?: string,
  divClassname?: string,
  inputClassname?: string,
  requiredTag?: boolean
  withLabel?: boolean
  setFieldValue: (field: string, value: string) => void
  handleChange: {
    (e: React.ChangeEvent<unknown>): void;
    <T = string | ChangeEvent<unknown>>(field: T): T extends React.ChangeEvent<unknown> ? void : (e: string | React.ChangeEvent<unknown>) => void;
  }
}

const TextInput = ({ props }: { props: ITextInputProps }): ReactElement => {
  const {
    label,
    id,
    fieldName,
    placeholder,
    value,
    errors,
    touched,
    isNumber,
    disabled,
    unit,
    labelClassname,
    divClassname,
    inputClassname,
    requiredTag,
    withLabel,
    setFieldValue,
    handleChange
  } = props

  return (
    <div className={`flex flex-col gap-y-1 ${divClassname}`}>
      {withLabel && <label 
        htmlFor={id}
        className={`text-kraflab-charcoal tracking-wide pl-1 text-sm font-medium flex items-center gap-x-1 cursor-pointer ${labelClassname}`}
      >
        {label} {requiredTag ? <FaAsterisk className="text-red-500 w-[7px] h-[7px] mb-auto mt-[3px]" /> : null}
      </label>}
      {
        unit
          ? <div className="w-full relative">
            <input 
              type={isNumber ? "number" : "text"} 
              name={id} 
              id={id} 
              disabled={disabled}
              placeholder={placeholder}
              value={value}
              onChange={isNumber 
                ? (e): void => { setFieldValue(fieldName, e.target.value.replace(/^0+(?=\d)/, "")) }
                : handleChange(fieldName)
              }
              className={`border border-kraflab-mist h-11 rounded-xl px-3 py-2 focus:outline-none text-sm text-kraflab-foreground disabled:bg-gray-200 disabled:text-gray-500 w-full pr-16 ${inputClassname}`}
            />
            <span className="absolute right-3 text-gray-500 text-sm h-full flex top-0">
              <span className="my-auto">{unit}</span>z
            </span>
          </div>
          : <input 
            type={isNumber ? "number" : "text"} 
            name={id} 
            id={id} 
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            onChange={isNumber 
              ? (e): void => { setFieldValue(fieldName, e.target.value.replace(/^0+(?=\d)/, "")) }
              : handleChange(fieldName)
            }
            className={`border border-kraflab-mist h-11 rounded-xl px-3 py-2 focus:outline-none text-sm text-kraflab-foreground disabled:bg-gray-200 disabled:text-gray-500 w-full ${inputClassname}`}
          />
      }
      {errors && touched && <span className="text-xs text-red-500 pl-1 pt-1">{errors}</span>}
    </div>
  )
}

export default TextInput