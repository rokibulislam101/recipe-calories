import Cookcart from '../Cookcart/Cookcart';

const Cookcarts = ({
  cookcarts,
  handleAddToCurrentlyCooking,
  handleAddToTotalPreparingTime,
  handleAddToTotalCalories,
}) => {
  return (
    <div className=" ">
      <table className="w-full text-center ">
        <thead>
          <tr>
            <th colSpan={5} className="text-2xl border-b-2 h-20">
              Want to cook:{cookcarts.length}
            </th>
          </tr>
          <tr className="h-16">
            <th>Sl.No:</th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            <th> Status</th>
          </tr>
        </thead>
      </table>
      <div>
        {cookcarts.map((cookcart, idx) => (
          <Cookcart
            key={idx}
            counter={idx + 1}
            cookcart={cookcart}
            handleAddToCurrentlyCooking={handleAddToCurrentlyCooking}
            handleAddToTotalPreparingTime={handleAddToTotalPreparingTime}
            handleAddToTotalCalories={handleAddToTotalCalories}
          ></Cookcart>
        ))}
      </div>
    </div>
  );
};

export default Cookcarts;
