import { fetchStats } from "../components/Stats/Stats.api";
import { fetchSummary } from "../components/Summary/Summary.api";

export const fetchData = () => {
  const statsPromise = fetchStats();
  const summaryPromise = fetchSummary();
  return {
    stats: createResource(statsPromise),
    summary: createResource(summaryPromise)
  };
};

export const createResource = promise => {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
};
