export interface Counter {
  name: string;
  value: number;
}

export const counterChangeDetectionAvg = {name: "Avg", value: 0, total: 0};
export const counterChangeDetectionCount = {name: "Count", value: 0};

let profilerComponent;

export function registerProfilerComponent(component) {
  profilerComponent = component;
}

export function getProfilerComponent() {
  return profilerComponent;
}

export const counters = [
  counterChangeDetectionAvg,
  counterChangeDetectionCount,
];
