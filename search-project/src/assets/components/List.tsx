import React from "react";
import { Department } from "../common/type";

type DepartmentListProps = {
  departments: Department[];
  toggleCollapse: (id: number) => void;
};

const List: React.FC<DepartmentListProps> = ({
  departments,
  toggleCollapse,
}) => {
  const renderDepartments = (departments: Department[]) => {
    return departments.map((department) => (
      <div
        key={department.id}
        className={`department-list__item ${
          department.highlighted ? "department-list__item--highlighted" : ""
        }`}
      >
        <div
          className="department-list__header"
          onClick={() => toggleCollapse(department.id)}
        >
          {department.subDepartments.length > 0 && (
            <span
              className={`department-list__toggle ${
                department.isCollapsed ? "collapsed" : ""
              }`}
            >
              {department.isCollapsed ? "+" : "-"}
            </span>
          )}
          <h2 className="department-list__name">{department.name}</h2>
        </div>
        {!department.isCollapsed && (
          <>
            <p className="department-list__description">
              {department.description}
            </p>
            {department.subDepartments.length > 0 && (
              <ul className="department-list__sub-list">
                {renderDepartments(department.subDepartments)}
              </ul>
            )}
          </>
        )}
      </div>
    ));
  };

  return (
    <div className="department-list">{renderDepartments(departments)}</div>
  );
};

export default List;
