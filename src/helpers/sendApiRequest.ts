type Method='GET' | 'POST' | 'PUT' | 'DELETE'

function returnCorrectRequest(
  method:Method,data:unknown
):RequestInit{
if (method === 'GET'){
  return {
    method:method,
    headers:{
      'Content-Type':'application/json',
    }
  }
}
  return {
    method:method,
    body:JSON.stringify(data),
    headers:{
      'Content-Type':'application/json',
    }
  }
}

export async function sendApiRequest<T>(url:string,method:Method ,data:unknown={}):Promise<T>{
const res=await fetch(url,returnCorrectRequest(method,data))

  if (!res.ok){
    const message=`An error has occurred:${res.status}`
    throw new Error(message)
  }
  return await res.json() as Promise<T>
}