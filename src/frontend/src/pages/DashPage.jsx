import Table from "@/components/Mycomponent/table";
import MyCard from "@/components/Mycomponent/MyCard";

const DashboardPage=()=>{
    return(
       <div className="mx-auto max-w-[85%] mt-12">
             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
                  <MyCard name="Notes" counts="450"/>
                  <MyCard name="Paraphrase" counts="50"/>
                  <MyCard name="Grammer check" counts="4500"/>
                  <MyCard name="Text simplify" counts="4"/>
             </div>

           <Table/>
       </div>
    )
}

export default DashboardPage