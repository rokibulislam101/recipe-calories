import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Our_Recipes from './Components/Our_Recipes/Our_Recipes';
import Blogs from './Components/Blogs/Blogs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookcarts from './Components/Cookcarts/Cookcarts';
import { useState } from 'react';
import Currentcooking from './Components/Currentcooking/Currentcooking';
import Footer from './Components/Footer/Footer';

function App() {
  const [cookcarts, setCookcarts] = useState([]);
  const [currentCooking, setCurrentCooking] = useState([]);
  const [preparingTime, setPreaparingTime] = useState(0);
  const [calories, setCalories] = useState(0);
  const handleAddToCookcarts = blog => {
    const wantToCookCarts = [...cookcarts, blog];

    const isExist = cookcarts.find(pd => pd.id == blog.id);
    if (isExist) {
      toast.warn('This item already Added');
    } else {
      setCookcarts(wantToCookCarts);
      toast.success('Item Added Successfully');
    }
  };

  const handleAddToCurrentlyCooking = blog => {
    const newCurrentCooking = [...currentCooking, blog];
    setCurrentCooking(newCurrentCooking);
    const remainingCookcarts = cookcarts.filter(cookcart => cookcart !== blog);
    setCookcarts(remainingCookcarts);
  };

  const handleAddToTotalPreparingTime = time => {
    console.log('currently Cooking', time);
    const newpreparingTime = preparingTime + time;
    setPreaparingTime(newpreparingTime);
  };
  const handleAddToTotalCalories = cal => {
    console.log('currently Cooking', cal);
    const newCalories = calories + cal;
    setCalories(newCalories);
  };

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Our_Recipes></Our_Recipes>
      <section className="flex justify-between flex-col md:flex-row mx-20 my-20 gap-10">
        <Blogs handleAddToCookcarts={handleAddToCookcarts}></Blogs>

        <div className="md:w-1/3 border-2 border-gray-400 rounded-3xl shadow-2xl p-4">
          <Cookcarts
            cookcarts={cookcarts}
            handleAddToCurrentlyCooking={handleAddToCurrentlyCooking}
            handleAddToTotalPreparingTime={handleAddToTotalPreparingTime}
            handleAddToTotalCalories={handleAddToTotalCalories}
          ></Cookcarts>
          <Currentcooking
            currentCooking={currentCooking}
            preparingTime={preparingTime}
            calories={calories}
          ></Currentcooking>
        </div>
      </section>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  );
}

export default App;
