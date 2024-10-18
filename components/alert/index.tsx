import React from "react"; 
import { AlertCircle } from "lucide-react"; 
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; 

type Props = {
  title: string;
  description: string;
  variant?: "default" | "success" | "warning" | "danger"; 
};

const AlertComp: React.FC<Props> = ({ title, description, variant = "default" }) => { 
  const variantStyles = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-200 text-green-800",
    warning: "bg-yellow-200 text-yellow-800",
    danger: "bg-red-500 text-white",
  };

  return ( 
    <div  style={{ position: 'fixed', width:"20%", top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}>
      <Alert variant={"default"} className={variantStyles[variant]}> 
        <AlertCircle className="h-4 w-4" /> 
        <AlertTitle className="font-bold">{title}</AlertTitle> 
        <AlertDescription className="font-semibold"> 
          {description}
        </AlertDescription> 
      </Alert> 
    </div>
  ); 
}; 

export default AlertComp;