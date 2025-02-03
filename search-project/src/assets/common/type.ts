export type Department = {
  id: number;
  name: string;
  description: string;
  subDepartments: Department[];
  highlighted?: boolean;
  isCollapsed?: boolean;
};
