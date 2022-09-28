export interface Workflow {
  name: string;
  lastVersion: number;
  path: string;
  status: string;
  versionToDeploy: null;
  workflowGroup: string;
}
