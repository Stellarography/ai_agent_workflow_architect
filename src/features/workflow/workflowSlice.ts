import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WorkflowState {
  workflows: Workflow[];
  currentWorkflow: Workflow | null;
  versionHistory: WorkflowVersion[];
}

interface Workflow {
  id: string;
  name: string;
  description: string;
  steps: WorkflowStep[];
  createdAt: string;
  updatedAt: string;
}

interface WorkflowStep {
  id: string;
  agentType: string;
  task: string;
  parameters: Record<string, any>;
}

interface WorkflowVersion {
  id: string;
  workflowId: string;
  version: number;
  data: Workflow;
  createdAt: string;
}

const initialState: WorkflowState = {
  workflows: [],
  currentWorkflow: null,
  versionHistory: []
};

const workflowSlice = createSlice({
  name: 'workflow',
  initialState,
  reducers: {
    addWorkflow: (state, action: PayloadAction<Workflow>) => {
      state.workflows.push(action.payload);
    },
    setCurrentWorkflow: (state, action: PayloadAction<string>) => {
      const workflow = state.workflows.find(w => w.id === action.payload);
      state.currentWorkflow = workflow || null;
    },
    updateWorkflow: (state, action: PayloadAction<Workflow>) => {
      const index = state.workflows.findIndex(w => w.id === action.payload.id);
      if (index !== -1) {
        state.workflows[index] = action.payload;
        state.versionHistory.push({
          id: crypto.randomUUID(),
          workflowId: action.payload.id,
          version: state.versionHistory.length + 1,
          data: action.payload,
          createdAt: new Date().toISOString()
        });
      }
    },
    deleteWorkflow: (state, action: PayloadAction<string>) => {
      state.workflows = state.workflows.filter(w => w.id !== action.payload);
    }
  }
});

export const { addWorkflow, setCurrentWorkflow, updateWorkflow, deleteWorkflow } = workflowSlice.actions;
export default workflowSlice.reducer;