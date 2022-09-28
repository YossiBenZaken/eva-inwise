export interface Search {
  traces: Traces[];
  moreResults: boolean;
  clustersWithException: [];
}
export interface Traces {
  id: string;
  started: {
    dateTime: number;
    utcTimeZone: number;
  };
  duration: number;
  status: string;
  workflowReference: {
    id: string;
    name: string;
    path: string;
    group: string;
  };
  clusterName: string;
  canBeResubmitted: boolean;
  fromAnotherCluster: boolean;
  priority: number;
  customJobId: string;
  workflowVersion: number;
}
