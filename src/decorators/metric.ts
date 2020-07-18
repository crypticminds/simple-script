/**
 * The metric decorator is used to calculate time taken to execute a
 * certain function.
 *
 * @param name The name of the metric, this should uniquely identify what you are measuring.
 * @param unit The unit of measurement like miliseconds, seconds etc.
 * @param type You can pass either "execution_time" or "result" for type parameter.If you want to log the
 * output of the decorated method as the metric use "result" and if you wish to log the time taken to execute
 * the method use "execution_time"
 * @param log An optional parameter that can be used to handle the result of the metric.You can use this to send
 * the data to the backend.By default the computed result is logged in the console.
 *
 */
const metric: any = (
  name: string = "default",
  unit: string = "milliseconds",
  type: "execution_time" | "result" = "execution_time",
  log: (name: string, unit: string, value: any) => void = (
    name,
    unit,
    value
  ) => {
    console.log(name, value, unit);
  }
) => (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
  if (!descriptor) {
    console.error(
      `Error in ${target} for property ${propertyKey}.The decorator is not configured peoperly.Please check the documentation for details.ERROR_CODE : 011`
    );
    return;
  }

  if (name === "default") {
    name = propertyKey;
  }

  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any) {
    if (type == "execution_time") {
      const startTime = new Date().getTime();
      originalMethod.apply(this, args);
      const executionTime = new Date().getTime() - startTime;
      log(name, unit, executionTime);
    } else {
      const result = originalMethod.apply(this, args);
      log(name, unit, result);
    }
  };

  return descriptor;
};

export default metric;
