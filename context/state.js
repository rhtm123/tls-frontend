
import { createContext, useContext } from 'react';

const AppContext = createContext();

import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function AppWrapper({ children }) {
    const {data:programs} = useSWR(process.env.API_URL+'course/programs/', fetcher);
    const {data:events, error1} = useSWR(process.env.API_URL+"event/events/", fetcher);
    const {data:courses, error} = useSWR(process.env.API_URL+"course/course_list/", fetcher);
    let sharedState = {
        programs : programs,
        events: events,
        courses:courses,
    }
      
  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}