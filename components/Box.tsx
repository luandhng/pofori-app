interface BoxModel {
  name: string;
  checkin: boolean;
}

const Box = ({ name, checkin }: BoxModel) => {
  return (
    <div
      className={`flex ${checkin ? `bg-green-500` : `bg-neutral-900`} ${
        checkin ? `text-black` : `text-white`
      }  justify-center items-center border border-neutral-800 font-medium text-7xl text-center`}
    >
      {name}
    </div>
  );
};

export default Box;
