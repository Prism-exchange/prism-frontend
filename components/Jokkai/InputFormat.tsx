function InputFormat(props: { text: string; placeholder?: string }) {
  return (
    <div className=' flex flex-col px-3 py-1 bg-slate-600 rounded-md'>
      <label htmlFor={props.text}>{props.text}</label>
      <input
        type='text'
        name={props.text}
        className=' text-white bg-transparent outline-none'
        placeholder={props.placeholder || '0.00$'}
      />
    </div>
  )
}

export default InputFormat
