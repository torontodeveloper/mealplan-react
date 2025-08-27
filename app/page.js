'use client'
import styles from "./page.module.css";
import Header from "./components/header";
import { useState } from "react";
import useGetAllPlans from "./components/useGetAllPlans";
import DisplayPlan from "./components/display-plan";

export default function Home() {
  const [isFetch,setIsFetch] = useState(false)
  const {loading,allPlans} = useGetAllPlans()
  const planTitles = []
  allPlans.forEach(function(plan){
    planTitles.push(plan.title)
  })
  function handleClick(){
    setIsFetch(true)
  }
  function getRandomInt(max){
    let randomNumber = Math.round(Math.random()*max)
    console.log('random Number ***',randomNumber)
    return randomNumber
  }
  return (
    <>
    <Header />
    <main>
      <h2>Our Meal plans</h2>
    </main>
    {!loading && <div>Loading...</div>}
    <ul>
      <section id='core-concepts'>
        <ul>
      {
         (
          allPlans.map((plan,index)=>(
            <DisplayPlan {...plan} key={index}/>
          ))
        )
      }
      </ul>
      </section>
    </ul>
    </>
  );
}
