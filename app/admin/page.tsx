import Person from "@/components/Person";

const Admin = () => {
  return (
    <div className="py-7 px-10">
      <div className="flex mb-24 justify-between font-semibold text-4xl">
        <div>CURRENT STAFF</div>
        <div>+</div>
      </div>

      <Person name={"CUONG"} />
    </div>
  );
};

export default Admin;
