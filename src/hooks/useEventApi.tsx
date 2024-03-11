"use client";
import { useEffect } from "react";
import axios from "axios";
import { EVENT_API } from "@/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addEvents } from "@/store/slices/eventSlice";

const useEventApi = () => {
  const dispatch = useDispatch();
  const events = useSelector((store: any) => store?.event?.events);
  const fetchevents = async () => {
    try {
      const events = await axios.get(EVENT_API);
      dispatch(addEvents(events.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    !events && fetchevents();
  }, []);
};

export default useEventApi;
