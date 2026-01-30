import { describe, it, expect } from 'vitest';
import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('project.mapper specs', () => {
  describe('mapProjectFromApiToVm', () => {
    it('should return an empty project when project is null', () => {
      const project: any = null;

      const result = mapProjectFromApiToVm(project);

      expect(result).toEqual(viewModel.createEmptyProject());
    });

    it('should return an empty project when project is undefined', () => {
      const project: any = undefined;

      const result = mapProjectFromApiToVm(project);

      expect(result).toEqual(viewModel.createEmptyProject());
    });

    it('should map project from API to VM correctly with empty employees', () => {
      const apiProject: apiModel.Project = {
        id: '1',
        name: 'Test Project',
        externalId: 'EXT-001',
        comments: 'Some comments',
        isActive: true,
        employees: [],
      };

      const result = mapProjectFromApiToVm(apiProject);

      expect(result).toEqual<viewModel.Project>({
        id: '1',
        name: 'Test Project',
        externalId: 'EXT-001',
        comments: 'Some comments',
        isActive: true,
        employees: [],
      });
    });

    it('should map project with employees from API to VM correctly', () => {
      const apiProject: apiModel.Project = {
        id: '2',
        name: 'Project with Employees',
        externalId: 'EXT-002',
        comments: 'Project comments',
        isActive: false,
        employees: [
          {
            id: 'emp-1',
            employeeName: 'John Doe',
            isAssigned: true,
          },
          {
            id: 'emp-2',
            employeeName: 'Jane Smith',
            isAssigned: false,
          },
        ],
      };

      const result = mapProjectFromApiToVm(apiProject);

      expect(result).toEqual<viewModel.Project>({
        id: '2',
        name: 'Project with Employees',
        externalId: 'EXT-002',
        comments: 'Project comments',
        isActive: false,
        employees: [
          {
            id: 'emp-1',
            employeeName: 'John Doe',
            isAssigned: true,
          },
          {
            id: 'emp-2',
            employeeName: 'Jane Smith',
            isAssigned: false,
          },
        ],
      });
    });

    it('should map project with optional fields undefined', () => {
      const apiProject: apiModel.Project = {
        id: '3',
        name: 'Minimal Project',
        isActive: true,
        employees: [],
      };

      const result = mapProjectFromApiToVm(apiProject);

      expect(result).toEqual<viewModel.Project>({
        id: '3',
        name: 'Minimal Project',
        isActive: true,
        employees: [],
      });
    });

    it('should preserve all employee properties during mapping', () => {
      const apiProject: apiModel.Project = {
        id: '4',
        name: 'Full Employee Test',
        isActive: true,
        employees: [
          {
            id: 'emp-100',
            employeeName: 'Test Employee',
            isAssigned: true,
          },
        ],
      };

      const result = mapProjectFromApiToVm(apiProject);

      expect(result.employees).toHaveLength(1);
      expect(result.employees[0]).toEqual({
        id: 'emp-100',
        employeeName: 'Test Employee',
        isAssigned: true,
      });
    });
  });
});
