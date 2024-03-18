const Cookcart = ({
  cookcart,
  counter,
  handleAddToCurrentlyCooking,
  handleAddToTotalPreparingTime,
  handleAddToTotalCalories,
}) => {
  const { id, recipe_name, preparing_time, calories } = cookcart;

  return (
    <div>
      <table>
        <tbody className=" h-20">
          <tr className="*:px-3 bg-gray-100">
            <td>{counter}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time} min</td>
            <td>{calories} cal</td>
            <td>
              <button
                onClick={() => (
                  handleAddToCurrentlyCooking(cookcart, id),
                  handleAddToTotalPreparingTime(preparing_time),
                  handleAddToTotalCalories(calories)
                )}
                className=" text-xs p-2 bg-green-500 rounded-full"
              >
                Preparring
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cookcart;
