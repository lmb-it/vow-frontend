'use strict';

var React = require('react');

function useFormInputController({
  value,
  defaultValue,
  onChange
}) {
  const isControlled = value !== void 0;
  const [internalValue, setInternalValue] = React.useState(
    defaultValue
  );
  const latestValueRef = React.useRef(value);
  latestValueRef.current = value;
  React.useEffect(() => {
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

exports.useFormInputController = useFormInputController;
//# sourceMappingURL=useFormInputController.web.cjs.map
