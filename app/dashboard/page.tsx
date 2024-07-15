import Link from "next/link"

export default function Dashboard (){
    return(<> <h1>Dashboard page</h1>
        <Link href={"/Settings"}>Settings</Link>
          <Link href={"/users"}>Users</Link>
          <Link href={"/About"}>About</Link></>
          
       
    )
}