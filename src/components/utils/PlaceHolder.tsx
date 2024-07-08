type PlaceHolderProprs = {
  children: React.ReactNode;
}
const PlaceHolder: React.FC<PlaceHolderProprs> = ({ children }) => {
  return (
    <div className="w-full h-full grid place-items-center text-2xl text-black">
      {children}
    </div>
  )
}

export default PlaceHolder
