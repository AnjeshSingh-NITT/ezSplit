import { useMutation, useQuery } from "convex/react"
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";

export const useConvexQuery = (query: string, ...args: any[])=>{
    const result = useQuery(query as any, args[0] ?? {}); // pass the first arg as object

    const [data,setData] = useState(undefined);
    const [isLoading,setIsLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(()=>{
        if(result===undefined)
            setIsLoading(true);
        else{
            try{
                setData(result);
                setError(null);
            }catch(err){
                setError(err as unknown);
                if (err instanceof Error) {
                    toast.error(err.message);
                } else {
                    toast.error("An unknown error occurred");
                }
            }finally{
                setIsLoading(false);
            }
    }
    }, [result]);
    return{
        data,
        isLoading,
        error,
    };
};

export const useConvexMutation = (mutation: string)=>{
    const mutationFn = useMutation(mutation as any);

    const [data,setData] = useState(undefined);
    const [isLoading,setIsLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    const mutate = async(...args : any[])=>{
        setIsLoading(true);
        setError(null);
        try{
            const response = await mutationFn(args);
            setData(response);
            return response;
        }catch(err){
            setError(err);
            if (err instanceof Error) {
                toast.error(err.message);
            } else {
                toast.error("An unknown error occurred");
            }
            throw err;
        }finally{
            setIsLoading(false);
        }
    }
};