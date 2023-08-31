import Box from "@/components/Box";

const Staff = () => {
  return (
    <div className="grid grid-cols-3 gap-3 p-3 h-screen">
      <Box name={"BINH"} checkin={false} />
      <Box name={"CUONG"} checkin={false} />
      <Box name={"DUNG"} checkin={false} />
      <Box name={"XUAN"} checkin={true} />
      <Box name={"MIGUE"} checkin={false} />
      <Box name={"LUAN"} checkin={false} />
    </div>
  );
};

export default Staff;
