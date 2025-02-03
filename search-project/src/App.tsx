import { useCallback, useState, useMemo } from "react";
import initialDepartments from "../data.json";
import SearchInput from "./assets/components/SearchInput";
import List from "./assets/components/List";
import { findDepartmentWithParents } from "./assets/common/textUtils";
import "./assets/css/app.scss";
import { Department } from "./assets/common/type";
import { ErrorType, useErrorMessages } from "./assets/common/useErrorMessages";

function App() {
  const [departments, setDepartments] =
    useState<Department[]>(initialDepartments);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { error, setErrorMessage, clearErrorMessage } = useErrorMessages();

  const handleSearch = useCallback((term: string) => {
    try {
      clearErrorMessage();
      setSearchTerm(term);

      if (term.trim() === "") {
        setDepartments(initialDepartments);
        return;
      }

      if (term.length < 1 || typeof term !== "string") {
        throw new Error("Geçersiz giriş, lütfen doğru bir terim girin.");
      }

      const updatedDepartments = findDepartmentWithParents(
        initialDepartments,
        term
      );

      if (updatedDepartments.length < 1) {
        setErrorMessage(ErrorType.NO_RESULTS_FOUND);
      }
      setDepartments(updatedDepartments);
    } catch (err) {
      setErrorMessage(ErrorType.LOADING_ERROR);
      console.error(err);
    }
  }, []);

  const handleClear = () => {
    clearErrorMessage();
    setSearchTerm("");
    setDepartments(initialDepartments);
  };

  const toggleCollapse = useCallback((id: number) => {
    try {
      setDepartments((prevDepartments) =>
        prevDepartments.map((department) => {
          const updateCollapseState = (dept: Department): Department => {
            if (dept.id === id) {
              return { ...dept, isCollapsed: !dept.isCollapsed };
            }
            if (dept.subDepartments.length > 0) {
              return {
                ...dept,
                subDepartments: dept.subDepartments.map(updateCollapseState),
              };
            }
            return dept;
          };
          return updateCollapseState(department);
        })
      );
    } catch (err) {
      setErrorMessage(ErrorType.DEFAULT_ERROR);
      console.error(err);
    }
  }, []);

  const memoizedDepartments = useMemo(() => {
    return departments;
  }, [departments]);

  return (
    <div className="app__container">
      <h1 className="app__header">Search Project</h1>
      {error && <div className="error-message">{error}</div>}
      <SearchInput
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onClear={handleClear}
      />
      <List departments={memoizedDepartments} toggleCollapse={toggleCollapse} />
    </div>
  );
}

export default App;
