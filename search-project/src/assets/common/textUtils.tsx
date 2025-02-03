import { Department } from "./type";

const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, "gi");

  return text.split(regex).map((item, index) =>
    item.toLowerCase() === searchTerm.toLowerCase() ? (
      <span key={index} className="highlight">
        {item}
      </span>
    ) : (
      item
    )
  );
  // .join("");
};

export const findDepartmentWithParents = (
  departments: Department[],
  searchTerm: string
): Department[] => {
  return departments.reduce((result: Department[], department) => {
    const isMatch =
      department.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      department.description.toLowerCase().includes(searchTerm.toLowerCase());
    console.log(isMatch);

    const filteredSubDepartments = findDepartmentWithParents(
      department.subDepartments,
      searchTerm
    );

    if (isMatch || filteredSubDepartments.length > 0) {
      result.push({
        ...department,
        name: isMatch
          ? highlightText(department.name, searchTerm)
          : department.name,
        description: isMatch
          ? highlightText(department.description, searchTerm)
          : department.description,
        subDepartments: filteredSubDepartments,
      });
    }

    return result;
  }, []);
};
