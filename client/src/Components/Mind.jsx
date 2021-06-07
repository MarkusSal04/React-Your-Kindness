import { useState, useEffect } from "react";
import { GetQuotes } from "../services/api";


export default function Mind() {

  useEffect(() => {
    const fetchData = async () => {
      const res = await GetQuotes
    }
    fetchData()
  }, [])


  return (
    <div>Motivate Your Mind</div>

  )
}
