import { AutomationService } from "./AutomationService";

const automation = new AutomationService();

export function useAutomation() {
  const run = (task: string) => automation.run(task);
  return { run };
}
