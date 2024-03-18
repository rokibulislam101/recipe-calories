import Currentcook from '../Currrntcook/Currentcook';

const Currentcooking = ({ currentCooking, preparingTime, calories }) => {
  return (
    <div>
      <table className="w-full text-center ">
        <thead>
          <tr>
            <th colSpan={5} className="text-2xl border-b-2 h-20">
              Currently Cooking:{currentCooking.length}
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
      {currentCooking.map((currentcook, idx) => (
        <Currentcook
          key={idx}
          counter={idx + 1}
          currentcook={currentcook}
          preparingTime={preparingTime}
          calories={calories}
        ></Currentcook>
      ))}

      <div>
        {/* <p>Total Time:{preparingTime}</p>
        <p>Total calories:{calories}</p> */}
        <table className="w-full table">
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Total Time:{preparingTime}</td>
              <td>Total calories:{calories}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Currentcooking;
