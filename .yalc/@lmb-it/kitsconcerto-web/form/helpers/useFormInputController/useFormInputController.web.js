import { useState, useRef, useEffect } from 'react';

function useFormInputController({
  value,
  defaultValue,
  onChange
}) {
  const isControlled = value !== void 0;
  const [internalValue, setInternalValue] = useState(
    defaultValue
  );
  const latestValueRef = useRef(value);
  latestValueRef.current = value;
  useEffect(() => {
    if (isControlled) {
      setInternalValue(value);
    }
  }, [isControlled, value]);
  const emitChange = (next) => {
    if (!isControlled) {
      setInternalValue(next);
    }
    onChange?.({
      target: { value: next }
    });
  };
  return {
    value: isControlled ? value : internalValue,
    emitChange,
    onWorkletChange: null,
    currentReanimatedValue: null,
    isControlled
  };
}

export { useFormInputController };
//# sourceMappingURL=useFormInputController.web.js.map
