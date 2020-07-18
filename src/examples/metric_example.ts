import metric from "../decorators/metric";

class MetricExample {
  /**
   *Using the metric decorator with all default values.
   */
  @metric()
  methodExecutionTimeCalculator() {
    console.log("Starting Execution here");
    console.log("Finished execution");
  }

  /**
   * Customizing the values of the decorator.
   */
  @metric("methodReturnValueLogging", "custom_unit", "result")
  methodReturnValueLog() {
    console.log("Return value logging");
    return 100;
  }
}

const metricExample = new MetricExample();
metricExample.methodExecutionTimeCalculator();
metricExample.methodReturnValueLog();
