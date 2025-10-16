const SidePanel = ({children,width = 25}) =>{
      const getWidthClass = () => {
        if (width === 20) return 'md:w-1/5';
        if (width === 25) return 'md:w-1/4';
        if (width === 30) return 'md:w-[30%]';
        if (width === 33) return 'md:w-1/3';
        if (width === 50) return 'md:w-1/2';
        return 'md:w-1/4';
      };

      return (
       <div className={`w-full ${getWidthClass()} h-[calc(100vh-100px)] border-r border-borderColor
         md:flex md:flex-col md:h-[calc(100vh-100px)] md:border-r md:border-borderColor
         flex flex-row h-auto border-r-0 border-b border-borderColor`}>
        {children}
       </div>
      )
}
export default SidePanel;