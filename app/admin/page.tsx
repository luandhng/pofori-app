import Staff from "@/components/staff/Staff";
import Week from "@/components/staff/Week";

const Admin = () => {
  return (
    <div className="max-w-5xl font-medium py-1 space-y-1 m-auto h-screen">
      {/* Date */}
      <div className="grid grid-cols-6 gap-1">
        <div className="bg-[#855ae1] col-span-5 text-center py-3 text-black text-xl rounded-xl">
          08/27/23 - 09/10/23
        </div>
        <div className="flex text-[#855ae1] duration-500 cursor-pointer hover:bg-[#855ae1] hover:text-black justify-center items-center bg-[#1d1d1d] rounded-xl">
          ADD STAFF
        </div>
      </div>

      {/* Staffs */}
      <div className="grid grid-cols-6 gap-1">
        <Staff name={"BINH"} />
        <Staff name={"CUONG"} />
        <Staff name={"DUNG"} />
        <Staff name={"MIGUE"} />
        <Staff name={"XUAN"} />
        <Staff name={"LUAN"} />
      </div>

      {/* Main Points */}
      <div className="grid grid-cols-2 gap-1">
        <div className="flex flex-col justify-between bg-[#8f9b9d] text-black rounded-xl p-5 text-5xl">
          <div>Migue</div>
          <div className="">80H</div>
        </div>
        <div className="flex flex-col gap-1 text-3xl text-black">
          <div className="flex items-center flex-1 rounded-xl p-6 bg-[#5dbe74]">
            $960
          </div>
          <div className="flex justify-between items-center flex-1 rounded-xl p-6 bg-[#e1d35a]">
            <div>$460</div>
            <div>CHECK</div>
          </div>
          <div className="flex justify-between items-center flex-1 rounded-xl p-6 bg-[#e1d35a]">
            <div>$500</div>
            <div>CASH</div>
          </div>
        </div>
      </div>

      {/* Weeks */}
      <div className="grid gap-1 grid-cols-3">
        <Week date={"Mon"} />
        <Week date={"Tue"} />
        <Week date={"Wed"} />
        <Week date={"Thu"} />
        <Week date={"Fri"} />
        <Week date={"Sat"} />

        <Week date={"MON"} />
        <Week date={"TUE"} />
        <Week date={"WED"} />
        <Week date={"THU"} />
        <Week date={"FRI"} />
        <Week date={"SAT"} />
      </div>
    </div>
  );
};

export default Admin;
