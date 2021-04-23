import { shallowEqual } from "@react-dnd/shallowequal";
import { useState } from "react";
import { DragLayerMonitor, useDragLayer } from "react-dnd";

const useOptimizedDragLayer = <CollectedProps>(
  collect: (monitor: DragLayerMonitor) => CollectedProps
): CollectedProps => {
  const collected = useDragLayer(collect);
  const [previousCollected, setPreviousCollected] = useState<CollectedProps>(
    collected
  );
  const [requestID, setRequestID] = useState<number>();
  if (requestID === undefined && !shallowEqual(collected, previousCollected)) {
    setPreviousCollected(collected);
    setRequestID(requestAnimationFrame(() => setRequestID(undefined)));
  }
  return previousCollected;
};
//
export default useOptimizedDragLayer;
