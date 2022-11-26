import { HTMLProps, useEffect, useRef } from "react";

export default function IndeterminateCheckbox({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        ref={ref}
        className={
          className +
          "w-4 h-4 text-indigo-600 bg-gray-100 rounded border-gray-300 focus:ring-indigo-500 focus:ring-2 cursor-pointer"
        }
        {...rest}
      />
      <label className="sr-only">checkbox</label>
    </div>
  );
}
