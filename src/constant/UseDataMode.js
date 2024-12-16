import { useState } from "react";

// Custom hook to manage the global state
const useMainRequests = () => {
  const [data, setdata] = useState(0);

  return {
    data,
    setdata,
  };
};

export default useMainRequests;
