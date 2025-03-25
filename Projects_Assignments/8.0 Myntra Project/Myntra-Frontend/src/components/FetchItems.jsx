import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemsSlices";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemActions.addInitialItems(items));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      <div>
        FetchDone:: {fetchStatus.fetchDone}
        Currently Feching:: {fetchStatus.currentlyFetching}
      </div>
    </>
  );
};

export default FetchItems;
