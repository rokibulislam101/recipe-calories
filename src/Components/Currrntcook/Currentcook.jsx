const Currentcook = ({ currentcook, preparingTime, counter }) => {
  const { recipe_name, preparing_time, calories } = currentcook;
  return (
    <div>
      <table className="w-full">
        <tbody className="bg-gray-100 w-full h-20">
          <tr className="*:px-3">
            <td>{counter}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time} min</td>
            <td>{calories} cal</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Currentcook;
