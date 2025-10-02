const SidePanel = ({children,width = 25}) =>{
      return (
       <div className={`w-[${width}%]  h-[calc(100vh-100px)] border-r border-borderColor`}>
        {children}
       </div>
      )
}
export default SidePanel;