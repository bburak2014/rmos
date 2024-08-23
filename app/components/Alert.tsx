 // components/Alert.tsx
 
type Props = {
    message: string;
    confirmMessage: string;
    onConfirm: () => void;
    onClose: () => void;
}

const Alert = (props: Props) => {
    const { message, confirmMessage, onConfirm, onClose } = props
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black bg-opacity-75">
    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center max-w-md">
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6 text-yellow-500 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
        <h2 className="text-xl font-bold">{confirmMessage} </h2>
      </div>
      <p className="text-center mb-4">{message}
      </p>
      <div className="flex justify-center mt-4 gap-2 ">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded  mr-2 hover:bg-opacity-75"
          onClick={onClose}
        >
          İptal
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded hover:bg-opacity-75"
          onClick={onConfirm}
        >
         {confirmMessage}
        </button>
      </div>
    </div>
  </div>
  )
}

export default Alert

