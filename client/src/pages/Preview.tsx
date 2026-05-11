import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Loader2Icon } from "lucide-react";
import ProjectPreview from "../components/ProjectPreview";
import type { Project, Version } from "../types";
import api from "@/configs/axios";
import { authClient } from "@/lib/auth-client";
import {toast} from "sonner"

const Preview = () => {

   const {data:session,isPending} = authClient.useSession()
  const {projectId,versionId} = useParams()
  const [code,setCode] = useState("");
  const [loading,setLoading] = useState(true);
  const fetchCode = async ()=>{
    
    try {
      const {data} = await api.get(`/api/project/preview/${projectId}`);
      setCode(data.project.current_code)
      if(versionId){
        data.project.versions.forEach((version:Version)=>{
          if(version.id === versionId){
            setCode(version.code)
          }
        })
      }
      setLoading(false)
    } catch (error:any) {
      console.log(error);
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  useEffect(()=>{
    if(session?.user && !isPending){
          fetchCode()
      }
    },[session?.user])
  if(loading){
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2Icon className="size-7 animate-spin text-indigo-200" />
      </div>
    )
  }
  return (
    <div className="h-screen">
      {code && <ProjectPreview project={{current_code:code} as Project} isGenerating={false} showEditorPanel={false}/>}
    </div>
  )
}

export default Preview